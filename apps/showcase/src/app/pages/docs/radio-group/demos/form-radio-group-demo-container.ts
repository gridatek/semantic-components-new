import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { FormRadioGroupDemo } from './form-radio-group-demo';

@Component({
  selector: 'app-form-radio-group-demo-container',
  imports: [DemoContainer, FormRadioGroupDemo],
  template: `
    <app-demo-container title="Form" [code]="code">
      <app-form-radio-group-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormRadioGroupDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScRadioGroup, ScRadioGroupItem } from '@semantic-components/ui';

@Component({
  selector: 'app-form-radio-group-demo',
  imports: [ScRadioGroup, ScRadioGroupItem],
  template: \`
    <div class="rounded-lg border p-6 max-w-md">
      <div class="space-y-4">
        <h4 id="notify-heading" class="font-semibold">Notification Preferences</h4>
        <div sc-radio-group [(value)]="notifyValue" class="gap-3" ariaLabelledby="notify-heading">
          <div class="flex items-center space-x-2">
            <sc-radio-group-item value="all" id="notify-all" />
            <label for="notify-all" class="text-sm font-medium">All new messages</label>
          </div>
          <div class="flex items-center space-x-2">
            <sc-radio-group-item value="mentions" id="notify-mentions" />
            <label for="notify-mentions" class="text-sm font-medium">Direct messages and mentions</label>
          </div>
          <div class="flex items-center space-x-2">
            <sc-radio-group-item value="none" id="notify-none" />
            <label for="notify-none" class="text-sm font-medium">Nothing</label>
          </div>
        </div>
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormRadioGroupDemo {
  readonly notifyValue = signal<string | null>('mentions');
}`;
}
