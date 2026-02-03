import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScOptField,
  ScOptFieldGroup,
  ScOptFieldSlot,
} from '@semantic-components/ui';

@Component({
  selector: 'app-disabled-opt-field-demo',
  imports: [ScOptField, ScOptFieldGroup, ScOptFieldSlot],
  template: `
    <div sc-opt-field [maxLength]="6" [disabled]="true" value="123456">
      <div sc-opt-field-group>
        <sc-opt-field-slot />
        <sc-opt-field-slot />
        <sc-opt-field-slot />
        <sc-opt-field-slot />
        <sc-opt-field-slot />
        <sc-opt-field-slot />
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisabledOptFieldDemo {}
