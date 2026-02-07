import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { HtmlCodeEditorDemo } from './html-code-editor-demo';

@Component({
  selector: 'app-html-code-editor-demo-container',
  imports: [DemoContainer, HtmlCodeEditorDemo],
  template: `
    <app-demo-container
      title="HTML"
      demoUrl="/demos/code-editor/html-code-editor-demo"
      [code]="code"
    >
      <app-html-code-editor-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HtmlCodeEditorDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScCodeEditor } from '@semantic-components/ui';

@Component({
  selector: 'app-html-code-editor-demo',
  imports: [ScCodeEditor],
  template: \`
    <sc-code-editor
      [(value)]="htmlCode"
      [language]="'html'"
      [filename]="'index.html'"
    />
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HtmlCodeEditorDemo {
  htmlCode = '<!DOCTYPE html>\\n<html lang="en">...</html>';
}`;
}
