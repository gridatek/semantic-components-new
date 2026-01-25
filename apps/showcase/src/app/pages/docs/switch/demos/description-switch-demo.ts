import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScSwitch } from '@semantic-components/ui';

@Component({
  selector: 'app-description-switch-demo',
  imports: [ScSwitch],
  template: `
    <div
      class="flex flex-row items-center justify-between rounded-lg border p-4"
    >
      <div class="space-y-0.5">
        <label for="dark-mode" class="text-base font-medium">
          Dark Mode
        </label>
        <p class="text-sm text-muted-foreground">
          Enable dark mode for a better viewing experience in low light.
        </p>
      </div>
      <button sc-switch id="dark-mode"></button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DescriptionSwitchDemo {}
