import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScCheckbox } from '@semantic-components/ui';

@Component({
  selector: 'app-checkbox-demo',
  imports: [ScCheckbox],
  template: `
    <div class="space-y-8">
      <!-- Basic Checkbox -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Basic Checkbox</h3>
        <div class="flex items-center space-x-2">
          <sc-checkbox [(checked)]="terms" id="terms" />
          <label
            for="terms"
            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept terms and conditions
          </label>
        </div>
        <p class="text-sm text-muted-foreground">Checked: {{ terms() }}</p>
      </div>

      <!-- With Description -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">With Description</h3>
        <div class="items-top flex space-x-2">
          <sc-checkbox [(checked)]="marketing" id="marketing" />
          <div class="grid gap-1.5 leading-none">
            <label
              for="marketing"
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Marketing emails
            </label>
            <p class="text-sm text-muted-foreground">
              Receive emails about new products, features, and more.
            </p>
          </div>
        </div>
      </div>

      <!-- Disabled States -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Disabled States</h3>
        <div class="flex flex-col gap-4">
          <div class="flex items-center space-x-2">
            <sc-checkbox [disabled]="true" id="disabled-unchecked" />
            <label
              for="disabled-unchecked"
              class="text-sm font-medium leading-none opacity-70"
            >
              Disabled unchecked
            </label>
          </div>
          <div class="flex items-center space-x-2">
            <sc-checkbox
              [checked]="true"
              [disabled]="true"
              id="disabled-checked"
            />
            <label
              for="disabled-checked"
              class="text-sm font-medium leading-none opacity-70"
            >
              Disabled checked
            </label>
          </div>
        </div>
      </div>

      <!-- Indeterminate State -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Indeterminate State</h3>
        <div class="flex flex-col gap-4">
          <div class="flex items-center space-x-2">
            <sc-checkbox
              [checked]="allSelected()"
              [indeterminate]="someSelected()"
              (checkedChange)="toggleAll($event)"
              id="select-all"
            />
            <label for="select-all" class="text-sm font-medium leading-none">
              Select all
            </label>
          </div>
          <div class="ml-6 flex flex-col gap-2">
            <div class="flex items-center space-x-2">
              <sc-checkbox [(checked)]="item1" id="item1" />
              <label for="item1" class="text-sm leading-none">Item 1</label>
            </div>
            <div class="flex items-center space-x-2">
              <sc-checkbox [(checked)]="item2" id="item2" />
              <label for="item2" class="text-sm leading-none">Item 2</label>
            </div>
            <div class="flex items-center space-x-2">
              <sc-checkbox [(checked)]="item3" id="item3" />
              <label for="item3" class="text-sm leading-none">Item 3</label>
            </div>
          </div>
        </div>
      </div>

      <!-- Form Example -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Form Example</h3>
        <div class="rounded-lg border p-6 max-w-md">
          <div class="space-y-4">
            <h4 class="font-semibold">Notification Preferences</h4>
            <div class="space-y-4">
              <div class="flex items-center space-x-2">
                <sc-checkbox [(checked)]="emailNotif" id="email-notif" />
                <label
                  for="email-notif"
                  class="text-sm font-medium leading-none"
                >
                  Email notifications
                </label>
              </div>
              <div class="flex items-center space-x-2">
                <sc-checkbox [(checked)]="smsNotif" id="sms-notif" />
                <label for="sms-notif" class="text-sm font-medium leading-none">
                  SMS notifications
                </label>
              </div>
              <div class="flex items-center space-x-2">
                <sc-checkbox [(checked)]="pushNotif" id="push-notif" />
                <label
                  for="push-notif"
                  class="text-sm font-medium leading-none"
                >
                  Push notifications
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScCheckboxDemo {
  readonly terms = signal(false);
  readonly marketing = signal(true);

  // Indeterminate example
  readonly item1 = signal(true);
  readonly item2 = signal(false);
  readonly item3 = signal(false);

  readonly allSelected = () => this.item1() && this.item2() && this.item3();
  readonly someSelected = () => {
    const selected = [this.item1(), this.item2(), this.item3()].filter(
      Boolean,
    ).length;
    return selected > 0 && selected < 3;
  };

  toggleAll(checked: boolean): void {
    this.item1.set(checked);
    this.item2.set(checked);
    this.item3.set(checked);
  }

  // Form example
  readonly emailNotif = signal(true);
  readonly smsNotif = signal(false);
  readonly pushNotif = signal(true);
}
