import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScCheckboxDirective,
  ScInvisibleCheckbox,
  ScVisualCheckbox,
} from '@semantic-components/ui';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-with-description-checkbox-demo',
  imports: [
    ScCheckboxDirective,
    ScInvisibleCheckbox,
    ScVisualCheckbox,
    FormsModule,
  ],
  template: `
    <div class="items-top flex space-x-2">
      <div sc-checkbox>
        <input
          type="checkbox"
          sc-invisible-checkbox
          [(ngModel)]="marketing"
          id="marketing"
        />
        <span sc-visual-checkbox></span>
      </div>
      <div class="grid gap-1.5 leading-none">
        <label
          for="marketing"
          class="text-sm font-medium leading-none cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Marketing emails
        </label>
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
