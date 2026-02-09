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
      <a sc-button href="#" aria-disabled="true">Default</a>
      <a sc-button variant="secondary" href="#" aria-disabled="true">Secondary</a>
      <a sc-button variant="destructive" href="#" aria-disabled="true">Destructive</a>
      <a sc-button variant="outline" href="#" aria-disabled="true">Outline</a>
    </div>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisabledLinkButtonDemo {}
