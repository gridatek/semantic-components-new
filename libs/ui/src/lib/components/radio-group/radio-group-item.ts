import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import { SiCircleIcon } from '@semantic-icons/lucide-icons';
import { cn } from '../../utils';
import { ScInvisibleRadio } from './invisible-radio';
import { ScRadioGroup } from './radio-group';
import { ScRadioIndicator } from './radio-indicator';
import { ScRadioCheckedIcon } from './radio-checked-icon';

@Component({
  selector: 'sc-radio-group-item',
  imports: [ScInvisibleRadio, ScRadioIndicator, ScRadioCheckedIcon, SiCircleIcon],
  host: {
    'data-slot': 'radio-group-item',
    '[class]': 'class()',
    '[attr.data-state]': 'isSelected() ? "checked" : "unchecked"',
    '[attr.data-disabled]': 'isDisabled() ? "" : null',
  },
  template: `
    <input
      type="radio"
      sc-invisible-radio
      [name]="group.name()"
      [value]="value()"
      [checked]="isSelected()"
      [disabled]="isDisabled()"
      (change)="onChange()"
    />
    <span sc-radio-indicator [disabled]="isDisabled()">
      @if (isSelected()) {
        <svg si-circle-icon sc-radio-checked-icon></svg>
      }
    </span>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScRadioGroupItem {
  readonly group = inject(ScRadioGroup);

  readonly classInput = input<string>('', { alias: 'class' });
  readonly value = input.required<string>();
  readonly disabled = input<boolean>(false);

  readonly isSelected = computed(() => this.group.isSelected(this.value()));
  readonly isDisabled = computed(
    () => this.disabled() || this.group.disabled(),
  );

  protected readonly class = computed(() =>
    cn(
      'relative inline-flex items-center gap-2',
      this.classInput(),
    ),
  );

  protected onChange(): void {
    if (!this.isDisabled()) {
      this.group.select(this.value());
    }
  }
}
