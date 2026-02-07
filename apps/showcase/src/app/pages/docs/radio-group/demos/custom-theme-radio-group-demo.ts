import {
  ChangeDetectionStrategy,
  Component,
  signal,
  ViewEncapsulation,
} from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { ScRadioGroup, ScRadioField, ScRadio } from '@semantic-components/ui';

interface ThemeFormModel {
  default: string;
  purple: string;
  green: string;
  orange: string;
  pink: string;
  blue: string;
}

@Component({
  selector: 'app-custom-theme-radio-group-demo',
  imports: [ScRadioGroup, ScRadioField, ScRadio, FormField],
  template: `
    <div class="space-y-8">
      <!-- Default Theme -->
      <div class="space-y-3">
        <h3 class="text-sm font-semibold">Default Theme</h3>
        <div sc-radio-group>
          <label sc-radio-field class="flex items-center space-x-2">
            <input
              type="radio"
              sc-radio
              value="option1"
              [formField]="themeForm.default"
            />
            <span class="text-sm">Option 1</span>
          </label>
          <label sc-radio-field class="flex items-center space-x-2">
            <input
              type="radio"
              sc-radio
              value="option2"
              [formField]="themeForm.default"
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
              value="option1"
              [formField]="themeForm.purple"
            />
            <span class="text-sm">Option 1</span>
          </label>
          <label sc-radio-field class="flex items-center space-x-2">
            <input
              type="radio"
              sc-radio
              value="option2"
              [formField]="themeForm.purple"
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
              value="option1"
              [formField]="themeForm.green"
            />
            <span class="text-sm">Option 1</span>
          </label>
          <label sc-radio-field class="flex items-center space-x-2">
            <input
              type="radio"
              sc-radio
              value="option2"
              [formField]="themeForm.green"
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
              value="option1"
              [formField]="themeForm.orange"
            />
            <span class="text-sm">Option 1</span>
          </label>
          <label sc-radio-field class="flex items-center space-x-2">
            <input
              type="radio"
              sc-radio
              value="option2"
              [formField]="themeForm.orange"
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
              value="option1"
              [formField]="themeForm.pink"
            />
            <span class="text-sm">Option 1</span>
          </label>
          <label sc-radio-field class="flex items-center space-x-2">
            <input
              type="radio"
              sc-radio
              value="option2"
              [formField]="themeForm.pink"
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
              value="option1"
              [formField]="themeForm.blue"
            />
            <span class="text-sm">Option 1</span>
          </label>
          <label sc-radio-field class="flex items-center space-x-2">
            <input
              type="radio"
              sc-radio
              value="option2"
              [formField]="themeForm.blue"
            />
            <span class="text-sm">Option 2</span>
          </label>
        </div>
      </div>
    </div>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomThemeRadioGroupDemo {
  readonly formModel = signal<ThemeFormModel>({
    default: 'option1',
    purple: 'option1',
    green: 'option1',
    orange: 'option1',
    pink: 'option1',
    blue: 'option1',
  });

  readonly themeForm = form(this.formModel);
}
