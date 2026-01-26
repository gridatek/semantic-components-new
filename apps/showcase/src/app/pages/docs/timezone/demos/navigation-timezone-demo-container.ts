import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { NavigationTimezoneDemo } from './navigation-timezone-demo';

@Component({
  selector: 'app-navigation-timezone-demo-container',
  imports: [DemoContainer, NavigationTimezoneDemo],
  template: `
    <app-demo-container title="Navigation Context" [code]="code">
      <app-navigation-timezone-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationTimezoneDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScTimezoneDisplay } from '@semantic-components/ui';

@Component({
  selector: 'app-navigation-timezone-demo',
  imports: [ScTimezoneDisplay],
  template: \`
    <div class="flex items-center justify-between rounded-lg border p-4">
      <div class="space-y-0.5">
        <span class="text-base font-medium">Timezone</span>
        <p class="text-sm text-muted-foreground">
          Your current timezone setting
        </p>
      </div>
      <button sc-timezone-display variant="outline"></button>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationTimezoneDemo {}`;
}
