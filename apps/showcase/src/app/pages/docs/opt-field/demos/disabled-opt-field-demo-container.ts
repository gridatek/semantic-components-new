import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { DisabledOptFieldDemo } from './disabled-opt-field-demo';

@Component({
  selector: 'app-disabled-opt-field-demo-container',
  imports: [DemoContainer, DisabledOptFieldDemo],
  template: `
    <app-demo-container
      title="Disabled"
      demoUrl="/demos/opt-field/disabled-opt-field-demo"
      [code]="code"
    >
      <app-disabled-opt-field-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisabledOptFieldDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScOptField,
  ScOptFieldGroup,
  ScOptFieldSlot,
} from '@semantic-components/ui';

@Component({
  selector: 'app-disabled-opt-field-demo',
  imports: [ScOptField, ScOptFieldGroup, ScOptFieldSlot],
  template: \`
    <div sc-opt-field [maxLength]="6" [disabled]="true" value="123456">
      <div sc-opt-field-group>
        <sc-opt-field-slot />
        <sc-opt-field-slot />
        <sc-opt-field-slot />
        <sc-opt-field-slot />
        <sc-opt-field-slot />
        <sc-opt-field-slot />
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisabledOptFieldDemo {}`;
}
