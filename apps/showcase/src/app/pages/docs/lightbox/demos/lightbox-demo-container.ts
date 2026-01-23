import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScLightboxDemo } from './lightbox-demo';

@Component({
  selector: 'app-lightbox-demo-container',
  imports: [DemoContainer, ScLightboxDemo],
  template: `
    <app-demo-container title="Lightbox" [code]="code">
      <sc-lightbox-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LightboxDemoContainer {
  readonly code = '';
}
