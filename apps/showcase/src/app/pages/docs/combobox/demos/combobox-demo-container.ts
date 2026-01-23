import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScComboboxDemo } from './combobox-demo';

@Component({
  selector: 'app-combobox-demo-container',
  imports: [DemoContainer, ScComboboxDemo],
  template: `
    <app-demo-container title="Combobox" [code]="code">
      <app-sc-combobox-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ComboboxDemoContainer {
  readonly code = '';
}
