import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ScButton } from '@semantic-components/ui';

@Component({
  selector: 'app-as-link-button-demo',
  imports: [ScButton],
  template: `
    <div class="flex flex-wrap items-center gap-4">
      <a sc-button>Default Link</a>
      <a sc-button variant="outline">Outline Link</a>
      <a sc-button variant="ghost">Ghost Link</a>
    </div>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsLinkButtonDemo {}
