import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { AspectRatioImageCropperDemo } from './aspect-ratio-image-cropper-demo';

@Component({
  selector: 'app-aspect-ratio-image-cropper-demo-container',
  imports: [DemoContainer, AspectRatioImageCropperDemo],
  template: `
    <app-demo-container title="With Aspect Ratio Presets" [code]="code">
      <app-aspect-ratio-image-cropper-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AspectRatioImageCropperDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScImageCropper,
  ScImageCropperAspectRatio,
  ScImageCropperControls,
} from '@semantic-components/ui';

@Component({
  selector: 'app-aspect-ratio-image-cropper-demo',
  imports: [
    ScImageCropper,
    ScImageCropperControls,
    ScImageCropperAspectRatio,
  ],
  template: \`
    <div class="space-y-4">
      <div
        #cropper="scImageCropper"
        sc-image-cropper
        [src]="imageSrc()"
        [aspectRatio]="selectedAspectRatio()"
        [containerHeight]="300"
        class="rounded-lg overflow-hidden border"
      ></div>

      <div class="flex items-center justify-between">
        <div
          sc-image-cropper-aspect-ratio
          [options]="aspectRatioOptions"
          (aspectRatioChange)="onAspectRatioChange($event)"
        ></div>
        <div sc-image-cropper-controls></div>
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AspectRatioImageCropperDemo {
  readonly imageSrc = signal(
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
  );

  readonly selectedAspectRatio = signal<number | null>(null);

  readonly aspectRatioOptions = [
    { label: 'Free', value: null },
    { label: '1:1', value: 1 },
    { label: '4:3', value: 4 / 3 },
    { label: '16:9', value: 16 / 9 },
    { label: '3:2', value: 3 / 2 },
  ];

  onAspectRatioChange(ratio: number | null): void {
    this.selectedAspectRatio.set(ratio);
  }
}`;
}
