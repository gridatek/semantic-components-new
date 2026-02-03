import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScCheckbox } from '@semantic-components/ui';

@Component({
  selector: 'app-with-description-checkbox-demo',
  imports: [ScCheckbox],
  template: `
    <div class="items-top flex space-x-2">
      <sc-checkbox [(checked)]="marketing" id="marketing" />
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
