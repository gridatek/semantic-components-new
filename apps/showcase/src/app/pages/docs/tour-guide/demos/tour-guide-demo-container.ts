import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { TourGuideDemoComponent } from './tour-guide-demo';

@Component({
  selector: 'app-tour-guide-demo-container',
  imports: [DemoContainer, TourGuideDemoComponent],
  template: `
    <app-demo-container title="TourGuide" [code]="code">
      <app-tour-guide-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TourGuideDemoContainer {
  readonly code = '';
}
