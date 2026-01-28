import {
  Directive,
  effect,
  inject,
  InjectionToken,
  input,
  model,
  output,
  signal,
  untracked,
} from '@angular/core';
import { _IdGenerator } from '@angular/cdk/a11y';

// Token for password field context - interface to avoid circular dependency
export interface ScPasswordFieldContext {
  readonly inputId: string;
}

export const SC_PASSWORD_FIELD = new InjectionToken<ScPasswordFieldContext>(
  'SC_PASSWORD_FIELD',
);

@Directive({
  selector: '[sc-password-field]',
  exportAs: 'scPasswordField',
  providers: [{ provide: SC_PASSWORD_FIELD, useExisting: ScPasswordField }],
  host: {
    'data-slot': 'password-field',
    '[attr.data-disabled]': 'disabled() || null',
  },
})
export class ScPasswordField {
  readonly inputId = inject(_IdGenerator).getId('sc-password-field-');

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
