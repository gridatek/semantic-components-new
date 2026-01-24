import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BasicCardDemoContainer } from './demos/basic-card-demo-container';
import { FormCardDemoContainer } from './demos/form-card-demo-container';
import { NotificationCardDemoContainer } from './demos/notification-card-demo-container';
import { StatsCardDemoContainer } from './demos/stats-card-demo-container';

@Component({
  selector: 'app-card-page',
  imports: [
    BasicCardDemoContainer,
    FormCardDemoContainer,
    NotificationCardDemoContainer,
    StatsCardDemoContainer,
  ],
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
        <app-basic-card-demo-container />
        <app-form-card-demo-container />
        <app-notification-card-demo-container />
        <app-stats-card-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CardPage {}
