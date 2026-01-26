import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { BasicStatCardDemo } from './basic-stat-card-demo';

@Component({
  selector: 'app-basic-stat-card-demo-container',
  imports: [DemoContainer, BasicStatCardDemo],
  template: `
    <app-demo-container
      title="Basic"
      demoUrl="/demos/stat-card/basic-stat-card-demo"
      [code]="code"
    >
      <app-basic-stat-card-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicStatCardDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScStatCard } from '@semantic-components/ui';

@Component({
  selector: 'app-basic-stat-card-demo',
  imports: [ScStatCard],
  template: \`
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <sc-stat-card
        label="Total Revenue"
        value="$45,231.89"
        [change]="20.1"
        changeLabel="from last month"
        trend="up"
        [icon]="dollarIcon"
      />
      <sc-stat-card
        label="Subscriptions"
        value="2,350"
        [change]="-10.1"
        changeLabel="from last month"
        trend="down"
        [icon]="usersIcon"
      />
      <sc-stat-card
        label="Active Now"
        value="573"
        changeLabel="since last hour"
        trend="neutral"
        [icon]="activityIcon"
      />
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicStatCardDemo {
  readonly dollarIcon = \`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>\`;
  readonly usersIcon = \`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>\`;
  readonly activityIcon = \`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>\`;
}`;
}
