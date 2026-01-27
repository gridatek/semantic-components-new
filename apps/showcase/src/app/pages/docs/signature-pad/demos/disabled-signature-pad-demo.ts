import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScSignaturePad } from '@semantic-components/ui';

@Component({
  selector: 'app-disabled-signature-pad-demo',
  imports: [ScSignaturePad],
  template: `
    <sc-signature-pad [width]="400" [height]="150" [disabled]="true" />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisabledSignaturePadDemo {}
