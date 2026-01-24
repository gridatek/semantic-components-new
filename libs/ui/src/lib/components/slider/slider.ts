import {
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  ElementRef,
  inject,
  input,
  model,
  OnInit,
  signal,
  viewChild,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { fromEvent, merge } from 'rxjs';
import { cn } from '../../utils';

@Component({
  selector: 'div[sc-slider]',
  host: {
    'data-slot': 'slider',
    '[class]': 'class()',
    '[attr.data-disabled]': 'disabled() || null',
  },
  template: `
    <div data-slot="slider-track" [class]="trackClass()">
      <div
        data-slot="slider-range"
        [class]="rangeClass()"
        [style.width.%]="percentage()"
      ></div>
    </div>
    <div
      #thumb
      data-slot="slider-thumb"
      [class]="thumbClass()"
      [style.left.%]="percentage()"
      [attr.tabindex]="disabled() ? -1 : 0"
      [attr.role]="'slider'"
      [attr.aria-valuemin]="min()"
      [attr.aria-valuemax]="max()"
      [attr.aria-valuenow]="value()"
      [attr.aria-disabled]="disabled() || null"
      (keydown)="onKeydown($event)"
      (mousedown)="onThumbMouseDown($event)"
      (touchstart)="onThumbTouchStart($event)"
    ></div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSlider implements OnInit {
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private readonly destroyRef = inject(DestroyRef);

  readonly classInput = input<string>('', { alias: 'class' });
  readonly value = model<number>(0);
  readonly min = input<number>(0);
  readonly max = input<number>(100);
  readonly step = input<number>(1);
  readonly disabled = input<boolean>(false);

  readonly thumb = viewChild.required<ElementRef<HTMLDivElement>>('thumb');

  private readonly isDragging = signal(false);

  protected readonly percentage = computed(() => {
    const minVal = this.min();
    const maxVal = this.max();
    const val = this.value();
    if (maxVal === minVal) return 0;
    return ((val - minVal) / (maxVal - minVal)) * 100;
  });

  protected readonly class = computed(() =>
    cn(
      'relative flex w-full touch-none select-none items-center',
      this.disabled() && 'opacity-50 cursor-not-allowed',
      this.classInput(),
    ),
  );

  protected readonly trackClass = computed(() =>
    cn('relative h-2 w-full grow overflow-hidden rounded-full bg-secondary'),
  );

  protected readonly rangeClass = computed(() =>
    cn('absolute h-full bg-primary'),
  );

  protected readonly thumbClass = computed(() =>
    cn(
      'absolute block size-5 -translate-x-1/2 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      this.disabled()
        ? 'cursor-not-allowed'
        : 'cursor-grab active:cursor-grabbing',
    ),
  );

  ngOnInit(): void {
    merge(
      fromEvent<MouseEvent>(document, 'mousemove'),
      fromEvent<MouseEvent>(document, 'mouseup'),
      fromEvent<TouchEvent>(document, 'touchmove'),
      fromEvent<TouchEvent>(document, 'touchend'),
    )
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((event) => {
        if (!this.isDragging()) return;

        if (event.type === 'mouseup' || event.type === 'touchend') {
          this.isDragging.set(false);
          return;
        }

        if (event.type === 'mousemove') {
          this.updateValueFromPosition((event as MouseEvent).clientX);
        } else if (event.type === 'touchmove') {
          const touch = (event as TouchEvent).touches[0];
          if (touch) {
            this.updateValueFromPosition(touch.clientX);
          }
        }
      });
  }

  protected onThumbMouseDown(event: MouseEvent): void {
    if (this.disabled()) return;
    event.preventDefault();
    this.isDragging.set(true);
  }

  protected onThumbTouchStart(event: TouchEvent): void {
    if (this.disabled()) return;
    event.preventDefault();
    this.isDragging.set(true);
  }

  protected onKeydown(event: KeyboardEvent): void {
    if (this.disabled()) return;

    const stepVal = this.step();
    const minVal = this.min();
    const maxVal = this.max();
    let newValue = this.value();

    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowUp':
        event.preventDefault();
        newValue = Math.min(newValue + stepVal, maxVal);
        break;
      case 'ArrowLeft':
      case 'ArrowDown':
        event.preventDefault();
        newValue = Math.max(newValue - stepVal, minVal);
        break;
      case 'Home':
        event.preventDefault();
        newValue = minVal;
        break;
      case 'End':
        event.preventDefault();
        newValue = maxVal;
        break;
      case 'PageUp':
        event.preventDefault();
        newValue = Math.min(newValue + stepVal * 10, maxVal);
        break;
      case 'PageDown':
        event.preventDefault();
        newValue = Math.max(newValue - stepVal * 10, minVal);
        break;
      default:
        return;
    }

    this.value.set(newValue);
  }

  private updateValueFromPosition(clientX: number): void {
    const rect = this.elementRef.nativeElement.getBoundingClientRect();
    const percentage = Math.max(
      0,
      Math.min(1, (clientX - rect.left) / rect.width),
    );

    const minVal = this.min();
    const maxVal = this.max();
    const stepVal = this.step();

    let newValue = minVal + percentage * (maxVal - minVal);
    newValue = Math.round(newValue / stepVal) * stepVal;
    newValue = Math.max(minVal, Math.min(maxVal, newValue));

    this.value.set(newValue);
  }
}
