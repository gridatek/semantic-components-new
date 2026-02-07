import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ThickPenSignaturePadDemo } from './thick-pen-signature-pad-demo';

@Component({
  selector: 'app-thick-pen-signature-pad-demo-container',
  imports: [DemoContainer, ThickPenSignaturePadDemo],
  template: `
    <app-demo-container title="Thick Pen" [code]="code">
      <app-thick-pen-signature-pad-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThickPenSignaturePadDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScSignaturePad } from '@semantic-components/ui';

@Component({
  selector: 'app-thick-pen-signature-pad-demo',
  imports: [ScSignaturePad],
  template: \`
    <sc-signature-pad [width]="400" [height]="200" [penWidth]="5" />
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThickPenSignaturePadDemo {}`;
}
