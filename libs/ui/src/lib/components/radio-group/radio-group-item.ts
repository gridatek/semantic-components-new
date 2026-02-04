import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  ElementRef,
  inject,
  input,
  viewChild,
} from '@angular/core';
import { SiCircleIcon } from '@semantic-icons/lucide-icons';
import { cn } from '../../utils';
import { ScInvisibleRadio } from './invisible-radio';
import { ScRadioGroup } from './radio-group';
import { ScRadioIndicator } from './radio-indicator';
import { ScRadioCheckedIcon } from './radio-checked-icon';

@Component({
  selector: 'sc-radio-group-item',
  imports: [
    ScInvisibleRadio,
    ScRadioIndicator,
    ScRadioCheckedIcon,
    SiCircleIcon,
  ],
  host: {
    'data-slot': 'radio-group-item',
    '[class]': 'class()',
    '[attr.data-state]': 'isSelected() ? "checked" : "unchecked"',
    '[attr.data-disabled]': 'isDisabled() ? "" : null',
  },
  template: `
    <input
      #inputElement
      type="radio"
      sc-invisible-radio
      [id]="id()"
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
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private readonly inputElement =
    viewChild<ElementRef<HTMLInputElement>>('inputElement');

  readonly group = inject(ScRadioGroup);

  readonly classInput = input<string>('', { alias: 'class' });
  readonly value = input.required<string>();
  readonly disabled = input<boolean>(false);
  readonly id = input<string>('');

  readonly isSelected = computed(() => this.group.isSelected(this.value()));
  readonly isDisabled = computed(
    () => this.disabled() || this.group.disabled(),
  );

  constructor() {
    // Transfer id from host element to input for label association
    effect(() => {
      const input = this.inputElement()?.nativeElement;
      if (input) {
        const hostId =
          this.id() || this.elementRef.nativeElement.getAttribute('id');
        if (hostId) {
          input.id = hostId;
          // Remove id from host element to prevent duplicate IDs
          this.elementRef.nativeElement.removeAttribute('id');
        }
      }
    });
  }

  protected readonly class = computed(() =>
    cn('relative inline-flex items-center gap-2', this.classInput()),
  );

  protected onChange(): void {
    if (!this.isDisabled()) {
      this.group.select(this.value());
    }
  }
}
