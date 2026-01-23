import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { DestructiveAlertDialogDemo } from './destructive-alert-dialog-demo';

@Component({
  selector: 'app-destructive-alert-dialog-demo-container',
  imports: [DemoContainer, DestructiveAlertDialogDemo],
  template: `
    <app-demo-container title="Destructive" [code]="code">
      <app-destructive-alert-dialog-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DestructiveAlertDialogDemoContainer {
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
  selector: 'app-destructive-alert-dialog-demo',
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
        class="inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md bg-destructive px-4 py-2 text-sm font-medium text-destructive-foreground shadow-xs transition-colors hover:bg-destructive/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        Delete All
      </button>
      <div sc-alert-dialog-portal>
        <div sc-alert-dialog-content>
          <div sc-alert-dialog-header>
            <h2 sc-alert-dialog-title>Delete all items?</h2>
            <p sc-alert-dialog-description>
              This will permanently delete all items in your collection. This action cannot
              be reversed.
            </p>
          </div>
          <div sc-alert-dialog-footer>
            <button sc-alert-dialog-cancel>Cancel</button>
            <button
              sc-alert-dialog-action
              class="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Delete All
            </button>
          </div>
        </div>
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DestructiveAlertDialogDemo {}`;
}
