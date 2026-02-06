import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScCommandDemoContainer } from './demos/command-demo-container';
import { ScCommandDialogDemoContainer } from './demos/command-dialog-demo-container';

@Component({
  selector: 'app-command-page',
  imports: [ScCommandDemoContainer, ScCommandDialogDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Command</h1>
        <p class="text-muted-foreground">
          A command palette for fast, keyboard-driven navigation and actions.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-command-demo-container />
        <app-command-dialog-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CommandPage {}
