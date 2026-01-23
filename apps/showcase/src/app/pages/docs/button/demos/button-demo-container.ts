import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScButtonDemo } from './button-demo';

@Component({
  selector: 'app-button-demo-container',
  imports: [DemoContainer, ScButtonDemo],
  template: `
    <app-demo-container title="Button" [code]="code">
      <app-sc-button-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScButtonDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScButton } from '@semantic-components/ui';

@Component({
  selector: 'app-sc-button-demo',
  imports: [ScButton],
  template: \`
    <div class="space-y-8">
      <!-- Variants -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Variants</h3>
        <div class="flex flex-wrap items-center gap-4">
          <button sc-button>Default</button>
          <button sc-button variant="secondary">Secondary</button>
          <button sc-button variant="destructive">Destructive</button>
          <button sc-button variant="outline">Outline</button>
          <button sc-button variant="ghost">Ghost</button>
          <button sc-button variant="link">Link</button>
        </div>
      </div>

      <!-- Sizes -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Sizes</h3>
        <div class="flex flex-wrap items-center gap-4">
          <button sc-button size="lg">Large</button>
          <button sc-button size="default">Default</button>
          <button sc-button size="sm">Small</button>
          <button sc-button size="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <!-- With Icons -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">With Icons</h3>
        <div class="flex flex-wrap items-center gap-4">
          <button sc-button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" x2="12" y1="3" y2="15" />
            </svg>
            Upload
          </button>
          <button sc-button variant="outline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
              <polyline points="16 6 12 2 8 6" />
              <line x1="12" x2="12" y1="2" y2="15" />
            </svg>
            Export
          </button>
          <button sc-button variant="secondary">
            Settings
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
              />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Disabled -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Disabled</h3>
        <div class="flex flex-wrap items-center gap-4">
          <button sc-button disabled>Default</button>
          <button sc-button variant="secondary" disabled>Secondary</button>
          <button sc-button variant="destructive" disabled>Destructive</button>
          <button sc-button variant="outline" disabled>Outline</button>
        </div>
      </div>

      <!-- As Link -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">As Link</h3>
        <div class="flex flex-wrap items-center gap-4">
          <a sc-button href="#">Default Link</a>
          <a sc-button variant="outline" href="#">Outline Link</a>
          <a sc-button variant="ghost" href="#">Ghost Link</a>
        </div>
      </div>

      <!-- Loading State -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Loading State</h3>
        <div class="flex flex-wrap items-center gap-4">
          <button sc-button disabled>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="animate-spin"
            >
              <path d="M21 12a9 9 0 1 1-6.219-8.56" />
            </svg>
            Please wait
          </button>
        </div>
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScButtonDemo {}`;
}
