import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScCheckboxDirective,
  ScInvisibleCheckbox,
  ScVisualCheckbox,
} from '@semantic-components/ui';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-basic-checkbox-demo',
  imports: [
    ScCheckboxDirective,
    ScInvisibleCheckbox,
    ScVisualCheckbox,
    FormsModule,
  ],
  template: `
    <div class="flex items-center space-x-2">
      <div sc-checkbox>
        <input
          type="checkbox"
          sc-invisible-checkbox
          [(ngModel)]="terms"
          id="terms"
        />
        <span sc-visual-checkbox></span>
      </div>
      <label
        for="terms"
        class="text-sm font-medium leading-none cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>
    <p class="text-sm text-muted-foreground mt-2">Checked: {{ terms() }}</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicCheckboxDemo {
  readonly terms = signal(false);
}
