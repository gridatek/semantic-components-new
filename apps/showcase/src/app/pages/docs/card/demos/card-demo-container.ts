import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScCardDemo } from './card-demo';

@Component({
  selector: 'app-card-demo-container',
  imports: [DemoContainer, ScCardDemo],
  template: `
    <app-demo-container title="Card" [code]="code">
      <app-sc-card-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CardDemoContainer {
  readonly code = '';
}
