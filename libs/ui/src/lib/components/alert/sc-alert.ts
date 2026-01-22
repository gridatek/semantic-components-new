import { computed, Directive, input } from '@angular/core';
import { cn } from '../../utils';

export type AlertVariant = 'default' | 'destructive';

const variantClasses: Record<AlertVariant, string> = {
  default: 'bg-background text-foreground',
  destructive:
    'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive',
};

@Directive({
  selector: '[sc-alert]',
  host: {
    'data-slot': 'alert',
    role: 'alert',
    '[class]': 'class()',
  },
})
export class ScAlert {
  readonly classInput = input<string>('', { alias: 'class' });
  readonly variant = input<AlertVariant>('default');

  protected readonly class = computed(() =>
    cn(
      'relative w-full rounded-lg border p-4',
      '[&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground',
      variantClasses[this.variant()],
      this.classInput(),
    ),
  );
}

@Directive({
  selector: '[sc-alert-title]',
  host: {
    'data-slot': 'alert-title',
    '[class]': 'class()',
  },
})
export class ScAlertTitle {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn('mb-1 font-medium leading-none tracking-tight', this.classInput()),
  );
}

@Directive({
  selector: '[sc-alert-description]',
  host: {
    'data-slot': 'alert-description',
    '[class]': 'class()',
  },
})
export class ScAlertDescription {
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn('text-sm [&_p]:leading-relaxed', this.classInput()),
  );
}
