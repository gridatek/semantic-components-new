import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScInput, ScLabel } from '@semantic-components/ui';

@Component({
  selector: 'app-file-input-demo',
  imports: [ScInput, ScLabel],
  template: `
    <div class="grid w-full max-w-sm items-center gap-1.5">
      <label sc-label for="file">Upload file</label>
      <input sc-input type="file" id="file" />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileInputDemo {}
