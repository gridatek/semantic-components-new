import { ChangeDetectionStrategy, Component } from '@angular/core';
import TagInputDemoContainer from './demos/tag-input-demo-container';

@Component({
  selector: 'app-tag-input-page',
  imports: [TagInputDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">TagInput</h1>
        <p class="text-muted-foreground">
          A multi-tag input component with chips for adding and removing tags.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-tag-input-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TagInputPage {}
