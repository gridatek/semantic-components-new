import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScNavigationMenuDemo } from './navigation-menu-demo';

@Component({
  selector: 'app-navigation-menu-demo-container',
  imports: [DemoContainer, ScNavigationMenuDemo],
  template: `
    <app-demo-container title="NavigationMenu" [code]="code">
      <app-sc-navigation-menu-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class NavigationMenuDemoContainer {
  readonly code = '';
}
