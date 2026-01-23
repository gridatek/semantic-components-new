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
import { ScSheet, SheetSide } from './sheet';

let sheetIdCounter = 0;

const sidePositionClasses: Record<SheetSide, string> = {
  top: 'inset-x-0 top-0 border-b',
  right: 'inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm',
  bottom: 'inset-x-0 bottom-0 border-t',
  left: 'inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm',
};

const sideOpenClasses: Record<SheetSide, string> = {
  top: 'translate-y-0',
  right: 'translate-x-0',
  bottom: 'translate-y-0',
  left: 'translate-x-0',
};

const sideClosedClasses: Record<SheetSide, string> = {
  top: '-translate-y-full',
  right: 'translate-x-full',
  bottom: 'translate-y-full',
  left: '-translate-x-full',
};

@Component({
  selector: 'div[sc-sheet-content]',
  template: `
    <ng-content />
  `,
  host: {
    'data-slot': 'sheet-content',
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
export class ScSheetContent {
  private readonly sheet = inject(ScSheet);
  private readonly elementRef = inject(ElementRef<HTMLElement>);

  readonly classInput = input<string>('', { alias: 'class' });

  readonly sheetId = `sc-sheet-${++sheetIdCounter}`;
  readonly titleId = `${this.sheetId}-title`;
  readonly descriptionId = `${this.sheetId}-description`;

  protected readonly class = computed(() => {
    const side = this.sheet.side();
    const isOpen = this.sheet.open();

    return cn(
      'bg-background fixed z-50 flex flex-col gap-4 p-6 shadow-lg transition-transform duration-300 ease-in-out',
      sidePositionClasses[side],
      isOpen ? sideOpenClasses[side] : sideClosedClasses[side],
      this.classInput(),
    );
  });

  constructor() {
    setTimeout(() => {
      this.elementRef.nativeElement.focus();
    });
  }
}
