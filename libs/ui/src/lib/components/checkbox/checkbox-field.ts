import { _IdGenerator } from '@angular/cdk/a11y';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChild,
  inject,
  input,
} from '@angular/core';
import { cn } from '../../utils';
import { SC_FIELD_ID } from '../label/label-id';
import { SC_CHECKBOX_FIELD, type ScCheckboxContext } from './checkbox-types';
import { ScCheckbox } from './checkbox';
import { ScVisualCheckbox } from './visual-checkbox';

@Component({
  selector: 'div[sc-checkbox-field], label[sc-checkbox-field]',
  imports: [ScVisualCheckbox],
  providers: [
    { provide: SC_CHECKBOX_FIELD, useExisting: ScCheckboxField },
    { provide: SC_FIELD_ID, useExisting: ScCheckboxField },
  ],
  host: {
    'data-slot': 'checkbox-field',
    '[class]': 'class()',
    '[attr.data-state]': 'dataState()',
    '[attr.data-disabled]': 'disabled() ? "" : null',
  },
  template: `
    <ng-content select="[sc-checkbox]" />
    <span sc-visual-checkbox></span>
    <ng-content />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScCheckboxField implements ScCheckboxContext {
  private readonly checkbox = contentChild(ScCheckbox);

  readonly classInput = input<string>('', { alias: 'class' });

  readonly generatedId = inject(_IdGenerator).getId('sc-checkbox-field-');

  readonly id = computed(() => this.generatedId);

  // Computed state from input (implements ScCheckboxContext)
  // These read directly from the ScCheckbox's signals
  readonly checked = computed(() => this.checkbox()?.checked() ?? false);
  readonly disabled = computed(
    () => this.checkbox()?.disabledSignal() ?? false,
  );
  readonly indeterminate = computed(
    () => this.checkbox()?.indeterminate() ?? false,
  );
  readonly dataState = computed(() => {
    if (this.indeterminate()) return 'indeterminate';
    return this.checked() ? 'checked' : 'unchecked';
  });

  protected readonly class = computed(() =>
    cn(
      'grid grid-cols-[1rem_1fr] items-start gap-x-2 gap-y-1',
      '*:data-[slot=checkbox]:col-start-1 *:data-[slot=checkbox]:row-start-1',
      '*:data-[slot=visual-checkbox]:col-start-1 *:data-[slot=visual-checkbox]:row-start-1',
      '*:data-[slot=label]:col-start-2 *:data-[slot=label]:row-start-1',
      '*:data-[slot=field-description]:col-start-2 *:data-[slot=field-description]:row-start-2',
      'has-[>[data-slot=field-description]]:*:data-[slot=label]:font-medium',
      this.classInput(),
    ),
  );
}
