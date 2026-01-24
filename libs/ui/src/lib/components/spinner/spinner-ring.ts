import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';

@Component({
  selector: '[sc-spinner-ring]',
  template: `
    <span [class]="ringClass()"></span>
    @if (hasContent) {
      <span [class]="textClass()">
        <ng-content />
      </span>
    }
  `,
  host: {
    'data-slot': 'spinner-ring',
    role: 'status',
    '[class]': 'class()',
    '[attr.aria-label]': 'label()',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSpinnerRing {
  readonly classInput = input<string>('', { alias: 'class' });
  readonly size = input<'xs' | 'sm' | 'default' | 'lg' | 'xl'>('default');
  readonly label = input<string>('Loading');

  hasContent = false;

  protected readonly class = computed(() =>
    cn('inline-flex items-center gap-2', this.classInput()),
  );

  protected readonly ringClass = computed(() =>
    cn(
      'animate-spin rounded-full border-2 border-current border-t-transparent',
      this.size() === 'xs' && 'size-3',
      this.size() === 'sm' && 'size-4',
      this.size() === 'default' && 'size-5',
      this.size() === 'lg' && 'size-6',
      this.size() === 'xl' && 'size-8',
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
