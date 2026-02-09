import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ScButton } from '@semantic-components/ui';

@Component({
  selector: 'app-disabled-link-button-demo',
  imports: [ScButton],
  template: `
    <div class="flex flex-wrap items-center gap-4">
      <a sc-button href="#" disabled>Default</a>
      <a sc-button variant="secondary" href="#" disabled>Secondary</a>
      <a sc-button variant="destructive" href="#" disabled>Destructive</a>
      <a sc-button variant="outline" href="#" disabled>Outline</a>
    </div>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisabledLinkButtonDemo {}
