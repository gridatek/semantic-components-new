import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { AvatarImageCropperDemo } from './avatar-image-cropper-demo';

@Component({
  selector: 'app-avatar-image-cropper-demo-container',
  imports: [DemoContainer, AvatarImageCropperDemo],
  template: `
    <app-demo-container
      title="Square Crop (Avatar)"
      demoUrl="/demos/image-cropper/avatar-image-cropper-demo"
      [code]="code"
    >
      <app-avatar-image-cropper-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarImageCropperDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScImageCropper,
  ScImageCropperControls,
  ScImageCropperPreview,
} from '@semantic-components/ui';

@Component({
  selector: 'app-avatar-image-cropper-demo',
  imports: [ScImageCropper, ScImageCropperControls, ScImageCropperPreview],
  template: \`
    <div class="flex gap-8">
      <div class="flex-1 space-y-4">
        <div
          #cropper="scImageCropper"
          sc-image-cropper
          [src]="imageSrc()"
          [aspectRatio]="1"
          [containerHeight]="250"
          class="rounded-lg overflow-hidden border"
        ></div>
        <div sc-image-cropper-controls></div>
      </div>

      <div class="space-y-4">
        <p class="text-sm font-medium">Preview:</p>
        <div class="space-y-3">
          <div class="text-xs text-muted-foreground">Large (100x100)</div>
          <div
            sc-image-cropper-preview
            [width]="100"
            [height]="100"
            class="rounded-full overflow-hidden"
          ></div>

          <div class="text-xs text-muted-foreground">Medium (64x64)</div>
          <div
            sc-image-cropper-preview
            [width]="64"
            [height]="64"
            class="rounded-full overflow-hidden"
          ></div>

          <div class="text-xs text-muted-foreground">Small (40x40)</div>
          <div
            sc-image-cropper-preview
            [width]="40"
            [height]="40"
            class="rounded-full overflow-hidden"
          ></div>
        </div>
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarImageCropperDemo {
  readonly imageSrc = signal(
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
  );
}`;
}
