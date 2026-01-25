import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { BasicSwitchDemo } from './basic-switch-demo';

@Component({
  selector: 'app-basic-switch-demo-container',
  imports: [DemoContainer, BasicSwitchDemo],
  template: `
    <app-demo-container title="Basic" [code]="code">
      <app-basic-switch-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicSwitchDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScSwitch } from '@semantic-components/ui';

@Component({
  selector: 'app-basic-switch-demo',
  imports: [ScSwitch],
  template: \`
    <div class="flex items-center space-x-2">
      <button sc-switch id="airplane-mode"></button>
      <label for="airplane-mode" class="text-sm font-medium leading-none">
        Airplane Mode
      </label>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicSwitchDemo {}`;
}
