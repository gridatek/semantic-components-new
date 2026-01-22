import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import {
  CodeViewerLanguage,
  ScCodeViewer,
  ScTab,
  ScTabList,
  ScTabPanel,
  ScTabs,
} from '@semantic-components/ui';

@Component({
  selector: 'app-demo-container',
  imports: [ScTabs, ScTabList, ScTab, ScTabPanel, ScCodeViewer],
  template: `
    <div class="space-y-4">
      @if (title()) {
        <h3 class="text-sm font-medium">{{ title() }}</h3>
      }

      <div sc-tabs class="w-full">
        <div sc-tab-list selectedTab="preview">
          <button sc-tab value="preview">Preview</button>
          <button sc-tab value="code">Code</button>
        </div>

        <div sc-tab-panel value="preview" class="rounded-md border p-6">
          <ng-content />
        </div>

        <div sc-tab-panel value="code">
          <sc-code-viewer
            [code]="code()"
            [language]="language()"
            [showLineNumbers]="true"
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
  readonly language = input<CodeViewerLanguage>('angular-ts');
}
