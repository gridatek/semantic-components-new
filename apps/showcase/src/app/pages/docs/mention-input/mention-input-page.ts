import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScMentionInputDemoContainer } from './demos/mention-input-demo-container';
import { TocHeading } from '../../../components/toc/toc-heading';

@Component({
  selector: 'app-mention-input-page',
  imports: [ScMentionInputDemoContainer, TocHeading],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">MentionInput</h1>
        <p class="text-muted-foreground">
          Text input with &#64;mention support for users, channels, or custom
          entities.
        </p>
      </div>

      <section class="space-y-8">
        <h2 toc class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-mention-input-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MentionInputPage {}
