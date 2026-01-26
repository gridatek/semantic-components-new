import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { BadgeNoIconTimezoneDemo } from './badge-no-icon-timezone-demo';

@Component({
  selector: 'app-badge-no-icon-timezone-demo-container',
  imports: [DemoContainer, BadgeNoIconTimezoneDemo],
  template: `
    <app-demo-container title="Badge without Icon" [code]="code">
      <app-badge-no-icon-timezone-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgeNoIconTimezoneDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScTimezoneBadge } from '@semantic-components/ui';

@Component({
  selector: 'app-badge-no-icon-timezone-demo',
  imports: [ScTimezoneBadge],
  template: \`
    <div class="flex items-center gap-4">
      <span sc-timezone-badge [showIcon]="false"></span>
      <span sc-timezone-badge [showIcon]="false" [showLabel]="true"></span>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgeNoIconTimezoneDemo {}`;
}
