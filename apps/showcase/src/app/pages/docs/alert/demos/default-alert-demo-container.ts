import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { DefaultAlertDemo } from './default-alert-demo';

@Component({
  selector: 'app-default-alert-demo-container',
  imports: [DemoContainer, DefaultAlertDemo],
  template: `
    <app-demo-container title="Default" [code]="code">
      <app-default-alert-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultAlertDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScAlert, ScAlertDescription, ScAlertTitle } from '@semantic-components/ui';

@Component({
  selector: 'app-default-alert-demo',
  imports: [ScAlert, ScAlertDescription, ScAlertTitle],
  template: \`
    <div sc-alert>
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
        <path d="M12 16v-4" />
        <path d="M12 8h.01" />
      </svg>
      <h5 sc-alert-title>Heads up!</h5>
      <div sc-alert-description>
        You can add components to your app using the cli.
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultAlertDemo {}`;
}
