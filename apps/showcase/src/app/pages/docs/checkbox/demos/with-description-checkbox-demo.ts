import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScCheckboxField,
  ScInvisibleCheckbox,
  ScLabel,
} from '@semantic-components/ui';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-with-description-checkbox-demo',
  imports: [ScCheckboxField, ScInvisibleCheckbox, ScLabel, FormsModule],
  template: `
    <div sc-checkbox-field>
      <input
        type="checkbox"
        sc-invisible-checkbox
        [(ngModel)]="marketing"
        id="marketing"
      />
      <div class="grid gap-1.5 leading-none">
        <label sc-label for="marketing">Marketing emails</label>
        <p class="text-sm text-muted-foreground">
          Receive emails about new products, features, and more.
        </p>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WithDescriptionCheckboxDemo {
  readonly marketing = signal(true);
}
