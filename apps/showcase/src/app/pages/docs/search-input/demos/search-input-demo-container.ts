import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { SearchInputDemoComponent } from './search-input-demo';

@Component({
  selector: 'app-search-input-demo-container',
  imports: [DemoContainer, SearchInputDemoComponent],
  template: `
    <app-demo-container title="SearchInput" [code]="code">
      <sc-search-input-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SearchInputDemoContainer {
  readonly code = '';
}
