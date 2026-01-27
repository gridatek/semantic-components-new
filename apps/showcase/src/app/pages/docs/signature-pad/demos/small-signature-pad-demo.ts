import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScSignaturePad } from '@semantic-components/ui';

@Component({
  selector: 'app-small-signature-pad-demo',
  imports: [ScSignaturePad],
  template: `
    <sc-signature-pad [width]="300" [height]="100" [penWidth]="1.5" />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SmallSignaturePadDemo {}
