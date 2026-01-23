import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { AvatarGroupDemoComponent } from './avatar-group-demo';

@Component({
  selector: 'app-avatar-group-demo-container',
  imports: [DemoContainer, AvatarGroupDemoComponent],
  template: `
    <app-demo-container title="AvatarGroup" [code]="code">
      <app-avatar-group-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AvatarGroupDemoContainer {
  readonly code = '';
}
