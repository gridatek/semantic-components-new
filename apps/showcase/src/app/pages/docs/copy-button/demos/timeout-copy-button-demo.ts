import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScCopyButton } from '@semantic-components/ui';

@Component({
  selector: 'app-timeout-copy-button-demo',
  imports: [ScCopyButton],
  template: `
    <div class="flex items-center gap-4">
      <button
        sc-copy-button
        [value]="'Long feedback'"
        [timeout]="5000"
        variant="outline"
        size="default"
      >
        Copy (5s feedback)
      </button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimeoutCopyButtonDemo {}
