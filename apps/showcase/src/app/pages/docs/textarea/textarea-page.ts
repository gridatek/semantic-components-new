import { ChangeDetectionStrategy, Component } from '@angular/core';
import TextareaDemoContainer from './demos/textarea-demo-container';

@Component({
  selector: 'app-textarea-page',
  imports: [TextareaDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Textarea</h1>
        <p class="text-muted-foreground">
          Displays a form textarea or a component that looks like a textarea.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-textarea-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TextareaPage {}
