import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScSignaturePad } from '@semantic-components/ui';

@Component({
  selector: 'app-thick-pen-signature-pad-demo',
  imports: [ScSignaturePad],
  template: `
    <sc-signature-pad [width]="400" [height]="200" [penWidth]="5" />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThickPenSignaturePadDemo {}
