import { computed, Directive, input } from '@angular/core';
import { cn } from '../../utils';
import {
  ScButtonSize,
  ScButtonVariant,
  sizeStyles,
  variantStyles,
} from './button-types';

@Directive({
  selector: 'button[sc-button], a[sc-button]',
  host: {
    'data-slot': 'button',
    '[class]': 'class()',
  },
})
export class ScButton {
  readonly classInput = input<string>('', { alias: 'class' });
  readonly variant = input<ScButtonVariant>('default');
  readonly size = input<ScButtonSize>('default');

  protected readonly class = computed(() =>
    cn(
      'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium',
      'ring-offset-background transition-colors',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      'disabled:pointer-events-none disabled:opacity-50',
      '[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
      variantStyles[this.variant()],
      sizeStyles[this.size()],
      this.classInput(),
    ),
  );
}
