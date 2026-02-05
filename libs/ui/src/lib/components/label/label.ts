import { computed, Directive, inject, input } from '@angular/core';
import { cn } from '../../utils';
import { SC_FIELD_ID } from './label-id';

@Directive({
  selector: 'label[sc-label]',
  host: {
    'data-slot': 'label',
    '[attr.for]': 'for()',
    '[class]': 'class()',
  },
})
export class ScLabel {
  private readonly fieldId = inject(SC_FIELD_ID, { optional: true });

  readonly forInput = input<string>('', { alias: 'for' });
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly for = computed(() => {
    // Priority: explicit for input > field context
    const forValue = this.forInput() || this.fieldId?.id();
    return forValue || null;
  });

  protected readonly class = computed(() =>
    cn(
      'has-data-checked:bg-primary/5 has-data-checked:border-primary dark:has-data-checked:bg-primary/10 gap-2 group-data-[disabled=true]/field:opacity-50 has-[>[data-slot=field]]:rounded-lg has-[>[data-slot=field]]:border [&>*]:data-[slot=field]:p-2.5 group/label peer/label flex w-fit leading-snug',
      'has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col',
      this.classInput(),
    ),
  );
}
