import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BasicNativeCheckboxDemoContainer } from './demos/basic-native-checkbox-demo-container';
import { IndeterminateNativeCheckboxDemoContainer } from './demos/indeterminate-native-checkbox-demo-container';
import { SignalFormsNativeCheckboxDemoContainer } from './demos/signal-forms-native-checkbox-demo-container';

@Component({
  selector: 'app-native-checkbox-page',
  imports: [
    BasicNativeCheckboxDemoContainer,
    IndeterminateNativeCheckboxDemoContainer,
    SignalFormsNativeCheckboxDemoContainer,
  ],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Native Checkbox</h1>
        <p class="text-muted-foreground">
          A native input checkbox directive that works seamlessly with Angular
          forms and Signal Forms.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-basic-native-checkbox-demo-container />
        <app-indeterminate-native-checkbox-demo-container />
        <app-signal-forms-native-checkbox-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class NativeCheckboxPage {}
