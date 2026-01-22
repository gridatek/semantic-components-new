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
import { ScDialog } from './sc-dialog';

let dialogIdCounter = 0;

@Component({
  selector: 'div[sc-dialog-content]',
  template: `
    <ng-content />
  `,
  host: {
    'data-slot': 'dialog-content',
    role: 'dialog',
    'aria-modal': 'true',
    '[attr.aria-labelledby]': 'titleId',
    '[attr.aria-describedby]': 'descriptionId',
    '[class]': 'class()',
    '[tabindex]': '-1',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScDialogContent {
  private readonly dialog = inject(ScDialog);
  private readonly elementRef = inject(ElementRef<HTMLElement>);

  readonly classInput = input<string>('', { alias: 'class' });

  readonly dialogId = `sc-dialog-${++dialogIdCounter}`;
  readonly titleId = `${this.dialogId}-title`;
  readonly descriptionId = `${this.dialogId}-description`;

  protected readonly class = computed(() =>
    cn(
      'bg-background relative z-50 grid w-full max-w-lg gap-4 rounded-lg border p-6 shadow-lg',
      this.dialog.open()
        ? 'opacity-100 scale-100 transition-[opacity,transform] duration-150 ease-out'
        : 'opacity-0 scale-95 transition-[opacity,transform] duration-150 ease-in',
      this.classInput(),
    ),
  );

  constructor() {
    // Focus the dialog when it opens
    setTimeout(() => {
      this.elementRef.nativeElement.focus();
    });
  }
}
