import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';

@Component({
  selector: '[sc-spinner-dots]',
  template: `
    <span class="flex items-center gap-1">
      <span [class]="dotClass()" style="animation-delay: 0ms"></span>
      <span [class]="dotClass()" style="animation-delay: 150ms"></span>
      <span [class]="dotClass()" style="animation-delay: 300ms"></span>
    </span>
    @if (hasContent) {
      <span [class]="textClass()">
        <ng-content />
      </span>
    }
  `,
  styles: `
    @keyframes bounce-dot {
      0%,
      80%,
      100% {
        transform: scale(0);
        opacity: 0.5;
      }
      40% {
        transform: scale(1);
        opacity: 1;
      }
    }
    [data-slot='spinner-dots'] span span {
      animation: bounce-dot 1.4s infinite ease-in-out both;
    }
  `,
  host: {
    'data-slot': 'spinner-dots',
    role: 'status',
    '[class]': 'class()',
    '[attr.aria-label]': 'label()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSpinnerDots {
  readonly classInput = input<string>('', { alias: 'class' });
  readonly size = input<'xs' | 'sm' | 'default' | 'lg' | 'xl'>('default');
  readonly label = input<string>('Loading');

  hasContent = false;

  protected readonly class = computed(() =>
    cn('inline-flex items-center gap-2', this.classInput()),
  );

  protected readonly dotClass = computed(() =>
    cn(
      'rounded-full bg-current',
      this.size() === 'xs' && 'size-1',
      this.size() === 'sm' && 'size-1.5',
      this.size() === 'default' && 'size-2',
      this.size() === 'lg' && 'size-2.5',
      this.size() === 'xl' && 'size-3',
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
