import {
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  ElementRef,
  inject,
  input,
  model,
  output,
  signal,
  viewChild,
} from '@angular/core';
import { cn } from '../../utils';

export interface SignaturePoint {
  x: number;
  y: number;
  pressure?: number;
}

export interface SignatureLine {
  points: SignaturePoint[];
  color: string;
  width: number;
}

@Component({
  selector: 'sc-signature-pad',
  template: `
    <div [class]="containerClass()">
      <canvas
        #canvas
        [width]="canvasWidth()"
        [height]="canvasHeight()"
        [class]="canvasClass()"
        (mousedown)="onPointerDown($event)"
        (mousemove)="onPointerMove($event)"
        (mouseup)="onPointerUp()"
        (mouseleave)="onPointerUp()"
        (touchstart)="onTouchStart($event)"
        (touchmove)="onTouchMove($event)"
        (touchend)="onPointerUp()"
        [attr.aria-label]="ariaLabel()"
        role="img"
      ></canvas>
      @if (showControls()) {
        <div [class]="controlsClass()">
          <button
            type="button"
            (click)="undo()"
            [disabled]="!canUndo()"
            [class]="buttonClass()"
            aria-label="Undo last stroke"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              class="size-4"
            >
              <path d="M3 7v6h6" />
              <path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" />
            </svg>
          </button>
          <button
            type="button"
            (click)="clear()"
            [disabled]="!canUndo()"
            [class]="buttonClass()"
            aria-label="Clear signature"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              class="size-4"
            >
              <path d="M3 6h18" />
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
            </svg>
          </button>
        </div>
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSignaturePad {
  private readonly destroyRef = inject(DestroyRef);
  private readonly canvasRef =
    viewChild.required<ElementRef<HTMLCanvasElement>>('canvas');

  // Inputs
  readonly width = input<number>(400);
  readonly height = input<number>(200);
  readonly penColor = input<string>('#000000');
  readonly penWidth = input<number>(2);
  readonly backgroundColor = input<string>('#ffffff');
  readonly showControls = input<boolean>(true);
  readonly disabled = input<boolean>(false);
  readonly ariaLabel = input<string>('Signature pad');
  readonly class = input<string>('');

  // Model for two-way binding
  readonly isEmpty = model<boolean>(true);

  // Outputs
  readonly signatureChange = output<string>();
  readonly strokeEnd = output<void>();

  // Internal state
  private readonly lines = signal<SignatureLine[]>([]);
  private readonly isDrawing = signal(false);
  private readonly currentLine = signal<SignaturePoint[]>([]);

  protected readonly canUndo = computed(() => this.lines().length > 0);

  protected readonly canvasWidth = computed(() => this.width());
  protected readonly canvasHeight = computed(() => this.height());

  protected readonly containerClass = computed(() =>
    cn('relative inline-block', this.class()),
  );

  protected readonly canvasClass = computed(() =>
    cn(
      'border rounded-lg cursor-crosshair touch-none',
      this.disabled() && 'opacity-50 cursor-not-allowed',
    ),
  );

  protected readonly controlsClass = computed(() =>
    cn('absolute top-2 right-2 flex gap-1'),
  );

  protected readonly buttonClass = computed(() =>
    cn(
      'p-1.5 rounded-md bg-background/80 border hover:bg-accent',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      'focus:outline-none focus:ring-2 focus:ring-ring',
    ),
  );

  constructor() {
    // Redraw on any state change
    this.destroyRef.onDestroy(() => {
      // Cleanup if needed
    });
  }

  ngAfterViewInit(): void {
    this.redraw();
  }

  private getContext(): CanvasRenderingContext2D | null {
    return this.canvasRef()?.nativeElement.getContext('2d') ?? null;
  }

  private getCanvasPoint(clientX: number, clientY: number): SignaturePoint {
    const canvas = this.canvasRef().nativeElement;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    return {
      x: (clientX - rect.left) * scaleX,
      y: (clientY - rect.top) * scaleY,
    };
  }

  protected onPointerDown(event: MouseEvent): void {
    if (this.disabled()) return;

    this.isDrawing.set(true);
    const point = this.getCanvasPoint(event.clientX, event.clientY);
    this.currentLine.set([point]);
    this.drawPoint(point);
  }

  protected onPointerMove(event: MouseEvent): void {
    if (!this.isDrawing() || this.disabled()) return;

    const point = this.getCanvasPoint(event.clientX, event.clientY);
    this.currentLine.update((line) => [...line, point]);
    this.drawLine();
  }

  protected onPointerUp(): void {
    if (!this.isDrawing()) return;

    this.isDrawing.set(false);

    if (this.currentLine().length > 0) {
      this.lines.update((lines) => [
        ...lines,
        {
          points: this.currentLine(),
          color: this.penColor(),
          width: this.penWidth(),
        },
      ]);
      this.currentLine.set([]);
      this.isEmpty.set(false);
      this.strokeEnd.emit();
      this.emitSignature();
    }
  }

  protected onTouchStart(event: TouchEvent): void {
    if (this.disabled()) return;
    event.preventDefault();

    const touch = event.touches[0];
    this.isDrawing.set(true);
    const point = this.getCanvasPoint(touch.clientX, touch.clientY);
    this.currentLine.set([point]);
    this.drawPoint(point);
  }

  protected onTouchMove(event: TouchEvent): void {
    if (!this.isDrawing() || this.disabled()) return;
    event.preventDefault();

    const touch = event.touches[0];
    const point = this.getCanvasPoint(touch.clientX, touch.clientY);
    this.currentLine.update((line) => [...line, point]);
    this.drawLine();
  }

  private drawPoint(point: SignaturePoint): void {
    const ctx = this.getContext();
    if (!ctx) return;

    ctx.fillStyle = this.penColor();
    ctx.beginPath();
    ctx.arc(point.x, point.y, this.penWidth() / 2, 0, Math.PI * 2);
    ctx.fill();
  }

  private drawLine(): void {
    const ctx = this.getContext();
    const points = this.currentLine();
    if (!ctx || points.length < 2) return;

    ctx.strokeStyle = this.penColor();
    ctx.lineWidth = this.penWidth();
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    const lastTwo = points.slice(-2);
    ctx.beginPath();
    ctx.moveTo(lastTwo[0].x, lastTwo[0].y);
    ctx.lineTo(lastTwo[1].x, lastTwo[1].y);
    ctx.stroke();
  }

  private drawFullLine(line: SignatureLine): void {
    const ctx = this.getContext();
    if (!ctx || line.points.length === 0) return;

    ctx.strokeStyle = line.color;
    ctx.lineWidth = line.width;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    if (line.points.length === 1) {
      ctx.fillStyle = line.color;
      ctx.beginPath();
      ctx.arc(
        line.points[0].x,
        line.points[0].y,
        line.width / 2,
        0,
        Math.PI * 2,
      );
      ctx.fill();
      return;
    }

    ctx.beginPath();
    ctx.moveTo(line.points[0].x, line.points[0].y);

    for (let i = 1; i < line.points.length; i++) {
      ctx.lineTo(line.points[i].x, line.points[i].y);
    }
    ctx.stroke();
  }

  private redraw(): void {
    const ctx = this.getContext();
    if (!ctx) return;

    // Clear and fill background
    ctx.fillStyle = this.backgroundColor();
    ctx.fillRect(0, 0, this.canvasWidth(), this.canvasHeight());

    // Redraw all lines
    for (const line of this.lines()) {
      this.drawFullLine(line);
    }
  }

  private emitSignature(): void {
    this.signatureChange.emit(this.toDataURL());
  }

  // Public API
  clear(): void {
    this.lines.set([]);
    this.currentLine.set([]);
    this.isEmpty.set(true);
    this.redraw();
    this.signatureChange.emit('');
  }

  undo(): void {
    if (this.lines().length === 0) return;

    this.lines.update((lines) => lines.slice(0, -1));
    this.isEmpty.set(this.lines().length === 0);
    this.redraw();
    this.emitSignature();
  }

  toDataURL(
    type: 'image/png' | 'image/jpeg' = 'image/png',
    quality?: number,
  ): string {
    const canvas = this.canvasRef()?.nativeElement;
    if (!canvas) return '';
    return canvas.toDataURL(type, quality);
  }

  toBlob(
    callback: (blob: Blob | null) => void,
    type?: string,
    quality?: number,
  ): void {
    const canvas = this.canvasRef()?.nativeElement;
    if (!canvas) {
      callback(null);
      return;
    }
    canvas.toBlob(callback, type, quality);
  }
}
