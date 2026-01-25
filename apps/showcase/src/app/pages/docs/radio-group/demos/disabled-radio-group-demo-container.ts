import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { DisabledRadioGroupDemo } from './disabled-radio-group-demo';

@Component({
  selector: 'app-disabled-radio-group-demo-container',
  imports: [DemoContainer, DisabledRadioGroupDemo],
  template: `
    <app-demo-container title="Disabled" [code]="code">
      <app-disabled-radio-group-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisabledRadioGroupDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScRadioGroup, ScRadioGroupItem } from '@semantic-components/ui';

@Component({
  selector: 'app-disabled-radio-group-demo',
  imports: [ScRadioGroup, ScRadioGroupItem],
  template: \`
    <div class="flex flex-col gap-4">
      <div>
        <p class="text-xs text-muted-foreground mb-2">Individual item disabled:</p>
        <div sc-radio-group [(value)]="disabledDemo">
          <div class="flex items-center space-x-2">
            <sc-radio-group-item value="option1" id="d1" />
            <label for="d1" class="text-sm">Option 1</label>
          </div>
          <div class="flex items-center space-x-2">
            <sc-radio-group-item value="option2" id="d2" [disabled]="true" />
            <label for="d2" class="text-sm opacity-50">Option 2 (disabled)</label>
          </div>
          <div class="flex items-center space-x-2">
            <sc-radio-group-item value="option3" id="d3" />
            <label for="d3" class="text-sm">Option 3</label>
          </div>
        </div>
      </div>
      <div>
        <p class="text-xs text-muted-foreground mb-2">Entire group disabled:</p>
        <div sc-radio-group [disabled]="true" value="option1">
          <div class="flex items-center space-x-2">
            <sc-radio-group-item value="option1" id="g1" />
            <label for="g1" class="text-sm opacity-50">Option 1</label>
          </div>
          <div class="flex items-center space-x-2">
            <sc-radio-group-item value="option2" id="g2" />
            <label for="g2" class="text-sm opacity-50">Option 2</label>
          </div>
        </div>
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisabledRadioGroupDemo {
  readonly disabledDemo = signal<string | null>('option1');
}`;
}
