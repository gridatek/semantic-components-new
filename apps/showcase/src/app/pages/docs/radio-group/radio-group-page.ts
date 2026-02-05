import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BasicRadioGroupDemoContainer } from './demos/basic-radio-group-demo-container';
import { DescriptionsRadioGroupDemoContainer } from './demos/descriptions-radio-group-demo-container';
import { DisabledRadioGroupDemoContainer } from './demos/disabled-radio-group-demo-container';
import { HorizontalRadioGroupDemoContainer } from './demos/horizontal-radio-group-demo-container';
import { FormRadioGroupDemoContainer } from './demos/form-radio-group-demo-container';
import { CustomThemeRadioGroupDemoContainer } from './demos/custom-theme-radio-group-demo-container';

@Component({
  selector: 'app-radio-group-page',
  imports: [
    BasicRadioGroupDemoContainer,
    DescriptionsRadioGroupDemoContainer,
    DisabledRadioGroupDemoContainer,
    HorizontalRadioGroupDemoContainer,
    FormRadioGroupDemoContainer,
    CustomThemeRadioGroupDemoContainer,
  ],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">RadioGroup</h1>
        <p class="text-muted-foreground">
          A set of checkable buttons where only one button can be checked at a
          time.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-basic-radio-group-demo-container />
        <app-descriptions-radio-group-demo-container />
        <app-disabled-radio-group-demo-container />
        <app-horizontal-radio-group-demo-container />
        <app-form-radio-group-demo-container />
        <app-custom-theme-radio-group-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class RadioGroupPage {}
