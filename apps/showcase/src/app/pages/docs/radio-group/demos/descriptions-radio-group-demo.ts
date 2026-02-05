import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ScRadioGroup, ScRadioField, ScRadio } from '@semantic-components/ui';

@Component({
  selector: 'app-descriptions-radio-group-demo',
  imports: [FormsModule, ScRadioGroup, ScRadioField, ScRadio],
  template: `
    <div sc-radio-group class="gap-4">
      <label sc-radio-field class="flex items-start space-x-3">
        <input
          type="radio"
          sc-radio
          name="plan"
          value="free"
          [(ngModel)]="planValue"
          id="plan-free"
          class="mt-1"
        />
        <div class="grid gap-1">
          <span class="text-sm font-medium leading-none">Free</span>
          <p class="text-sm text-muted-foreground">
            Get started with basic features
          </p>
        </div>
      </label>
      <label sc-radio-field class="flex items-start space-x-3">
        <input
          type="radio"
          sc-radio
          name="plan"
          value="pro"
          [(ngModel)]="planValue"
          id="plan-pro"
          class="mt-1"
        />
        <div class="grid gap-1">
          <span class="text-sm font-medium leading-none">Pro</span>
          <p class="text-sm text-muted-foreground">
            Advanced features for professionals
          </p>
        </div>
      </label>
      <label sc-radio-field class="flex items-start space-x-3">
        <input
          type="radio"
          sc-radio
          name="plan"
          value="enterprise"
          [(ngModel)]="planValue"
          id="plan-enterprise"
          class="mt-1"
        />
        <div class="grid gap-1">
          <span class="text-sm font-medium leading-none">Enterprise</span>
          <p class="text-sm text-muted-foreground">
            Custom solutions for large teams
          </p>
        </div>
      </label>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DescriptionsRadioGroupDemo {
  planValue = 'pro';
}
