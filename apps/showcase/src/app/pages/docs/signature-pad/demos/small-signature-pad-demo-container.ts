import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { SmallSignaturePadDemo } from './small-signature-pad-demo';

@Component({
  selector: 'app-small-signature-pad-demo-container',
  imports: [DemoContainer, SmallSignaturePadDemo],
  template: `
    <app-demo-container title="Small Size" [code]="code">
      <app-small-signature-pad-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SmallSignaturePadDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScSignaturePad } from '@semantic-components/ui';

@Component({
  selector: 'app-small-signature-pad-demo',
  imports: [ScSignaturePad],
  template: \`
    <sc-signature-pad [width]="300" [height]="100" [penWidth]="1.5" />
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SmallSignaturePadDemo {}`;
}
