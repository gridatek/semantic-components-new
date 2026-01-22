import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import {
  Language,
  ScTabs,
  ScTabsContent,
  ScTabsList,
  ScTabsTrigger,
} from '@semantic-components/ui';
import { CodeViewer } from '../code-viewer/code-viewer';

@Component({
  selector: 'app-demo-container',
  imports: [ScTabs, ScTabsList, ScTabsTrigger, ScTabsContent, CodeViewer],
  template: `
    <div class="space-y-4">
      @if (title()) {
        <h3 class="text-sm font-medium">{{ title() }}</h3>
      }

      <div sc-tabs class="w-full">
        <div sc-tabs-list selectedTab="preview">
          <button sc-tabs-trigger value="preview">Preview</button>
          <button sc-tabs-trigger value="code">Code</button>
        </div>

        <div sc-tabs-content value="preview" class="rounded-md border p-6">
          <ng-content />
        </div>

        <div sc-tabs-content value="code">
          <app-code-viewer
            [code]="code()"
            [language]="language()"
            [showHeader]="false"
          />
        </div>
      </div>
    </div>
  `,
  host: {
    class: 'block',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoContainer {
  readonly title = input<string>('');
  readonly code = input.required<string>();
  readonly language = input<Language>('html');
}
