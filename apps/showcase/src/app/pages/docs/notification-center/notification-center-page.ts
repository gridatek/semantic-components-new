import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { NotificationCenterDemoContainer } from './demos/notification-center-demo-container';
import { TocHeading } from '../../../components/toc/toc-heading';

@Component({
  selector: 'app-notification-center-page',
  imports: [NotificationCenterDemoContainer, TocHeading],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">NotificationCenter</h1>
        <p class="text-muted-foreground">
          A grouped notification management component with filtering, read
          states, and actions.
        </p>
      </div>

      <section class="space-y-8">
        <h2 toc class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-notification-center-demo-container />
      </section>
    </div>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class NotificationCenterPage {}
