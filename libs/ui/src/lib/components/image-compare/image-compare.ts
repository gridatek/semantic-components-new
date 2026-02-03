import {
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  input,
  model,
  signal,
  viewChild,
} from '@angular/core';
import { cn } from '../../utils';

@Component({
  selector: 'sc-image-compare',
  template: `
    <div
      #container
      [class]="containerClass()"
      (mousedown)="onPointerDown($event)"
      (mousemove)="onPointerMove($event)"
      (mouseup)="onPointerUp()"
      (mouseleave)="onPointerUp()"
      (touchstart)="onTouchStart($event)"
      (touchmove)="onTouchMove($event)"
      (touchend)="onPointerUp()"
      (keydown)="onKeydown($event)"
      tabindex="0"
      role="slider"
      [attr.aria-label]="ariaLabel()"
      [attr.aria-valuenow]="position()"
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <!-- Before image (full width, clipped) -->
      <div class="absolute inset-0 overflow-hidden">
        <img
          [src]="beforeImage()"
          [alt]="beforeLabel()"
          class="size-full object-cover"
          draggable="false"
        />
      </div>

      <!-- After image (clipped by position) -->
      <div
        class="absolute inset-0 overflow-hidden"
        [style.clip-path]="clipPath()"
      >
        <img
          [src]="afterImage()"
          [alt]="afterLabel()"
          class="size-full object-cover"
          draggable="false"
        />
      </div>

      <!-- Slider line -->
      <div [class]="sliderLineClass()" [style]="sliderLineStyle()">
        <!-- Slider handle -->
        <div [class]="sliderHandleClass()">
          @if (orientation() === 'horizontal') {
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              class="size-5"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              class="size-5 rotate-180"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          } @else {
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              class="size-5 -rotate-90"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              class="size-5 rotate-90"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          }
        </div>
      </div>

      <!-- Labels -->
      @if (showLabels()) {
        <div
          class="absolute top-2 left-2 px-2 py-1 bg-black/60 text-white text-xs rounded"
        >
          {{ beforeLabel() }}
        </div>
        <div
          class="absolute top-2 right-2 px-2 py-1 bg-black/60 text-white text-xs rounded"
        >
          {{ afterLabel() }}
        </div>
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScImageCompare {
  private readonly containerRef =
    viewChild.required<ElementRef<HTMLDivElement>>('container');

  // Inputs
  readonly beforeImage = input.required<string>();
  readonly afterImage = input.required<string>();
  readonly beforeLabel = input<string>('Before');
  readonly afterLabel = input<string>('After');
  readonly orientation = input<'horizontal' | 'vertical'>('horizontal');
  readonly showLabels = input<boolean>(true);
  readonly ariaLabel = input<string>('Image comparison slider');
  readonly class = input<string>('');

  // Model for two-way binding
  readonly position = model<number>(50);

  // Internal state
  private readonly isDragging = signal(false);

  protected readonly containerClass = computed(() =>
    cn(
      'relative select-none cursor-ew-resize overflow-hidden rounded-lg',
      'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
      this.orientation() === 'vertical' && 'cursor-ns-resize',
      this.class(),
    ),
  );

  protected readonly clipPath = computed(() => {
    const pos = this.position();
    if (this.orientation() === 'horizontal') {
      return `inset(0 0 0 ${pos}%)`;
    }
    return `inset(${pos}% 0 0 0)`;
  });

  protected readonly sliderLineClass = computed(() =>
    cn(
      'absolute bg-white shadow-lg',
      this.orientation() === 'horizontal'
        ? 'top-0 bottom-0 w-0.5 -translate-x-1/2'
        : 'left-0 right-0 h-0.5 -translate-y-1/2',
    ),
  );

  protected readonly sliderLineStyle = computed(() => {
    const pos = this.position();
    if (this.orientation() === 'horizontal') {
      return { left: `${pos}%` };
    }
    return { top: `${pos}%` };
  });

  protected readonly sliderHandleClass = computed(() =>
    cn(
      'absolute bg-white rounded-full shadow-lg border-2 border-white',
      'flex items-center justify-center',
      this.orientation() === 'horizontal'
        ? 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10'
        : 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 flex-col',
    ),
  );

  protected onPointerDown(event: MouseEvent): void {
    this.isDragging.set(true);
    this.updatePosition(event.clientX, event.clientY);
  }

  protected onPointerMove(event: MouseEvent): void {
    if (!this.isDragging()) return;
    this.updatePosition(event.clientX, event.clientY);
  }

  protected onPointerUp(): void {
    this.isDragging.set(false);
  }

  protected onTouchStart(event: TouchEvent): void {
    event.preventDefault();
    this.isDragging.set(true);
    const touch = event.touches[0];
    this.updatePosition(touch.clientX, touch.clientY);
  }

  protected onTouchMove(event: TouchEvent): void {
    if (!this.isDragging()) return;
    event.preventDefault();
    const touch = event.touches[0];
    this.updatePosition(touch.clientX, touch.clientY);
  }

  protected onKeydown(event: KeyboardEvent): void {
    const step = event.shiftKey ? 10 : 1;
    let newPosition = this.position();

    if (this.orientation() === 'horizontal') {
      if (event.key === 'ArrowLeft') {
        newPosition = Math.max(0, newPosition - step);
        event.preventDefault();
      } else if (event.key === 'ArrowRight') {
        newPosition = Math.min(100, newPosition + step);
        event.preventDefault();
      }
    } else {
      if (event.key === 'ArrowUp') {
        newPosition = Math.max(0, newPosition - step);
        event.preventDefault();
      } else if (event.key === 'ArrowDown') {
        newPosition = Math.min(100, newPosition + step);
        event.preventDefault();
      }
    }

    if (event.key === 'Home') {
      newPosition = 0;
      event.preventDefault();
    } else if (event.key === 'End') {
      newPosition = 100;
      event.preventDefault();
    }

    this.position.set(newPosition);
  }

  private updatePosition(clientX: number, clientY: number): void {
    const container = this.containerRef().nativeElement;
    const rect = container.getBoundingClientRect();

    let position: number;
    if (this.orientation() === 'horizontal') {
      position = ((clientX - rect.left) / rect.width) * 100;
    } else {
      position = ((clientY - rect.top) / rect.height) * 100;
    }

    this.position.set(Math.max(0, Math.min(100, position)));
  }
}

