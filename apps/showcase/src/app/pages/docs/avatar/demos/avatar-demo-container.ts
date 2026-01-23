import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScAvatarDemo } from './avatar-demo';

@Component({
  selector: 'app-avatar-demo-container',
  imports: [DemoContainer, ScAvatarDemo],
  template: `
    <app-demo-container title="Avatar" [code]="code">
      <app-sc-avatar-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AvatarDemoContainer {
  readonly code = '';
}
