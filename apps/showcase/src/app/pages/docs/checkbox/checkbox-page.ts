import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BasicCheckboxDemoContainer } from './demos/basic-checkbox-demo-container';
import { BasicNativeCheckboxDemoContainer } from './demos/basic-native-checkbox-demo-container';
import { DisabledCheckboxDemoContainer } from './demos/disabled-checkbox-demo-container';
import { FormCheckboxDemoContainer } from './demos/form-checkbox-demo-container';
import { IndeterminateCheckboxDemoContainer } from './demos/indeterminate-checkbox-demo-container';
import { SignalFormsNativeCheckboxDemoContainer } from './demos/signal-forms-native-checkbox-demo-container';
import { WithDescriptionCheckboxDemoContainer } from './demos/with-description-checkbox-demo-container';

@Component({
  selector: 'app-checkbox-page',
  imports: [
    BasicCheckboxDemoContainer,
    WithDescriptionCheckboxDemoContainer,
    DisabledCheckboxDemoContainer,
    IndeterminateCheckboxDemoContainer,
    FormCheckboxDemoContainer,
    BasicNativeCheckboxDemoContainer,
    SignalFormsNativeCheckboxDemoContainer,
  ],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Checkbox</h1>
        <p class="text-muted-foreground">
          A control that allows the user to toggle between checked and not
          checked.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-basic-checkbox-demo-container />
        <app-with-description-checkbox-demo-container />
        <app-disabled-checkbox-demo-container />
        <app-indeterminate-checkbox-demo-container />
        <app-form-checkbox-demo-container />
      </section>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Native Checkbox</h2>
        <p class="text-muted-foreground">
          A native input checkbox directive that works seamlessly with Angular
          forms and Signal Forms.
        </p>
        <app-basic-native-checkbox-demo-container />
        <app-signal-forms-native-checkbox-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CheckboxPage {}
