import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { LightThemeCodeEditorDemo } from './light-theme-code-editor-demo';

@Component({
  selector: 'app-light-theme-code-editor-demo-container',
  imports: [DemoContainer, LightThemeCodeEditorDemo],
  template: `
    <app-demo-container
      title="Light Theme"
      demoUrl="/demos/code-editor/light-theme-code-editor-demo"
      [code]="code"
    >
      <app-light-theme-code-editor-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LightThemeCodeEditorDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScCodeEditor, THEMES } from '@semantic-components/ui';

@Component({
  selector: 'app-light-theme-code-editor-demo',
  imports: [ScCodeEditor],
  template: \`
    <sc-code-editor
      [(value)]="lightThemeCode"
      [language]="'javascript'"
      [theme]="lightTheme"
      [filename]="'light-example.js'"
    />
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LightThemeCodeEditorDemo {
  readonly lightTheme = THEMES['light'];

  lightThemeCode = '// Light theme example\\nconst calculateSum = ...';
}`;
}
