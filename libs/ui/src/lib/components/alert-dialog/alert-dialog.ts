import {
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';
import { ScAlertDialogProvider } from './alert-dialog-provider';
import { _IdGenerator } from '@angular/cdk/a11y';

@Component({
  selector: 'div[sc-alert-dialog]',
  template: `
    <ng-content />
  `,
  host: {
    'data-slot': 'alert-dialog',
    role: 'alertdialog',
    'aria-modal': 'true',
    '[attr.aria-labelledby]': 'titleId',
    '[attr.aria-describedby]': 'descriptionId',
    '[class]': 'class()',
    '[tabindex]': '-1',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScAlertDialog {
  private readonly alertDialogProvider = inject(ScAlertDialogProvider);
  private readonly elementRef = inject(ElementRef<HTMLElement>);

  readonly classInput = input<string>('', { alias: 'class' });

  readonly dialogId = inject(_IdGenerator).getId('sc-alert-dialog-');

  readonly titleId = `${this.dialogId}-title`;
  readonly descriptionId = `${this.dialogId}-description`;

  protected readonly class = computed(() =>
    cn(
      'bg-background relative z-50 grid w-full max-w-lg gap-4 rounded-lg border p-6 shadow-lg',
      this.alertDialogProvider.open()
        ? 'opacity-100 scale-100 transition-[opacity,transform] duration-150 ease-out'
        : 'opacity-0 scale-95 transition-[opacity,transform] duration-150 ease-in',
      this.classInput(),
    ),
  );

  constructor() {
    setTimeout(() => {
      this.elementRef.nativeElement.focus();
    });
  }
}
