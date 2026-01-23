import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScFileUploadDemoContainer } from './demos/file-upload-demo-container';

@Component({
  selector: 'app-file-upload-page',
  imports: [ScFileUploadDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">FileUpload</h1>
        <p class="text-muted-foreground">
          A drag and drop file upload zone with preview and progress support.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-file-upload-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class FileUploadPage {}
