import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';

@Component({
  selector: '[sc-spinner-bars]',
  template: `
    <span class="flex items-end gap-0.5" [class]="barsContainerClass()">
      <span [class]="barClass()" style="animation-delay: 0ms"></span>
      <span [class]="barClass()" style="animation-delay: 100ms"></span>
      <span [class]="barClass()" style="animation-delay: 200ms"></span>
      <span [class]="barClass()" style="animation-delay: 300ms"></span>
    </span>
    @if (hasContent) {
      <span [class]="textClass()">
        <ng-content />
      </span>
    }
  `,
  styles: `
    @keyframes stretch-bar {
      0%,
      40%,
      100% {
        transform: scaleY(0.4);
      }
      20% {
        transform: scaleY(1);
      }
    }
    [data-slot='spinner-bars'] span span {
      animation: stretch-bar 1.2s infinite ease-in-out;
    }
  `,
  host: {
    'data-slot': 'spinner-bars',
    role: 'status',
    '[class]': 'class()',
    '[attr.aria-label]': 'label()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSpinnerBars {
  readonly classInput = input<string>('', { alias: 'class' });
  readonly size = input<'xs' | 'sm' | 'default' | 'lg' | 'xl'>('default');
  readonly label = input<string>('Loading');

  hasContent = false;

  protected readonly class = computed(() =>
    cn('inline-flex items-center gap-2', this.classInput()),
  );

  protected readonly barsContainerClass = computed(() =>
    cn(
      this.size() === 'xs' && 'h-3',
      this.size() === 'sm' && 'h-4',
      this.size() === 'default' && 'h-5',
      this.size() === 'lg' && 'h-6',
      this.size() === 'xl' && 'h-8',
    ),
  );

  protected readonly barClass = computed(() =>
    cn(
      'bg-current rounded-sm',
      this.size() === 'xs' && 'w-0.5 h-full',
      this.size() === 'sm' && 'w-0.5 h-full',
      this.size() === 'default' && 'w-1 h-full',
      this.size() === 'lg' && 'w-1 h-full',
      this.size() === 'xl' && 'w-1.5 h-full',
    ),
  );

  protected readonly textClass = computed(() =>
    cn(
      this.size() === 'xs' && 'text-xs',
      this.size() === 'sm' && 'text-sm',
      this.size() === 'default' && 'text-sm',
      this.size() === 'lg' && 'text-base',
      this.size() === 'xl' && 'text-lg',
    ),
  );
}
