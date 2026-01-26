import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { NoOffsetTimezoneDemo } from './no-offset-timezone-demo';

@Component({
  selector: 'app-no-offset-timezone-demo-container',
  imports: [DemoContainer, NoOffsetTimezoneDemo],
  template: `
    <app-demo-container title="No Offset" [code]="code">
      <app-no-offset-timezone-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoOffsetTimezoneDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScTimezoneSelect } from '@semantic-components/ui';

@Component({
  selector: 'app-no-offset-timezone-demo',
  imports: [ScTimezoneSelect],
  template: \`
    <div class="max-w-xs">
      <sc-timezone-select [showOffset]="false"></sc-timezone-select>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoOffsetTimezoneDemo {}`;
}
