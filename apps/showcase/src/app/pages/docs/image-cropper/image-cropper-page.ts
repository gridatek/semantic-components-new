import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScImageCropperDemoContainer } from './demos/image-cropper-demo-container';

@Component({
  selector: 'app-image-cropper-page',
  imports: [ScImageCropperDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">ImageCropper</h1>
        <p class="text-muted-foreground">
          An interactive image cropping component with drag, resize, zoom, and
          aspect ratio controls.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-image-cropper-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ImageCropperPage {}
