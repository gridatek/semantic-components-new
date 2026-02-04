import {
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChild,
  input,
} from '@angular/core';
import { cn } from '../../utils';
import { SC_CHECKBOX_FIELD, type ScCheckboxContext } from './checkbox-types';
import { ScCheckbox } from './checkbox';
import { ScVisualCheckbox } from './visual-checkbox';

@Component({
  selector: 'div[sc-checkbox-field], label[sc-checkbox-field]',
  imports: [ScVisualCheckbox],
  providers: [{ provide: SC_CHECKBOX_FIELD, useExisting: ScCheckboxField }],
  host: {
    'data-slot': 'checkbox-field',
    '[class]': 'class()',
    '[attr.data-state]': 'dataState()',
    '[attr.data-disabled]': 'disabled() ? "" : null',
  },
  template: `
    <span sc-visual-checkbox></span>
    <ng-content />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScCheckboxField implements ScCheckboxContext {
  private readonly checkbox = contentChild(ScCheckbox);

  readonly classInput = input<string>('', { alias: 'class' });

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
    cn('relative inline-flex h-4 w-4 shrink-0', this.classInput()),
  );
}
