import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { cn } from '../../utils';

@Component({
  selector: 'sc-checkbox-indicator',
  host: {
    '[class]': 'class()',
    '[attr.data-state]': 'state()',
    '[attr.aria-hidden]': 'true',
  },
  template: `
    <ng-content />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScCheckboxIndicator {
  readonly classInput = input<string>('', { alias: 'class' });
  readonly state = input<'checked' | 'unchecked' | 'indeterminate'>('unchecked');

  protected readonly class = computed(() =>
    cn(
      'pointer-events-none inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-sm border border-primary transition-colors',
      'data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
      'data-[state=indeterminate]:bg-primary data-[state=indeterminate]:text-primary-foreground',
      this.classInput(),
    ),
  );
}
