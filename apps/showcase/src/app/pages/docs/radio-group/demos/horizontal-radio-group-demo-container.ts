import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { HorizontalRadioGroupDemo } from './horizontal-radio-group-demo';

@Component({
  selector: 'app-horizontal-radio-group-demo-container',
  imports: [DemoContainer, HorizontalRadioGroupDemo],
  template: `
    <app-demo-container title="Horizontal" [code]="code">
      <app-horizontal-radio-group-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HorizontalRadioGroupDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScRadioGroup, ScRadioGroupItem } from '@semantic-components/ui';

@Component({
  selector: 'app-horizontal-radio-group-demo',
  imports: [ScRadioGroup, ScRadioGroupItem],
  template: \`
    <div sc-radio-group [(value)]="horizontalValue" class="flex flex-row gap-4">
      <div class="flex items-center space-x-2">
        <sc-radio-group-item value="all" id="h1" />
        <label for="h1" class="text-sm font-medium">All</label>
      </div>
      <div class="flex items-center space-x-2">
        <sc-radio-group-item value="unread" id="h2" />
        <label for="h2" class="text-sm font-medium">Unread</label>
      </div>
      <div class="flex items-center space-x-2">
        <sc-radio-group-item value="archived" id="h3" />
        <label for="h3" class="text-sm font-medium">Archived</label>
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HorizontalRadioGroupDemo {
  readonly horizontalValue = signal<string | null>('all');
}`;
}
