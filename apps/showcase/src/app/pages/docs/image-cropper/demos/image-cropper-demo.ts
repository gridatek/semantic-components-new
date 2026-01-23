import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  CropArea,
  CropResult,
  ScImageCropper,
  ScImageCropperAspectRatio,
  ScImageCropperControls,
  ScImageCropperPreview,
} from '@semantic-components/ui';

@Component({
  selector: 'app-image-cropper-demo',
  imports: [
    ScImageCropper,
    ScImageCropperControls,
    ScImageCropperPreview,
    ScImageCropperAspectRatio,
  ],
  template: `
    <div class="space-y-8">
      <!-- Basic Example -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Basic Image Cropper</h3>
        <div class="space-y-4">
          <div
            #cropper="scImageCropper"
            sc-image-cropper
            [src]="imageSrc()"
            [(cropArea)]="cropArea"
            [containerHeight]="300"
            class="rounded-lg overflow-hidden border"
          ></div>

          <div sc-image-cropper-controls></div>

          <div class="flex gap-4">
            <button
              type="button"
              class="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
              (click)="cropImage(cropper)"
            >
              Crop Image
            </button>
            <button
              type="button"
              class="px-4 py-2 border rounded-md hover:bg-accent"
              (click)="cropper.resetCropArea()"
            >
              Reset
            </button>
          </div>

          @if (croppedImage()) {
            <div class="space-y-2">
              <p class="text-sm font-medium">Cropped Result:</p>
              <img
                [src]="croppedImage()"
                class="max-w-xs rounded-md border"
                alt="Cropped result"
              />
            </div>
          }
        </div>
      </div>

      <!-- With Aspect Ratio -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">With Aspect Ratio Presets</h3>
        <div class="space-y-4">
          <div
            #aspectCropper="scImageCropper"
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
      </div>

      <!-- Square Crop (Avatar) -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Square Crop (Avatar)</h3>
        <div class="flex gap-8">
          <div class="flex-1 space-y-4">
            <div
              #avatarCropper="scImageCropper"
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
      </div>

      <!-- Custom Image Upload -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Upload Your Own Image</h3>
        <div class="space-y-4">
          <div class="flex items-center gap-4">
            <label
              class="px-4 py-2 border rounded-md hover:bg-accent cursor-pointer inline-flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                class="size-4"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" x2="12" y1="3" y2="15" />
              </svg>
              Upload Image
              <input
                type="file"
                accept="image/*"
                class="hidden"
                (change)="onFileChange($event)"
              />
            </label>
            @if (uploadedImageSrc()) {
              <span class="text-sm text-muted-foreground">Image uploaded</span>
            }
          </div>

          @if (uploadedImageSrc()) {
            <div
              #uploadCropper="scImageCropper"
              sc-image-cropper
              [src]="uploadedImageSrc()!"
              [containerHeight]="350"
              class="rounded-lg overflow-hidden border"
            ></div>

            <div class="flex items-center justify-between">
              <div sc-image-cropper-controls></div>
              <div class="flex gap-2">
                <button
                  type="button"
                  class="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
                  (click)="cropUploadedImage(uploadCropper)"
                >
                  Crop & Download
                </button>
              </div>
            </div>
          }
        </div>
      </div>

      <!-- Crop Info -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Crop Area Info</h3>
        <div class="rounded-md border p-4 bg-muted/50">
          <div class="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span class="text-muted-foreground">X:</span>
              <span class="ml-2 font-mono">
                {{ cropArea().x.toFixed(0) }}px
              </span>
            </div>
            <div>
              <span class="text-muted-foreground">Y:</span>
              <span class="ml-2 font-mono">
                {{ cropArea().y.toFixed(0) }}px
              </span>
            </div>
            <div>
              <span class="text-muted-foreground">Width:</span>
              <span class="ml-2 font-mono">
                {{ cropArea().width.toFixed(0) }}px
              </span>
            </div>
            <div>
              <span class="text-muted-foreground">Height:</span>
              <span class="ml-2 font-mono">
                {{ cropArea().height.toFixed(0) }}px
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScImageCropperDemo {
  // Sample image (placeholder)
  readonly imageSrc = signal(
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
  );

  readonly cropArea = signal<CropArea>({
    x: 50,
    y: 50,
    width: 200,
    height: 200,
  });
  readonly croppedImage = signal<string | null>(null);
  readonly selectedAspectRatio = signal<number | null>(null);
  readonly uploadedImageSrc = signal<string | null>(null);

  readonly aspectRatioOptions = [
    { label: 'Free', value: null },
    { label: '1:1', value: 1 },
    { label: '4:3', value: 4 / 3 },
    { label: '16:9', value: 16 / 9 },
    { label: '3:2', value: 3 / 2 },
  ];

  async cropImage(cropper: ScImageCropper): Promise<void> {
    try {
      const result: CropResult = await cropper.crop();
      this.croppedImage.set(result.dataUrl);
    } catch (error) {
      console.error('Failed to crop image:', error);
    }
  }

  async cropUploadedImage(cropper: ScImageCropper): Promise<void> {
    try {
      const result: CropResult = await cropper.crop();

      // Download the cropped image
      const link = document.createElement('a');
      link.href = result.dataUrl;
      link.download = 'cropped-image.png';
      link.click();
    } catch (error) {
      console.error('Failed to crop image:', error);
    }
  }

  onAspectRatioChange(ratio: number | null): void {
    this.selectedAspectRatio.set(ratio);
  }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.uploadedImageSrc.set(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }
}
