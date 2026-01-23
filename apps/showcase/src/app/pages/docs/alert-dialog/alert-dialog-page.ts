import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BasicAlertDialogDemoContainer } from './demos/basic-alert-dialog-demo-container';
import { DestructiveAlertDialogDemoContainer } from './demos/destructive-alert-dialog-demo-container';

@Component({
  selector: 'app-alert-dialog-page',
  imports: [BasicAlertDialogDemoContainer, DestructiveAlertDialogDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">AlertDialog</h1>
        <p class="text-muted-foreground">
          A modal dialog that interrupts the user with important content and
          expects a response.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-basic-alert-dialog-demo-container />
        <app-destructive-alert-dialog-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AlertDialogPage {}
