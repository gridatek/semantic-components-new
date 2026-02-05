import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { CustomThemeRadioGroupDemo } from './custom-theme-radio-group-demo';

@Component({
  selector: 'app-custom-theme-radio-group-demo-container',
  imports: [DemoContainer, CustomThemeRadioGroupDemo],
  template: `
    <app-demo-container
      title="Custom Theme"
      demoUrl="/demos/radio-group/custom-theme-radio-group-demo"
      [code]="code"
    >
      <app-custom-theme-radio-group-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomThemeRadioGroupDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  ScRadioGroup,
  ScRadioField,
  ScRadio,
} from '@semantic-components/ui';

@Component({
  selector: 'app-custom-theme-radio-group-demo',
  imports: [FormsModule, ScRadioGroup, ScRadioField, ScRadio],
  template: \`
    <div class="space-y-8">
      <!-- Default Theme -->
      <div class="space-y-3">
        <h3 class="text-sm font-semibold">Default Theme</h3>
        <div sc-radio-group>
          <label sc-radio-field class="flex items-center space-x-2">
            <input
              type="radio"
              sc-radio
              name="default"
              value="option1"
              [(ngModel)]="defaultValue"
            />
            <span class="text-sm">Option 1</span>
          </label>
          <label sc-radio-field class="flex items-center space-x-2">
            <input
              type="radio"
              sc-radio
              name="default"
              value="option2"
              [(ngModel)]="defaultValue"
            />
            <span class="text-sm">Option 2</span>
          </label>
        </div>
      </div>

      <!-- Purple Theme -->
      <div
        class="space-y-3"
        style="--primary: oklch(0.6 0.25 280); --primary-foreground: oklch(0.985 0 0);"
      >
        <h3 class="text-sm font-semibold">Purple Theme</h3>
        <div sc-radio-group>
          <label sc-radio-field class="flex items-center space-x-2">
            <input
              type="radio"
              sc-radio
              name="purple"
              value="option1"
              [(ngModel)]="purpleValue"
            />
            <span class="text-sm">Option 1</span>
          </label>
          <label sc-radio-field class="flex items-center space-x-2">
            <input
              type="radio"
              sc-radio
              name="purple"
              value="option2"
              [(ngModel)]="purpleValue"
            />
            <span class="text-sm">Option 2</span>
          </label>
        </div>
      </div>

      <!-- Green Theme -->
      <div
        class="space-y-3"
        style="--primary: oklch(0.5 0.18 145); --primary-foreground: oklch(0.985 0 0);"
      >
        <h3 class="text-sm font-semibold">Green Theme</h3>
        <div sc-radio-group>
          <label sc-radio-field class="flex items-center space-x-2">
            <input
              type="radio"
              sc-radio
              name="green"
              value="option1"
              [(ngModel)]="greenValue"
            />
            <span class="text-sm">Option 1</span>
          </label>
          <label sc-radio-field class="flex items-center space-x-2">
            <input
              type="radio"
              sc-radio
              name="green"
              value="option2"
              [(ngModel)]="greenValue"
            />
            <span class="text-sm">Option 2</span>
          </label>
        </div>
      </div>

      <!-- Orange Theme -->
      <div
        class="space-y-3"
        style="--primary: oklch(0.646 0.222 41.116); --primary-foreground: oklch(0.985 0 0);"
      >
        <h3 class="text-sm font-semibold">Orange Theme</h3>
        <div sc-radio-group>
          <label sc-radio-field class="flex items-center space-x-2">
            <input
              type="radio"
              sc-radio
              name="orange"
              value="option1"
              [(ngModel)]="orangeValue"
            />
            <span class="text-sm">Option 1</span>
          </label>
          <label sc-radio-field class="flex items-center space-x-2">
            <input
              type="radio"
              sc-radio
              name="orange"
              value="option2"
              [(ngModel)]="orangeValue"
            />
            <span class="text-sm">Option 2</span>
          </label>
        </div>
      </div>

      <!-- Pink Theme -->
      <div
        class="space-y-3"
        style="--primary: oklch(0.627 0.265 303.9); --primary-foreground: oklch(0.985 0 0);"
      >
        <h3 class="text-sm font-semibold">Pink Theme</h3>
        <div sc-radio-group>
          <label sc-radio-field class="flex items-center space-x-2">
            <input
              type="radio"
              sc-radio
              name="pink"
              value="option1"
              [(ngModel)]="pinkValue"
            />
            <span class="text-sm">Option 1</span>
          </label>
          <label sc-radio-field class="flex items-center space-x-2">
            <input
              type="radio"
              sc-radio
              name="pink"
              value="option2"
              [(ngModel)]="pinkValue"
            />
            <span class="text-sm">Option 2</span>
          </label>
        </div>
      </div>

      <!-- Custom Border & Focus Ring -->
      <div
        class="space-y-3"
        style="--primary: oklch(0.6 0.118 184.704); --primary-foreground: oklch(0.985 0 0); --ring: oklch(0.6 0.118 184.704);"
      >
        <h3 class="text-sm font-semibold">Blue with Custom Focus Ring</h3>
        <div sc-radio-group>
          <label sc-radio-field class="flex items-center space-x-2">
            <input
              type="radio"
              sc-radio
              name="blue"
              value="option1"
              [(ngModel)]="blueValue"
            />
            <span class="text-sm">Option 1</span>
          </label>
          <label sc-radio-field class="flex items-center space-x-2">
            <input
              type="radio"
              sc-radio
              name="blue"
              value="option2"
              [(ngModel)]="blueValue"
            />
            <span class="text-sm">Option 2</span>
          </label>
        </div>
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomThemeRadioGroupDemo {
  defaultValue = 'option1';
  purpleValue = 'option1';
  greenValue = 'option1';
  orangeValue = 'option1';
  pinkValue = 'option1';
  blueValue = 'option1';
}`;
}
