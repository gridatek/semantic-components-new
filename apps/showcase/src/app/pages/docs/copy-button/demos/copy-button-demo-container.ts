import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScCopyButtonDemo } from './copy-button-demo';

@Component({
  selector: 'app-copy-button-demo-container',
  imports: [DemoContainer, ScCopyButtonDemo],
  template: `
    <app-demo-container title="Copy" [code]="code">
      <app-sc-copy-button-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScCopyButtonDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScCopyButton,
  ScCopyButtonWithText,
  ScCopyCode,
  ScCopyInput,
} from '@semantic-components/ui';

@Component({
  selector: 'app-sc-copy-button-demo',
  imports: [ScCopyButton, ScCopyButtonWithText, ScCopyInput, ScCopyCode],
  template: \`
    <div class="space-y-8">
      <!-- Basic Copy Button -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Basic Copy Button</h3>
        <div class="flex items-center gap-4">
          <span class="text-sm text-muted-foreground">
            Click to copy "Hello, World!"
          </span>
          <button
            sc-copy-button
            [value]="'Hello, World!'"
            (copySuccess)="onCopy($event)"
          ></button>
        </div>
        @if (lastCopied()) {
          <p class="text-sm text-green-600">Copied: "{{ lastCopied() }}"</p>
        }
      </div>

      <!-- Variants -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Variants</h3>
        <div class="flex items-center gap-4">
          <div class="flex items-center gap-2">
            <span class="text-sm text-muted-foreground">Ghost:</span>
            <button
              sc-copy-button
              [value]="'Ghost variant'"
              variant="ghost"
            ></button>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-sm text-muted-foreground">Outline:</span>
            <button
              sc-copy-button
              [value]="'Outline variant'"
              variant="outline"
            ></button>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-sm text-muted-foreground">Default:</span>
            <button
              sc-copy-button
              [value]="'Default variant'"
              variant="default"
            ></button>
          </div>
        </div>
      </div>

      <!-- Sizes -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Sizes</h3>
        <div class="flex items-center gap-4">
          <div class="flex items-center gap-2">
            <span class="text-sm text-muted-foreground">Small:</span>
            <button
              sc-copy-button
              [value]="'Small'"
              size="sm"
              variant="outline"
            ></button>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-sm text-muted-foreground">Default:</span>
            <button
              sc-copy-button
              [value]="'Default'"
              size="default"
              variant="outline"
            ></button>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-sm text-muted-foreground">Large:</span>
            <button
              sc-copy-button
              [value]="'Large'"
              size="lg"
              variant="outline"
            ></button>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-sm text-muted-foreground">Icon:</span>
            <button
              sc-copy-button
              [value]="'Icon'"
              size="icon"
              variant="outline"
            ></button>
          </div>
        </div>
      </div>

      <!-- With Text -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">With Text Label</h3>
        <div class="flex flex-wrap items-center gap-4">
          <div sc-copy-button-with-text [value]="'Copy me!'"></div>
          <div
            sc-copy-button-with-text
            [value]="'Custom text'"
            copyText="Copy Link"
            copiedText="Link Copied!"
            variant="outline"
          ></div>
          <div
            sc-copy-button-with-text
            [value]="'Small button'"
            size="sm"
          ></div>
        </div>
      </div>

      <!-- Copy Input -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Copy Input</h3>
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
      </div>

      <!-- Copy Code -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Copy Code Block</h3>
        <div class="max-w-lg">
          <div sc-copy-code [value]="codeSnippet">{{ codeSnippet }}</div>
        </div>
      </div>

      <!-- Inline with Text -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Inline with Text</h3>
        <div
          class="flex items-center gap-2 rounded-md border bg-muted/50 px-3 py-2 max-w-md"
        >
          <code class="flex-1 text-sm font-mono">
            npm install &#64;angular/core
          </code>
          <button
            sc-copy-button
            [value]="'npm install @angular/core'"
            size="sm"
          ></button>
        </div>
      </div>

      <!-- Custom Timeout -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Custom Timeout (5 seconds)</h3>
        <div class="flex items-center gap-4">
          <button
            sc-copy-button
            [value]="'Long feedback'"
            [timeout]="5000"
            variant="outline"
            size="default"
          >
            Copy (5s feedback)
          </button>
        </div>
      </div>

      <!-- Disabled -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Disabled</h3>
        <div class="flex items-center gap-4">
          <button
            sc-copy-button
            [value]="'Cannot copy'"
            [disabled]="true"
            variant="outline"
          ></button>
          <div
            sc-copy-button-with-text
            [value]="'Cannot copy'"
            [disabled]="true"
            variant="outline"
          ></div>
        </div>
      </div>

      <!-- Use Cases -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Common Use Cases</h3>
        <div class="space-y-4 max-w-lg">
          <!-- Share URL -->
          <div class="rounded-lg border p-4">
            <h4 class="text-sm font-medium mb-2">Share this page</h4>
            <div class="flex items-center gap-2">
              <input
                type="text"
                [value]="shareUrl"
                readonly
                class="flex-1 h-9 rounded-md border bg-muted px-3 text-sm"
              />
              <button
                sc-copy-button
                [value]="shareUrl"
                variant="outline"
                size="icon"
              ></button>
            </div>
          </div>

          <!-- Color Code -->
          <div class="rounded-lg border p-4">
            <h4 class="text-sm font-medium mb-2">Color</h4>
            <div class="flex items-center gap-3">
              <div class="size-10 rounded-md bg-blue-500"></div>
              <div class="flex-1">
                <p class="text-sm font-medium">#3B82F6</p>
                <p class="text-xs text-muted-foreground">Blue 500</p>
              </div>
              <button
                sc-copy-button
                [value]="'#3B82F6'"
                variant="ghost"
              ></button>
            </div>
          </div>

          <!-- Promo Code -->
          <div
            class="rounded-lg border bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-4"
          >
            <h4 class="text-sm font-medium mb-1">Your promo code</h4>
            <div class="flex items-center justify-between">
              <code class="text-2xl font-bold tracking-wider">SAVE20</code>
              <button
                sc-copy-button
                [value]="'SAVE20'"
                variant="outline"
                size="default"
              >
                Copy Code
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScCopyButtonDemo {
  readonly lastCopied = signal<string | null>(null);

  readonly codeSnippet = \`import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: '<h1>Hello, World!</h1>'
})
export class Hello {}\`;

  readonly shareUrl = 'https://example.com/share/demo-page';

  onCopy(value: string): void {
    this.lastCopied.set(value);
    setTimeout(() => this.lastCopied.set(null), 3000);
  }
}`;
}
