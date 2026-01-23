import { computed, Directive, input } from '@angular/core';
import { cn } from '../../utils';

export type KbdVariant = 'default' | 'outline';
export type KbdSize = 'default' | 'sm' | 'lg';

// ============================================================================
// Kbd
// ============================================================================
@Directive({
  selector: '[sc-kbd]',
  host: {
    'data-slot': 'kbd',
    '[class]': 'class()',
  },
})
export class ScKbd {
  readonly classInput = input<string>('', { alias: 'class' });
  readonly variant = input<KbdVariant>('default');
  readonly size = input<KbdSize>('default');

  protected readonly class = computed(() => {
    const variant = this.variant();
    const size = this.size();

    return cn(
      'inline-flex items-center justify-center rounded font-mono font-medium',
      // Variant styles
      variant === 'default' &&
        'border border-border bg-muted text-muted-foreground shadow-[0_2px_0_0] shadow-border',
      variant === 'outline' && 'border border-border text-foreground',
      // Size styles
      size === 'sm' && 'min-w-5 px-1 py-0.5 text-[10px]',
      size === 'default' && 'min-w-6 px-1.5 py-0.5 text-xs',
      size === 'lg' && 'min-w-8 px-2 py-1 text-sm',
      this.classInput(),
    );
  });
}
