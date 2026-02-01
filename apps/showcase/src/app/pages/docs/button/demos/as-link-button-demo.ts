import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScButton } from '@semantic-components/ui';

@Component({
  selector: 'app-as-link-button-demo',
  imports: [ScButton],
  template: `
    <div class="flex flex-wrap items-center gap-4">
      <a sc-button href="#">Default Link</a>
      <a sc-button variant="outline" href="#">Outline Link</a>
      <a sc-button variant="ghost" href="#">Ghost Link</a>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsLinkButtonDemo {}
