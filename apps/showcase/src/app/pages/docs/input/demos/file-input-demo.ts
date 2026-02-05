import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScField, ScInput, ScLabel } from '@semantic-components/ui';

@Component({
  selector: 'app-file-input-demo',
  imports: [ScField, ScInput, ScLabel],
  template: `
    <div sc-field>
      <label sc-label>Upload file</label>
      <input sc-input type="file" />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileInputDemo {}
