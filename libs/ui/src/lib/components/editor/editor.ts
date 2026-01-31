import {
  Directive,
  InjectionToken,
  input,
  signal,
  inject,
  ElementRef,
} from '@angular/core';

export type ScEditorAlignment = 'left' | 'center' | 'right' | 'justify';
export type ScEditorHeading = 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export const SC_EDITOR = new InjectionToken<ScEditor>('SC_EDITOR');

@Directive({
  selector: '[sc-editor]',
  exportAs: 'scEditor',
  providers: [{ provide: SC_EDITOR, useExisting: ScEditor }],
  host: {
    'data-slot': 'editor',
    '[attr.data-disabled]': 'disabled() || null',
  },
})
export class ScEditor {
  readonly disabled = input<boolean>(false);
  readonly readonly = input<boolean>(false);

  // State signals
  readonly isBold = signal(false);
  readonly isItalic = signal(false);
  readonly isUnderline = signal(false);
  readonly isStrikethrough = signal(false);
  readonly isOrderedList = signal(false);
  readonly isUnorderedList = signal(false);
  readonly isBlockquote = signal(false);
  readonly alignment = signal<ScEditorAlignment>('left');
  readonly currentHeading = signal<ScEditorHeading>('p');
  readonly canUndo = signal(false);
  readonly canRedo = signal(false);

  // Reference to content element
  readonly contentElement = signal<HTMLElement | null>(null);

  // Execute a contenteditable command
  execCommand(command: string, value?: string): void {
    if (this.disabled() || this.readonly()) return;

    const element = this.contentElement();
    if (!element) return;

    element.focus();
    document.execCommand(command, false, value);
    this.updateToolbarState();
  }

  // Update toolbar state based on current selection
  updateToolbarState(): void {
    this.isBold.set(document.queryCommandState('bold'));
    this.isItalic.set(document.queryCommandState('italic'));
    this.isUnderline.set(document.queryCommandState('underline'));
    this.isStrikethrough.set(document.queryCommandState('strikethrough'));
    this.isOrderedList.set(document.queryCommandState('insertOrderedList'));
    this.isUnorderedList.set(document.queryCommandState('insertUnorderedList'));

    // Check alignment
    if (document.queryCommandState('justifyLeft')) {
      this.alignment.set('left');
    } else if (document.queryCommandState('justifyCenter')) {
      this.alignment.set('center');
    } else if (document.queryCommandState('justifyRight')) {
      this.alignment.set('right');
    } else if (document.queryCommandState('justifyFull')) {
      this.alignment.set('justify');
    }

    // Check blockquote and heading
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const container = range.commonAncestorContainer;
      const element =
        container.nodeType === Node.TEXT_NODE
          ? container.parentElement
          : (container as Element);

      this.isBlockquote.set(!!element?.closest('blockquote'));

      // Check heading
      const heading = element?.closest('h1, h2, h3, h4, h5, h6, p');
      if (heading) {
        this.currentHeading.set(
          heading.tagName.toLowerCase() as ScEditorHeading,
        );
      }
    }

    // Check undo/redo availability (note: these are not reliably supported in all browsers)
    this.canUndo.set(document.queryCommandEnabled('undo'));
    this.canRedo.set(document.queryCommandEnabled('redo'));
  }
}
