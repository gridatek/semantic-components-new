import { _IdGenerator } from '@angular/cdk/a11y';
import {
  Directive,
  effect,
  inject,
  InjectionToken,
  input,
  model,
  ModelSignal,
  output,
  signal,
  untracked,
  WritableSignal,
} from '@angular/core';
import {
  SC_FIELD_TOKEN,
  type ScFieldContext,
  type ScFieldVariants,
} from '../field/field';
import { SC_FIELD_ID } from '../label/label-id';

// Token for password field context - interface to avoid circular dependency
export interface ScPasswordFieldContext {
  readonly value: ModelSignal<string>;
  readonly visible: WritableSignal<boolean>;
  toggle(): void;
  setValue(value: string): void;
}

export const SC_PASSWORD_FIELD = new InjectionToken<ScPasswordFieldContext>(
  'SC_PASSWORD_FIELD',
);

@Directive({
  selector: '[sc-password-field]',
  exportAs: 'scPasswordField',
  providers: [
    { provide: SC_PASSWORD_FIELD, useExisting: ScPasswordField },
    { provide: SC_FIELD_TOKEN, useExisting: ScPasswordField },
    { provide: SC_FIELD_ID, useExisting: ScPasswordField },
  ],
  host: {
    role: 'group',
    'data-slot': 'password-field',
    '[attr.data-orientation]': 'orientation()',
    '[attr.data-invalid]': 'invalid()',
    '[attr.data-disabled]': 'disabled() || null',
  },
})
export class ScPasswordField implements ScFieldContext {
  readonly id = input(inject(_IdGenerator).getId('sc-password-field-'));
  readonly orientation = input<ScFieldVariants['orientation']>('vertical');
  readonly invalid = input<boolean>(false);
  readonly value = model<string>('');
  readonly disabled = input<boolean>(false);
  readonly showByDefault = input<boolean>(false);

  readonly valueChange = output<string>();
  readonly visibilityChange = output<boolean>();

  readonly visible = signal(false);

  private readonly showByDefaultEffect = effect(() => {
    const showByDefault = this.showByDefault();
    untracked(() => {
      if (showByDefault) {
        this.visible.set(true);
      }
    });
  });

  toggle(): void {
    this.visible.update((v) => !v);
    this.visibilityChange.emit(this.visible());
  }

  show(): void {
    this.visible.set(true);
    this.visibilityChange.emit(true);
  }

  hide(): void {
    this.visible.set(false);
    this.visibilityChange.emit(false);
  }

  setValue(value: string): void {
    if (this.disabled()) return;
    this.value.set(value);
    this.valueChange.emit(value);
  }
}
