import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { InteractiveCodeEditorDemo } from './interactive-code-editor-demo';

@Component({
  selector: 'app-interactive-code-editor-demo-container',
  imports: [DemoContainer, InteractiveCodeEditorDemo],
  template: `
    <app-demo-container
      title="Interactive Editor"
      demoUrl="/demos/code-editor/interactive-code-editor-demo"
      [code]="code"
    >
      <app-interactive-code-editor-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InteractiveCodeEditorDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ScCodeEditor, CodeEditorLanguage } from '@semantic-components/ui';

@Component({
  selector: 'app-interactive-code-editor-demo',
  imports: [ScCodeEditor, FormsModule],
  template: \`
    <div class="flex flex-wrap gap-4 mb-4">
      <div>
        <label class="block text-sm font-medium mb-1">Language</label>
        <select
          [ngModel]="selectedLanguage()"
          (ngModelChange)="selectedLanguage.set($event)"
          class="px-3 py-1.5 border rounded-md bg-background"
        >
          <option value="javascript">JavaScript</option>
          <option value="typescript">TypeScript</option>
          ...
        </select>
      </div>
      <div class="flex items-end gap-4">
        <label class="flex items-center gap-2">
          <input type="checkbox" [ngModel]="showLineNumbers()" ... />
          <span class="text-sm">Line Numbers</span>
        </label>
      </div>
    </div>
    <sc-code-editor
      [(value)]="interactiveCode"
      [language]="selectedLanguage()"
      [showLineNumbers]="showLineNumbers()"
      [wordWrap]="wordWrapEnabled()"
      [filename]="'interactive.' + getExtension(selectedLanguage())"
    />
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InteractiveCodeEditorDemo {
  readonly selectedLanguage = signal<CodeEditorLanguage>('javascript');
  readonly showLineNumbers = signal(true);
  readonly wordWrapEnabled = signal(false);

  interactiveCode = '// Try changing the language!';

  getExtension(lang: CodeEditorLanguage): string {
    const extensions: Record<CodeEditorLanguage, string> = { ... };
    return extensions[lang] || 'txt';
  }
}`;
}
