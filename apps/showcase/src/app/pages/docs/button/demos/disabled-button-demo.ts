import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ScButton } from '@semantic-components/ui';

@Component({
  selector: 'app-disabled-button-demo',
  imports: [ScButton],
  template: `
    <div class="flex flex-wrap items-center gap-4">
      <button sc-button aria-disabled="true">Default</button>
      <button sc-button variant="secondary" aria-disabled="true">Secondary</button>
      <button sc-button variant="destructive" aria-disabled="true">Destructive</button>
      <button sc-button variant="outline" aria-disabled="true">Outline</button>
    </div>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisabledButtonDemo {}
