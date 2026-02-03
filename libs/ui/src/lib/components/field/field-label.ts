import { computed, Directive, inject, input } from '@angular/core';
import { cn } from '../../utils';
import { SC_FIELD_TOKEN } from './field';

@Directive({
  selector: 'label[sc-field-label]',
  host: {
    'data-slot': 'field-label',
    '[attr.for]': 'field.id()',
    '[class]': 'class()',
  },
})
export class ScFieldLabel {
  readonly field = inject(SC_FIELD_TOKEN);
  readonly classInput = input<string>('', { alias: 'class' });

  protected readonly class = computed(() =>
    cn(
      'has-data-checked:bg-primary/5 has-data-checked:border-primary dark:has-data-checked:bg-primary/10 gap-2 group-data-[disabled=true]/field:opacity-50 has-[>[data-slot=field]]:rounded-lg has-[>[data-slot=field]]:border [&>*]:data-[slot=field]:p-2.5 group/field-label peer/field-label flex w-fit leading-snug',
      'has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col',
      this.classInput(),
    ),
  );
}
