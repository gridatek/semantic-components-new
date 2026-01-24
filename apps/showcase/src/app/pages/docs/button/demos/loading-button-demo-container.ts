import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { LoadingButtonDemo } from './loading-button-demo';

@Component({
  selector: 'app-loading-button-demo-container',
  imports: [DemoContainer, LoadingButtonDemo],
  template: `
    <app-demo-container
      title="Loading State"
      demoUrl="/demos/button/loading-button-demo"
      [code]="code"
    >
      <app-loading-button-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingButtonDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScButton } from '@semantic-components/ui';

@Component({
  selector: 'app-loading-button-demo',
  imports: [ScButton],
  template: \`
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
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingButtonDemo {}`;
}
