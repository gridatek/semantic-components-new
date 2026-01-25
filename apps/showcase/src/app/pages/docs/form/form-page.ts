import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BasicFormDemoContainer } from './demos/basic-form-demo-container';
import { ProfileFormDemoContainer } from './demos/profile-form-demo-container';
import { ValidationFormDemoContainer } from './demos/validation-form-demo-container';

@Component({
  selector: 'app-form-page',
  imports: [
    BasicFormDemoContainer,
    ProfileFormDemoContainer,
    ValidationFormDemoContainer,
  ],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Form</h1>
        <p class="text-muted-foreground">
          Building forms with validation and accessible error messages.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-basic-form-demo-container />
        <app-profile-form-demo-container />
        <app-validation-form-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class FormPage {}
