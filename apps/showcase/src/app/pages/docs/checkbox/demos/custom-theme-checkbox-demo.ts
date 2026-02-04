import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScCheckboxDirective,
  ScInvisibleCheckbox,
  ScVisualCheckbox,
} from '@semantic-components/ui';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-theme-checkbox-demo',
  imports: [
    ScCheckboxDirective,
    ScInvisibleCheckbox,
    ScVisualCheckbox,
    FormsModule,
  ],
  template: `
    <div class="space-y-8">
      <!-- Default Theme -->
      <div class="space-y-3">
        <h3 class="text-sm font-semibold">Default Theme</h3>
        <div class="flex items-center space-x-2">
          <div sc-checkbox>
            <input
              type="checkbox"
              sc-invisible-checkbox
              [(ngModel)]="defaultChecked"
              id="default"
            />
            <span sc-visual-checkbox></span>
          </div>
          <label for="default" class="text-sm font-medium leading-none">
            Default color scheme
          </label>
        </div>
      </div>

      <!-- Purple Theme -->
      <div
        class="space-y-3"
        style="--primary: oklch(0.6 0.25 280); --primary-foreground: oklch(0.985 0 0);"
      >
        <h3 class="text-sm font-semibold">Purple Theme</h3>
        <div class="flex items-center space-x-2">
          <div sc-checkbox>
            <input
              type="checkbox"
              sc-invisible-checkbox
              [(ngModel)]="purpleChecked"
              id="purple"
            />
            <span sc-visual-checkbox></span>
          </div>
          <label for="purple" class="text-sm font-medium leading-none">
            Purple color scheme
          </label>
        </div>
      </div>

      <!-- Green Theme -->
      <div
        class="space-y-3"
        style="--primary: oklch(0.5 0.18 145); --primary-foreground: oklch(0.985 0 0);"
      >
        <h3 class="text-sm font-semibold">Green Theme</h3>
        <div class="flex items-center space-x-2">
          <div sc-checkbox>
            <input
              type="checkbox"
              sc-invisible-checkbox
              [(ngModel)]="greenChecked"
              id="green"
            />
            <span sc-visual-checkbox></span>
          </div>
          <label for="green" class="text-sm font-medium leading-none">
            Green color scheme
          </label>
        </div>
      </div>

      <!-- Orange Theme -->
      <div
        class="space-y-3"
        style="--primary: oklch(0.646 0.222 41.116); --primary-foreground: oklch(0.985 0 0);"
      >
        <h3 class="text-sm font-semibold">Orange Theme</h3>
        <div class="flex items-center space-x-2">
          <div sc-checkbox>
            <input
              type="checkbox"
              sc-invisible-checkbox
              [(ngModel)]="orangeChecked"
              id="orange"
            />
            <span sc-visual-checkbox></span>
          </div>
          <label for="orange" class="text-sm font-medium leading-none">
            Orange color scheme
          </label>
        </div>
      </div>

      <!-- Pink Theme -->
      <div
        class="space-y-3"
        style="--primary: oklch(0.627 0.265 303.9); --primary-foreground: oklch(0.985 0 0);"
      >
        <h3 class="text-sm font-semibold">Pink Theme</h3>
        <div class="flex items-center space-x-2">
          <div sc-checkbox>
            <input
              type="checkbox"
              sc-invisible-checkbox
              [(ngModel)]="pinkChecked"
              id="pink"
            />
            <span sc-visual-checkbox></span>
          </div>
          <label for="pink" class="text-sm font-medium leading-none">
            Pink color scheme
          </label>
        </div>
      </div>

      <!-- Custom Border & Focus Ring -->
      <div
        class="space-y-3"
        style="--primary: oklch(0.6 0.118 184.704); --primary-foreground: oklch(0.985 0 0); --ring: oklch(0.6 0.118 184.704);"
      >
        <h3 class="text-sm font-semibold">Blue with Custom Focus Ring</h3>
        <div class="flex items-center space-x-2">
          <div sc-checkbox>
            <input
              type="checkbox"
              sc-invisible-checkbox
              [(ngModel)]="blueChecked"
              id="blue"
            />
            <span sc-visual-checkbox></span>
          </div>
          <label for="blue" class="text-sm font-medium leading-none">
            Blue with matching focus ring
          </label>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomThemeCheckboxDemo {
  readonly defaultChecked = signal(true);
  readonly purpleChecked = signal(true);
  readonly greenChecked = signal(true);
  readonly orangeChecked = signal(true);
  readonly pinkChecked = signal(true);
  readonly blueChecked = signal(true);
}
