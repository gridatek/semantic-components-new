import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BasicSwitchDemoContainer } from './demos/basic-switch-demo-container';
import { DescriptionSwitchDemoContainer } from './demos/description-switch-demo-container';
import { DisabledSwitchDemoContainer } from './demos/disabled-switch-demo-container';
import { FormSwitchDemoContainer } from './demos/form-switch-demo-container';
import { SignalFormsSwitchDemoContainer } from './demos/signal-forms-switch-demo-container';
import { StateSwitchDemoContainer } from './demos/state-switch-demo-container';

@Component({
  selector: 'app-switch-page',
  imports: [
    BasicSwitchDemoContainer,
    StateSwitchDemoContainer,
    DisabledSwitchDemoContainer,
    FormSwitchDemoContainer,
    DescriptionSwitchDemoContainer,
    SignalFormsSwitchDemoContainer,
  ],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Switch</h1>
        <p class="text-muted-foreground">
          A control that allows the user to toggle between checked and not
          checked.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-basic-switch-demo-container />
        <app-state-switch-demo-container />
        <app-disabled-switch-demo-container />
        <app-form-switch-demo-container />
        <app-description-switch-demo-container />
        <app-signal-forms-switch-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SwitchPage {}
