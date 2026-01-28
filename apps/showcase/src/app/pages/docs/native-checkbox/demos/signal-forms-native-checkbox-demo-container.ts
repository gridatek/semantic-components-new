import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { SignalFormsNativeCheckboxDemo } from './signal-forms-native-checkbox-demo';

@Component({
  selector: 'app-signal-forms-native-checkbox-demo-container',
  imports: [DemoContainer, SignalFormsNativeCheckboxDemo],
  template: `
    <app-demo-container
      title="Signal Forms Integration"
      demoUrl="/demos/native-checkbox/signal-forms-native-checkbox-demo"
      [code]="code"
    >
      <app-signal-forms-native-checkbox-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalFormsNativeCheckboxDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ScNativeCheckbox } from '@semantic-components/ui';
import { SignalFormBuilder, SignalFormsModule, V } from 'ng-signal-forms';

@Component({
  selector: 'app-signal-forms-native-checkbox-demo',
  imports: [ScNativeCheckbox, SignalFormsModule, FormsModule],
  template: \`
    <form>
      <div class="space-y-4">
        <div class="flex items-center space-x-2">
          <input
            scNativeCheckbox
            id="newsletter"
            [ngModel]="form.controls.newsletter().value()"
            (ngModelChange)="form.controls.newsletter.set($event)"
          />
          <label
            for="newsletter"
            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Subscribe to newsletter
          </label>
        </div>

        <div class="flex items-center space-x-2">
          <input
            scNativeCheckbox
            id="marketing"
            [ngModel]="form.controls.marketing().value()"
            (ngModelChange)="form.controls.marketing.set($event)"
          />
          <label
            for="marketing"
            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Receive marketing emails
          </label>
        </div>

        <div class="flex items-center space-x-2">
          <input
            scNativeCheckbox
            id="terms-signal"
            [ngModel]="form.controls.acceptTerms().value()"
            (ngModelChange)="form.controls.acceptTerms.set($event)"
          />
          <label
            for="terms-signal"
            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept terms and conditions
          </label>
        </div>
      </div>

      <div class="mt-4 p-4 bg-muted rounded-md">
        <p class="text-sm font-medium">Form Values:</p>
        <pre class="text-xs mt-2">{{ formValues() | json }}</pre>
      </div>
    </form>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalFormsNativeCheckboxDemo {
  private readonly sfb = new SignalFormBuilder();

  readonly form = this.sfb.group(() => ({
    newsletter: this.sfb.field(false, { validators: [V.required()] }),
    marketing: this.sfb.field(false),
    acceptTerms: this.sfb.field(false, { validators: [V.required()] }),
  }));

  readonly formValues = () => ({
    newsletter: this.form.controls.newsletter().value(),
    marketing: this.form.controls.marketing().value(),
    acceptTerms: this.form.controls.acceptTerms().value(),
  });
}`;
}
