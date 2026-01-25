import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScSeparator } from '@semantic-components/ui';

@Component({
  selector: 'app-vertical-separator-demo',
  imports: [ScSeparator],
  template: `
    <div class="flex h-5 items-center space-x-4 text-sm">
      <div>Home</div>
      <div sc-separator orientation="vertical"></div>
      <div>Products</div>
      <div sc-separator orientation="vertical"></div>
      <div>About</div>
      <div sc-separator orientation="vertical"></div>
      <div>Contact</div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VerticalSeparatorDemo {}
