import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScCheckbox } from '@semantic-components/ui';

@Component({
  selector: 'app-basic-checkbox-demo',
  imports: [ScCheckbox],
  template: `
    <div class="flex items-center space-x-2">
      <sc-checkbox [(checked)]="terms" id="terms" />
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
