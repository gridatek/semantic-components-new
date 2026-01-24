import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { DisabledCheckboxDemo } from './disabled-checkbox-demo';

@Component({
  selector: 'app-disabled-checkbox-demo-container',
  imports: [DemoContainer, DisabledCheckboxDemo],
  template: `
    <app-demo-container
      title="Disabled States"
      demoUrl="/demos/checkbox/disabled-checkbox-demo"
      [code]="code"
    >
      <app-disabled-checkbox-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisabledCheckboxDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScCheckbox } from '@semantic-components/ui';

@Component({
  selector: 'app-disabled-checkbox-demo',
  imports: [ScCheckbox],
  template: \`
    <div class="flex flex-col gap-4">
      <div class="flex items-center space-x-2">
        <sc-checkbox [disabled]="true" id="disabled-unchecked" />
        <label
          for="disabled-unchecked"
          class="text-sm font-medium leading-none opacity-70"
        >
          Disabled unchecked
        </label>
      </div>
      <div class="flex items-center space-x-2">
        <sc-checkbox
          [checked]="true"
          [disabled]="true"
          id="disabled-checked"
        />
        <label
          for="disabled-checked"
          class="text-sm font-medium leading-none opacity-70"
        >
          Disabled checked
        </label>
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisabledCheckboxDemo {}`;
}
