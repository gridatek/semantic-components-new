import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { DestructiveAlertDemo } from './destructive-alert-demo';

@Component({
  selector: 'app-destructive-alert-demo-container',
  imports: [DemoContainer, DestructiveAlertDemo],
  template: `
    <app-demo-container title="Destructive" [code]="code">
      <app-destructive-alert-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DestructiveAlertDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScAlert, ScAlertDescription, ScAlertTitle } from '@semantic-components/ui';

@Component({
  selector: 'app-destructive-alert-demo',
  imports: [ScAlert, ScAlertDescription, ScAlertTitle],
  template: \`
    <div sc-alert variant="destructive">
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
        class="size-4"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" x2="12" y1="8" y2="12" />
        <line x1="12" x2="12.01" y1="16" y2="16" />
      </svg>
      <h5 sc-alert-title>Error</h5>
      <div sc-alert-description>
        Your session has expired. Please log in again.
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DestructiveAlertDemo {}`;
}
