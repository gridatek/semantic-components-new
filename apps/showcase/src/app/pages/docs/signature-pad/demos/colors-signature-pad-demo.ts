import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScSignaturePad } from '@semantic-components/ui';

@Component({
  selector: 'app-colors-signature-pad-demo',
  imports: [ScSignaturePad],
  template: `
    <sc-signature-pad
      [width]="400"
      [height]="200"
      [penColor]="'#1d4ed8'"
      [backgroundColor]="'#f3f4f6'"
      [penWidth]="3"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorsSignaturePadDemo {}
