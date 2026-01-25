import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScRadioGroup, ScRadioGroupItem } from '@semantic-components/ui';

@Component({
  selector: 'app-descriptions-radio-group-demo',
  imports: [ScRadioGroup, ScRadioGroupItem],
  template: `
    <div sc-radio-group [(value)]="planValue" class="gap-4">
      <div class="flex items-start space-x-3">
        <sc-radio-group-item value="free" id="plan-free" class="mt-1" />
        <div class="grid gap-1">
          <label for="plan-free" class="text-sm font-medium leading-none">
            Free
          </label>
          <p class="text-sm text-muted-foreground">
            Get started with basic features
          </p>
        </div>
      </div>
      <div class="flex items-start space-x-3">
        <sc-radio-group-item value="pro" id="plan-pro" class="mt-1" />
        <div class="grid gap-1">
          <label for="plan-pro" class="text-sm font-medium leading-none">
            Pro
          </label>
          <p class="text-sm text-muted-foreground">
            Advanced features for professionals
          </p>
        </div>
      </div>
      <div class="flex items-start space-x-3">
        <sc-radio-group-item
          value="enterprise"
          id="plan-enterprise"
          class="mt-1"
        />
        <div class="grid gap-1">
          <label
            for="plan-enterprise"
            class="text-sm font-medium leading-none"
          >
            Enterprise
          </label>
          <p class="text-sm text-muted-foreground">
            Custom solutions for large teams
          </p>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DescriptionsRadioGroupDemo {
  readonly planValue = signal<string | null>('pro');
}
