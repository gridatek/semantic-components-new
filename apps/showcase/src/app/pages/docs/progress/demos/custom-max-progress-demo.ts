import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScProgress } from '@semantic-components/ui';

@Component({
  selector: 'app-custom-max-progress-demo',
  imports: [ScProgress],
  template: `
    <div sc-progress [value]="50" [max]="200" class="w-[60%]"></div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomMaxProgressDemo {}
