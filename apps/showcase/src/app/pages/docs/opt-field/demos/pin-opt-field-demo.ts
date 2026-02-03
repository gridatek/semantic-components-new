import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScOptField,
  ScOptFieldGroup,
  ScOptFieldSlot,
} from '@semantic-components/ui';

@Component({
  selector: 'app-pin-opt-field-demo',
  imports: [ScOptField, ScOptFieldGroup, ScOptFieldSlot],
  template: `
    <div sc-opt-field [maxLength]="4" [(value)]="otp">
      <div sc-opt-field-group>
        <sc-opt-field-slot />
        <sc-opt-field-slot />
        <sc-opt-field-slot />
        <sc-opt-field-slot />
      </div>
    </div>
    <p class="text-sm text-muted-foreground mt-4">
      Value: {{ otp() || 'empty' }}
    </p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PinOptFieldDemo {
  readonly otp = signal('');
}
