import { ChangeDetectionStrategy, Component } from '@angular/core';
import CommandDemoContainer from './demos/command-demo-container';

@Component({
  selector: 'app-command-page',
  imports: [CommandDemoContainer],
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
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CommandPage {}
