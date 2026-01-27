import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { DisabledSignaturePadDemo } from './disabled-signature-pad-demo';

@Component({
  selector: 'app-disabled-signature-pad-demo-container',
  imports: [DemoContainer, DisabledSignaturePadDemo],
  template: `
    <app-demo-container title="Disabled" [code]="code">
      <app-disabled-signature-pad-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisabledSignaturePadDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScSignaturePad } from '@semantic-components/ui';

@Component({
  selector: 'app-disabled-signature-pad-demo',
  imports: [ScSignaturePad],
  template: \`
    <sc-signature-pad [width]="400" [height]="150" [disabled]="true" />
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisabledSignaturePadDemo {}`;
}
