import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { StatCardDemo } from './stat-card-demo';

@Component({
  selector: 'app-stat-card-demo-container',
  imports: [DemoContainer, StatCardDemo],
  template: `
    <app-demo-container title="Stat" [code]="code">
      <app-stat-card-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatCardDemoComponent {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScStatCard } from '@semantic-components/ui';

@Component({
  selector: 'sc-stat-card-demo',
  imports: [ScStatCard],
  template: \`
    <div class="flex flex-col gap-8">
      <!-- Basic Stats -->
      <div class="space-y-3">
        <h3 class="text-sm font-medium">Basic Stats</h3>
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
      </div>

      <!-- Size Variants -->
      <div class="space-y-3">
        <h3 class="text-sm font-medium">Size Variants</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <sc-stat-card
            label="Small"
            value="1,234"
            size="sm"
            [icon]="chartIcon"
          />
          <sc-stat-card
            label="Medium"
            value="5,678"
            size="md"
            [icon]="chartIcon"
          />
          <sc-stat-card
            label="Large"
            value="9,012"
            size="lg"
            [icon]="chartIcon"
          />
        </div>
      </div>

      <!-- Variant Styles -->
      <div class="space-y-3">
        <h3 class="text-sm font-medium">Variant Styles</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <sc-stat-card
            label="Default"
            value="1,234"
            variant="default"
            [change]="12"
            trend="up"
          />
          <sc-stat-card
            label="Outline"
            value="5,678"
            variant="outline"
            [change]="-5"
            trend="down"
          />
          <sc-stat-card
            label="Filled"
            value="9,012"
            variant="filled"
            [change]="8"
            trend="up"
          />
        </div>
      </div>

      <!-- With Description -->
      <div class="space-y-3">
        <h3 class="text-sm font-medium">With Description</h3>
        <div class="max-w-sm">
          <sc-stat-card
            label="Conversion Rate"
            value="3.24%"
            [change]="2.4"
            changeLabel="vs last week"
            trend="up"
            description="Percentage of visitors who completed a purchase"
            [icon]="percentIcon"
          />
        </div>
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatCardDemoComponent {
  readonly dollarIcon = \`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>\`;
  readonly usersIcon = \`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>\`;
  readonly activityIcon = \`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>\`;
  readonly chartIcon = \`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/></svg>\`;
  readonly percentIcon = \`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" x2="5" y1="5" y2="19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>\`;
}`;
}
