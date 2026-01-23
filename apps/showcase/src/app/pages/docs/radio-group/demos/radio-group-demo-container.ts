import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScRadioGroupDemo } from './radio-group-demo';

@Component({
  selector: 'app-radio-group-demo-container',
  imports: [DemoContainer, ScRadioGroupDemo],
  template: `
    <app-demo-container title="Radio" [code]="code">
      <app-radio-group-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScRadioGroupDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScRadioGroup, ScRadioGroupItem } from '@semantic-components/ui';

@Component({
  selector: 'app-radio-group-demo',
  imports: [ScRadioGroup, ScRadioGroupItem],
  template: \`
    <div class="space-y-8">
      <!-- Basic Radio Group -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Basic Radio Group</h3>
        <div sc-radio-group [(value)]="defaultValue">
          <div class="flex items-center space-x-2">
            <sc-radio-group-item value="default" id="r1" />
            <label for="r1" class="text-sm font-medium leading-none">
              Default
            </label>
          </div>
          <div class="flex items-center space-x-2">
            <sc-radio-group-item value="comfortable" id="r2" />
            <label for="r2" class="text-sm font-medium leading-none">
              Comfortable
            </label>
          </div>
          <div class="flex items-center space-x-2">
            <sc-radio-group-item value="compact" id="r3" />
            <label for="r3" class="text-sm font-medium leading-none">
              Compact
            </label>
          </div>
        </div>
        <p class="text-sm text-muted-foreground">
          Selected: {{ defaultValue() || 'none' }}
        </p>
      </div>

      <!-- With Descriptions -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">With Descriptions</h3>
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
      </div>

      <!-- Disabled States -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Disabled States</h3>
        <div class="flex flex-col gap-4">
          <div>
            <p class="text-xs text-muted-foreground mb-2">
              Individual item disabled:
            </p>
            <div sc-radio-group [(value)]="disabledDemo1">
              <div class="flex items-center space-x-2">
                <sc-radio-group-item value="option1" id="d1" />
                <label for="d1" class="text-sm">Option 1</label>
              </div>
              <div class="flex items-center space-x-2">
                <sc-radio-group-item
                  value="option2"
                  id="d2"
                  [disabled]="true"
                />
                <label for="d2" class="text-sm opacity-50">
                  Option 2 (disabled)
                </label>
              </div>
              <div class="flex items-center space-x-2">
                <sc-radio-group-item value="option3" id="d3" />
                <label for="d3" class="text-sm">Option 3</label>
              </div>
            </div>
          </div>
          <div>
            <p class="text-xs text-muted-foreground mb-2">
              Entire group disabled:
            </p>
            <div sc-radio-group [disabled]="true" value="option1">
              <div class="flex items-center space-x-2">
                <sc-radio-group-item value="option1" id="g1" />
                <label for="g1" class="text-sm opacity-50">Option 1</label>
              </div>
              <div class="flex items-center space-x-2">
                <sc-radio-group-item value="option2" id="g2" />
                <label for="g2" class="text-sm opacity-50">Option 2</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Horizontal Layout -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Horizontal Layout</h3>
        <div
          sc-radio-group
          [(value)]="horizontalValue"
          class="flex flex-row gap-4"
        >
          <div class="flex items-center space-x-2">
            <sc-radio-group-item value="all" id="h1" />
            <label for="h1" class="text-sm font-medium">All</label>
          </div>
          <div class="flex items-center space-x-2">
            <sc-radio-group-item value="unread" id="h2" />
            <label for="h2" class="text-sm font-medium">Unread</label>
          </div>
          <div class="flex items-center space-x-2">
            <sc-radio-group-item value="archived" id="h3" />
            <label for="h3" class="text-sm font-medium">Archived</label>
          </div>
        </div>
      </div>

      <!-- Form Example -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Form Example</h3>
        <div class="rounded-lg border p-6 max-w-md">
          <div class="space-y-4">
            <h4 class="font-semibold">Notification Preferences</h4>
            <div sc-radio-group [(value)]="notifyValue" class="gap-3">
              <div class="flex items-center space-x-2">
                <sc-radio-group-item value="all" id="notify-all" />
                <label for="notify-all" class="text-sm font-medium">
                  All new messages
                </label>
              </div>
              <div class="flex items-center space-x-2">
                <sc-radio-group-item value="mentions" id="notify-mentions" />
                <label for="notify-mentions" class="text-sm font-medium">
                  Direct messages and mentions
                </label>
              </div>
              <div class="flex items-center space-x-2">
                <sc-radio-group-item value="none" id="notify-none" />
                <label for="notify-none" class="text-sm font-medium">
                  Nothing
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScRadioGroupDemo {
  readonly defaultValue = signal<string | null>('comfortable');
  readonly planValue = signal<string | null>('pro');
  readonly disabledDemo1 = signal<string | null>('option1');
  readonly horizontalValue = signal<string | null>('all');
  readonly notifyValue = signal<string | null>('mentions');
}`;
}
