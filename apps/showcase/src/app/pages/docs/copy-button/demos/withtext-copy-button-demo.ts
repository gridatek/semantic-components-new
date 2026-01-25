import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScCopyButtonWithText } from '@semantic-components/ui';

@Component({
  selector: 'app-withtext-copy-button-demo',
  imports: [ScCopyButtonWithText],
  template: `
    <div class="flex flex-wrap items-center gap-4">
      <div sc-copy-button-with-text [value]="'Copy me!'"></div>
      <div
        sc-copy-button-with-text
        [value]="'Custom text'"
        copyText="Copy Link"
        copiedText="Link Copied!"
        variant="outline"
      ></div>
      <div
        sc-copy-button-with-text
        [value]="'Small button'"
        size="sm"
      ></div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WithtextCopyButtonDemo {}
