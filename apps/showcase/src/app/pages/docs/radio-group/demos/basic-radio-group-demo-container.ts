import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { BasicRadioGroupDemo } from './basic-radio-group-demo';

@Component({
  selector: 'app-basic-radio-group-demo-container',
  imports: [DemoContainer, BasicRadioGroupDemo],
  template: `
    <app-demo-container title="Basic" [code]="code">
      <app-basic-radio-group-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicRadioGroupDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScRadioGroup, ScRadioGroupItem } from '@semantic-components/ui';

@Component({
  selector: 'app-basic-radio-group-demo',
  imports: [ScRadioGroup, ScRadioGroupItem],
  template: \`
    <div sc-radio-group [(value)]="value">
      <div class="flex items-center space-x-2">
        <sc-radio-group-item value="default" id="r1" />
        <label for="r1" class="text-sm font-medium leading-none">
          Default
        </label>
      </div>
      <div class="flex items-center space-x-2">
        <sc-radio-group-item value="comfortable" id="r2" />
        <label for="r2" class="text-sm font-medium leading-none">
          Comfortable
        </label>
      </div>
      <div class="flex items-center space-x-2">
        <sc-radio-group-item value="compact" id="r3" />
        <label for="r3" class="text-sm font-medium leading-none">
          Compact
        </label>
      </div>
    </div>
    <p class="mt-2 text-sm text-muted-foreground">
      Selected: {{ value() || 'none' }}
    </p>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicRadioGroupDemo {
  readonly value = signal<string | null>('comfortable');
}`;
}
