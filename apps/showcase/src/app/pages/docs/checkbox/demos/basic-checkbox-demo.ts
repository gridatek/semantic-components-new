import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScCheckboxField,
  ScInvisibleCheckbox,
  ScLabel,
} from '@semantic-components/ui';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-basic-checkbox-demo',
  imports: [ScCheckboxField, ScInvisibleCheckbox, ScLabel, FormsModule],
  template: `
    <div sc-checkbox-field>
      <input
        type="checkbox"
        sc-invisible-checkbox
        [(ngModel)]="terms"
        id="terms"
      />
      <label sc-label for="terms">Accept terms and conditions</label>
    </div>
    <p class="text-sm text-muted-foreground mt-2">Checked: {{ terms() }}</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicCheckboxDemo {
  readonly terms = signal(false);
}
