import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { InputCopyButtonDemo } from './input-copy-button-demo';

@Component({
  selector: 'app-input-copy-button-demo-container',
  imports: [DemoContainer, InputCopyButtonDemo],
  template: `
    <app-demo-container title="Copy Input" [code]="code">
      <app-input-copy-button-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputCopyButtonDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScCopyInput } from '@semantic-components/ui';

@Component({
  selector: 'app-input-copy-button-demo',
  imports: [ScCopyInput],
  template: \`
    <div class="space-y-3 max-w-md">
      <div>
        <label class="text-sm font-medium">Share Link</label>
        <div
          sc-copy-input
          [value]="'https://example.com/share/abc123'"
          class="mt-1"
        ></div>
      </div>
      <div>
        <label class="text-sm font-medium">API Key</label>
        <div
          sc-copy-input
          [value]="'sk_live_abc123xyz789'"
          class="mt-1"
        ></div>
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputCopyButtonDemo {}`;
}
