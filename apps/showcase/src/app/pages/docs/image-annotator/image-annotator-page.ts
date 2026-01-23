import { ChangeDetectionStrategy, Component } from '@angular/core';
import ImageAnnotatorDemoContainer from './demos/image-annotator-demo-container';

@Component({
  selector: 'app-image-annotator-page',
  imports: [ImageAnnotatorDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">ImageAnnotator</h1>
        <p class="text-muted-foreground">
          Draw, mark up, and annotate images with various tools.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-image-annotator-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ImageAnnotatorPage {}
