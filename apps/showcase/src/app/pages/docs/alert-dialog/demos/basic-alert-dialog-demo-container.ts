import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { BasicAlertDialogDemo } from './basic-alert-dialog-demo';

@Component({
  selector: 'app-basic-alert-dialog-demo-container',
  imports: [DemoContainer, BasicAlertDialogDemo],
  template: `
    <app-demo-container title="Basic" [code]="code">
      <app-basic-alert-dialog-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicAlertDialogDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScAlertDialog,
  ScAlertDialogAction,
  ScAlertDialogCancel,
  ScAlertDialogContent,
  ScAlertDialogDescription,
  ScAlertDialogFooter,
  ScAlertDialogHeader,
  ScAlertDialogPortal,
  ScAlertDialogTitle,
  ScAlertDialogTrigger,
} from '@semantic-components/ui';

@Component({
  selector: 'app-basic-alert-dialog-demo',
  imports: [
    ScAlertDialog,
    ScAlertDialogAction,
    ScAlertDialogCancel,
    ScAlertDialogContent,
    ScAlertDialogDescription,
    ScAlertDialogFooter,
    ScAlertDialogHeader,
    ScAlertDialogPortal,
    ScAlertDialogTitle,
    ScAlertDialogTrigger,
  ],
  template: \`
    <div sc-alert-dialog>
      <button
        sc-alert-dialog-trigger
        class="inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        Delete Account
      </button>
      <div sc-alert-dialog-portal>
        <div sc-alert-dialog-content>
          <div sc-alert-dialog-header>
            <h2 sc-alert-dialog-title>Are you absolutely sure?</h2>
            <p sc-alert-dialog-description>
              This action cannot be undone. This will permanently delete your account and
              remove your data from our servers.
            </p>
          </div>
          <div sc-alert-dialog-footer>
            <button sc-alert-dialog-cancel>Cancel</button>
            <button sc-alert-dialog-action>Continue</button>
          </div>
        </div>
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicAlertDialogDemo {}`;
}
