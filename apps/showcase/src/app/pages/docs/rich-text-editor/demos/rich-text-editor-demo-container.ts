import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { RichTextEditorDemoComponent } from './rich-text-editor-demo';

@Component({
  selector: 'app-rich-text-editor-demo-container',
  imports: [DemoContainer, RichTextEditorDemoComponent],
  template: `
    <app-demo-container title="RichTextEditor" [code]="code">
      <app-rich-text-editor-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class RichTextEditorDemoContainer {
  readonly code = '';
}
