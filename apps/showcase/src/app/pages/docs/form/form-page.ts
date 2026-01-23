import { ChangeDetectionStrategy, Component } from '@angular/core';
import FormDemoContainer from './demos/form-demo-container';

@Component({
  selector: 'app-form-page',
  imports: [FormDemoContainer],
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
        <app-form-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class FormPage {}
