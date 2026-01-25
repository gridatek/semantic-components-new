import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScSwitch } from '@semantic-components/ui';

@Component({
  selector: 'app-disabled-switch-demo',
  imports: [ScSwitch],
  template: `
    <div class="space-y-3">
      <div class="flex items-center space-x-2">
        <button sc-switch [disabled]="true" id="disabled-off"></button>
        <label
          for="disabled-off"
          class="text-sm font-medium leading-none text-muted-foreground"
        >
          Disabled (Off)
        </label>
      </div>
      <div class="flex items-center space-x-2">
        <button
          sc-switch
          [checked]="true"
          [disabled]="true"
          id="disabled-on"
        ></button>
        <label
          for="disabled-on"
          class="text-sm font-medium leading-none text-muted-foreground"
        >
          Disabled (On)
        </label>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisabledSwitchDemo {}
