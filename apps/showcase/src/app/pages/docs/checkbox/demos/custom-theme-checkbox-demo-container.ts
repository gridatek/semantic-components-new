import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { CustomThemeCheckboxDemo } from './custom-theme-checkbox-demo';

@Component({
  selector: 'app-custom-theme-checkbox-demo-container',
  imports: [DemoContainer, CustomThemeCheckboxDemo],
  template: `
    <app-demo-container
      title="Custom Theme"
      demoUrl="/demos/checkbox/custom-theme-checkbox-demo"
      [code]="code"
    >
      <app-custom-theme-checkbox-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomThemeCheckboxDemoContainer {
  readonly code = `import {
  ChangeDetectionStrategy,
  Component,
  signal,
  ViewEncapsulation,
} from '@angular/core';
import { ScCheckboxField, ScCheckbox, ScLabel } from '@semantic-components/ui';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-theme-checkbox-demo',
  imports: [ScCheckboxField, ScCheckbox, ScLabel, FormsModule],
  template: \`
    <div class="space-y-8">
      <!-- Default Theme -->
      <div class="space-y-3">
        <h3 class="text-sm font-semibold">Default Theme</h3>
        <div sc-checkbox-field>
          <input
            type="checkbox"
            sc-checkbox
            [(ngModel)]="defaultChecked"
            id="default"
          />
          <label sc-label for="default">Default color scheme</label>
        </div>
      </div>

      <!-- Purple Theme -->
      <div
        class="space-y-3"
        style="--primary: oklch(0.6 0.25 280); --primary-foreground: oklch(0.985 0 0);"
      >
        <h3 class="text-sm font-semibold">Purple Theme</h3>
        <div sc-checkbox-field>
          <input
            type="checkbox"
            sc-checkbox
            [(ngModel)]="purpleChecked"
            id="purple"
          />
          <label sc-label for="purple">Purple color scheme</label>
        </div>
      </div>

      <!-- Green Theme -->
      <div
        class="space-y-3"
        style="--primary: oklch(0.5 0.18 145); --primary-foreground: oklch(0.985 0 0);"
      >
        <h3 class="text-sm font-semibold">Green Theme</h3>
        <div sc-checkbox-field>
          <input
            type="checkbox"
            sc-checkbox
            [(ngModel)]="greenChecked"
            id="green"
          />
          <label sc-label for="green">Green color scheme</label>
        </div>
      </div>

      <!-- Orange Theme -->
      <div
        class="space-y-3"
        style="--primary: oklch(0.646 0.222 41.116); --primary-foreground: oklch(0.985 0 0);"
      >
        <h3 class="text-sm font-semibold">Orange Theme</h3>
        <div sc-checkbox-field>
          <input
            type="checkbox"
            sc-checkbox
            [(ngModel)]="orangeChecked"
            id="orange"
          />
          <label sc-label for="orange">Orange color scheme</label>
        </div>
      </div>

      <!-- Pink Theme -->
      <div
        class="space-y-3"
        style="--primary: oklch(0.627 0.265 303.9); --primary-foreground: oklch(0.985 0 0);"
      >
        <h3 class="text-sm font-semibold">Pink Theme</h3>
        <div sc-checkbox-field>
          <input
            type="checkbox"
            sc-checkbox
            [(ngModel)]="pinkChecked"
            id="pink"
          />
          <label sc-label for="pink">Pink color scheme</label>
        </div>
      </div>

      <!-- Custom Border & Focus Ring -->
      <div
        class="space-y-3"
        style="--primary: oklch(0.6 0.118 184.704); --primary-foreground: oklch(0.985 0 0); --ring: oklch(0.6 0.118 184.704);"
      >
        <h3 class="text-sm font-semibold">Blue with Custom Focus Ring</h3>
        <div sc-checkbox-field>
          <input
            type="checkbox"
            sc-checkbox
            [(ngModel)]="blueChecked"
            id="blue"
          />
          <label sc-label for="blue">Blue with matching focus ring</label>
        </div>
      </div>
    </div>
  \`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomThemeCheckboxDemo {
  readonly defaultChecked = signal(true);
  readonly purpleChecked = signal(true);
  readonly greenChecked = signal(true);
  readonly orangeChecked = signal(true);
  readonly pinkChecked = signal(true);
  readonly blueChecked = signal(true);
}`;
}
