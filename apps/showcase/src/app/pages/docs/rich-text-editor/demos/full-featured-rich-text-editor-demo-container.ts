import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { FullFeaturedRichTextEditorDemo } from './full-featured-rich-text-editor-demo';

@Component({
  selector: 'app-full-featured-rich-text-editor-demo-container',
  imports: [DemoContainer, FullFeaturedRichTextEditorDemo],
  template: `
    <app-demo-container title="Full Featured Editor" [code]="code">
      <app-full-featured-rich-text-editor-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FullFeaturedRichTextEditorDemoContainer {
  readonly code = `<sc-rich-text-editor
  [(value)]="content"
  [minHeight]="'250px'"
  (selectionChange)="onSelectionChange($event)"
/>

onSelectionChange(selection: Selection | null): void {
  if (selection) {
    console.log('Selection changed:', selection.toString());
  }
}`;
}
