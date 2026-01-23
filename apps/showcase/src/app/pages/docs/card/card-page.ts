import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScCardDemoContainer } from './demos/card-demo-container';

@Component({
  selector: 'app-card-page',
  imports: [ScCardDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Card</h1>
        <p class="text-muted-foreground">
          Displays a card with header, content, and footer.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-card-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CardPage {}
