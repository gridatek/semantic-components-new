import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { required } from '@angular/forms/signals';
import { ScCheckbox } from '@semantic-components/ui';
import { JsonPipe } from '@angular/common';

interface CheckboxFormModel {
  newsletter: boolean;
  marketing: boolean;
  acceptTerms: boolean;
}

@Component({
  selector: 'app-signal-forms-checkbox-demo',
  imports: [ScCheckbox, JsonPipe, FormField],
  template: `
    <form>
      <div class="space-y-4">
        <div class="flex items-center space-x-2">
          <sc-checkbox
            id="newsletter-custom"
            [formField]="checkboxForm.newsletter"
          />
          <label
            for="newsletter-custom"
            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Subscribe to newsletter
          </label>
        </div>

        <div class="flex items-center space-x-2">
          <sc-checkbox
            id="marketing-custom"
            [formField]="checkboxForm.marketing"
          />
          <label
            for="marketing-custom"
            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Receive marketing emails
          </label>
        </div>

        <div class="flex items-center space-x-2">
          <sc-checkbox
            id="terms-custom"
            [formField]="checkboxForm.acceptTerms"
          />
          <label
            for="terms-custom"
            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept terms and conditions
          </label>
        </div>
      </div>

      <div class="mt-4 p-4 bg-muted rounded-md">
        <p class="text-sm font-medium">Form Values:</p>
        <pre class="text-xs mt-2">{{ formModel() | json }}</pre>
      </div>
    </form>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalFormsCheckboxDemo {
  readonly formModel = signal<CheckboxFormModel>({
    newsletter: false,
    marketing: false,
    acceptTerms: false,
  });

  readonly checkboxForm = form(this.formModel, (schemaPath) => {
    required(schemaPath.newsletter);
    required(schemaPath.acceptTerms);
  });
}
