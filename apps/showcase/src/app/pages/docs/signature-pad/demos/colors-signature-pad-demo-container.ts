import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ColorsSignaturePadDemo } from './colors-signature-pad-demo';

@Component({
  selector: 'app-colors-signature-pad-demo-container',
  imports: [DemoContainer, ColorsSignaturePadDemo],
  template: `
    <app-demo-container title="Custom Colors" [code]="code">
      <app-colors-signature-pad-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorsSignaturePadDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScSignaturePad } from '@semantic-components/ui';

@Component({
  selector: 'app-colors-signature-pad-demo',
  imports: [ScSignaturePad],
  template: \`
    <sc-signature-pad
      [width]="400"
      [height]="200"
      [penColor]="'#1d4ed8'"
      [backgroundColor]="'#f3f4f6'"
      [penWidth]="3"
    />
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColorsSignaturePadDemo {}`;
}
