import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  inject,
  InjectionToken,
  input,
  model,
  OnDestroy,
  output,
  signal,
  ViewEncapsulation,
  viewChild,
} from '@angular/core';
import { cn } from '../../utils';

export interface CropArea {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface CropResult {
  dataUrl: string;
  blob: Blob | null;
  width: number;
  height: number;
}

// Token for image cropper context
export const SC_IMAGE_CROPPER = new InjectionToken<ScImageCropper>(
  'SC_IMAGE_CROPPER',
);

@Component({
  selector: '[sc-image-cropper]',
  exportAs: 'scImageCropper',
  providers: [{ provide: SC_IMAGE_CROPPER, useExisting: ScImageCropper }],
  template: `
    <div
      class="relative overflow-hidden bg-black/90 select-none"
      [style.height.px]="containerHeight()"
    >
      <!-- Image container -->
      <div
        class="absolute inset-0 flex items-center justify-center"
        [style.transform]="imageTransform()"
      >
        <img
          #imageEl
          [src]="src()"
          class="max-w-none"
          [style.width.px]="scaledImageWidth()"
          [style.height.px]="scaledImageHeight()"
          (load)="onImageLoad()"
          draggable="false"
          alt="Image to crop"
        />
      </div>

      <!-- Overlay mask -->
      <div class="absolute inset-0 pointer-events-none">
        <svg class="w-full h-full">
          <defs>
            <mask id="cropMask">
              <rect width="100%" height="100%" fill="white" />
              <rect
                [attr.x]="cropArea().x"
                [attr.y]="cropArea().y"
                [attr.width]="cropArea().width"
                [attr.height]="cropArea().height"
                fill="black"
              />
            </mask>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="rgba(0,0,0,0.5)"
            mask="url(#cropMask)"
          />
        </svg>
      </div>

      <!-- Crop area -->
      <div
        class="absolute border-2 border-white cursor-move"
        [style.left.px]="cropArea().x"
        [style.top.px]="cropArea().y"
        [style.width.px]="cropArea().width"
        [style.height.px]="cropArea().height"
        (mousedown)="onCropAreaMouseDown($event)"
        (touchstart)="onCropAreaTouchStart($event)"
      >
        <!-- Grid lines -->
        @if (showGrid()) {
          <div class="absolute inset-0 pointer-events-none">
            <div
              class="absolute left-1/3 top-0 bottom-0 w-px bg-white/30"
            ></div>
            <div
              class="absolute left-2/3 top-0 bottom-0 w-px bg-white/30"
            ></div>
            <div class="absolute top-1/3 left-0 right-0 h-px bg-white/30"></div>
            <div class="absolute top-2/3 left-0 right-0 h-px bg-white/30"></div>
          </div>
        }

        <!-- Resize handles -->
        @if (!disabled()) {
          <!-- Corners -->
          <div
            class="absolute -left-1.5 -top-1.5 size-3 bg-white border border-gray-400 cursor-nw-resize"
            (mousedown)="onHandleMouseDown($event, 'nw')"
            (touchstart)="onHandleTouchStart($event, 'nw')"
          ></div>
          <div
            class="absolute -right-1.5 -top-1.5 size-3 bg-white border border-gray-400 cursor-ne-resize"
            (mousedown)="onHandleMouseDown($event, 'ne')"
            (touchstart)="onHandleTouchStart($event, 'ne')"
          ></div>
          <div
            class="absolute -left-1.5 -bottom-1.5 size-3 bg-white border border-gray-400 cursor-sw-resize"
            (mousedown)="onHandleMouseDown($event, 'sw')"
            (touchstart)="onHandleTouchStart($event, 'sw')"
          ></div>
          <div
            class="absolute -right-1.5 -bottom-1.5 size-3 bg-white border border-gray-400 cursor-se-resize"
            (mousedown)="onHandleMouseDown($event, 'se')"
            (touchstart)="onHandleTouchStart($event, 'se')"
          ></div>

          <!-- Edges -->
          <div
            class="absolute left-1/2 -translate-x-1/2 -top-1.5 w-6 h-3 bg-white border border-gray-400 cursor-n-resize"
            (mousedown)="onHandleMouseDown($event, 'n')"
            (touchstart)="onHandleTouchStart($event, 'n')"
          ></div>
          <div
            class="absolute left-1/2 -translate-x-1/2 -bottom-1.5 w-6 h-3 bg-white border border-gray-400 cursor-s-resize"
            (mousedown)="onHandleMouseDown($event, 's')"
            (touchstart)="onHandleTouchStart($event, 's')"
          ></div>
          <div
            class="absolute top-1/2 -translate-y-1/2 -left-1.5 w-3 h-6 bg-white border border-gray-400 cursor-w-resize"
            (mousedown)="onHandleMouseDown($event, 'w')"
            (touchstart)="onHandleTouchStart($event, 'w')"
          ></div>
          <div
            class="absolute top-1/2 -translate-y-1/2 -right-1.5 w-3 h-6 bg-white border border-gray-400 cursor-e-resize"
            (mousedown)="onHandleMouseDown($event, 'e')"
            (touchstart)="onHandleTouchStart($event, 'e')"
          ></div>
        }
      </div>
    </div>

    <!-- Hidden canvas for cropping -->
    <canvas #canvasEl class="hidden"></canvas>

    <!-- Content projection for controls and other child components -->
    <ng-content></ng-content>
  `,
  host: {
    'data-slot': 'image-cropper',
    '[class]': 'class()',
    '[attr.data-disabled]': 'disabled() || null',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScImageCropper implements AfterViewInit, OnDestroy {
  readonly classInput = input<string>('', { alias: 'class' });
  readonly src = input.required<string>();
  readonly aspectRatio = input<number | null>(null); // null = free, 1 = square, 16/9, etc.
  readonly minWidth = input<number>(50);
  readonly minHeight = input<number>(50);
  readonly containerHeight = input<number>(400);
  readonly showGrid = input<boolean>(true);
  readonly disabled = input<boolean>(false);
  readonly outputType = input<'image/png' | 'image/jpeg' | 'image/webp'>(
    'image/png',
  );
  readonly outputQuality = input<number>(0.92);

  readonly cropArea = model<CropArea>({
    x: 50,
    y: 50,
    width: 200,
    height: 200,
  });
  readonly zoom = model<number>(1);

  readonly cropChange = output<CropArea>();
  readonly imageLoaded = output<{ width: number; height: number }>();

  private readonly imageEl = viewChild<ElementRef<HTMLImageElement>>('imageEl');
  private readonly canvasEl =
    viewChild<ElementRef<HTMLCanvasElement>>('canvasEl');

  protected readonly class = computed(() => cn('block', this.classInput()));

  private readonly imageNaturalWidth = signal(0);
  private readonly imageNaturalHeight = signal(0);
  private readonly imageLoaded$ = signal(false);

  protected readonly scaledImageWidth = computed(
    () => this.imageNaturalWidth() * this.zoom(),
  );
  protected readonly scaledImageHeight = computed(
    () => this.imageNaturalHeight() * this.zoom(),
  );

  protected readonly imageTransform = computed(() => {
    return `scale(1)`;
  });

  private isDragging = false;
  private isResizing = false;
  private resizeHandle = '';
  private startX = 0;
  private startY = 0;
  private startCropArea: CropArea = { x: 0, y: 0, width: 0, height: 0 };

  private readonly boundMouseMove = this.onMouseMove.bind(this);
  private readonly boundMouseUp = this.onMouseUp.bind(this);
  private readonly boundTouchMove = this.onTouchMove.bind(this);
  private readonly boundTouchEnd = this.onTouchEnd.bind(this);

  ngAfterViewInit(): void {
    document.addEventListener('mousemove', this.boundMouseMove);
    document.addEventListener('mouseup', this.boundMouseUp);
    document.addEventListener('touchmove', this.boundTouchMove, {
      passive: false,
    });
    document.addEventListener('touchend', this.boundTouchEnd);
  }

  ngOnDestroy(): void {
    document.removeEventListener('mousemove', this.boundMouseMove);
    document.removeEventListener('mouseup', this.boundMouseUp);
    document.removeEventListener('touchmove', this.boundTouchMove);
    document.removeEventListener('touchend', this.boundTouchEnd);
  }

  onImageLoad(): void {
    const img = this.imageEl()?.nativeElement;
    if (!img) return;

    this.imageNaturalWidth.set(img.naturalWidth);
    this.imageNaturalHeight.set(img.naturalHeight);
    this.imageLoaded$.set(true);

    this.imageLoaded.emit({
      width: img.naturalWidth,
      height: img.naturalHeight,
    });

    // Initialize crop area to center
    this.initializeCropArea();
  }

  private initializeCropArea(): void {
    const containerH = this.containerHeight();
    const imgW = this.scaledImageWidth();
    const imgH = this.scaledImageHeight();

    // Calculate displayed image dimensions within container
    const containerW = this.getContainerWidth();
    const scale = Math.min(containerW / imgW, containerH / imgH, 1);
    const displayedW = imgW * scale;
    const displayedH = imgH * scale;

    // Center the crop area
    const aspectRatio = this.aspectRatio();
    let cropW = Math.min(displayedW * 0.8, displayedW);
    let cropH = Math.min(displayedH * 0.8, displayedH);

    if (aspectRatio !== null) {
      if (cropW / aspectRatio <= displayedH) {
        cropH = cropW / aspectRatio;
      } else {
        cropW = cropH * aspectRatio;
      }
    }

    const x = (containerW - cropW) / 2;
    const y = (containerH - cropH) / 2;

    this.cropArea.set({
      x: Math.max(0, x),
      y: Math.max(0, y),
      width: cropW,
      height: cropH,
    });
  }

  private getContainerWidth(): number {
    const el = document.querySelector('[sc-image-cropper]');
    return el?.clientWidth ?? 400;
  }

  onCropAreaMouseDown(event: MouseEvent): void {
    if (this.disabled()) return;
    event.preventDefault();
    this.startDragging(event.clientX, event.clientY);
  }

  onCropAreaTouchStart(event: TouchEvent): void {
    if (this.disabled()) return;
    event.preventDefault();
    const touch = event.touches[0];
    this.startDragging(touch.clientX, touch.clientY);
  }

  private startDragging(clientX: number, clientY: number): void {
    this.isDragging = true;
    this.startX = clientX;
    this.startY = clientY;
    this.startCropArea = { ...this.cropArea() };
  }

  onHandleMouseDown(event: MouseEvent, handle: string): void {
    if (this.disabled()) return;
    event.preventDefault();
    event.stopPropagation();
    this.startResizing(event.clientX, event.clientY, handle);
  }

  onHandleTouchStart(event: TouchEvent, handle: string): void {
    if (this.disabled()) return;
    event.preventDefault();
    event.stopPropagation();
    const touch = event.touches[0];
    this.startResizing(touch.clientX, touch.clientY, handle);
  }

  private startResizing(
    clientX: number,
    clientY: number,
    handle: string,
  ): void {
    this.isResizing = true;
    this.resizeHandle = handle;
    this.startX = clientX;
    this.startY = clientY;
    this.startCropArea = { ...this.cropArea() };
  }

  private onMouseMove(event: MouseEvent): void {
    this.handleMove(event.clientX, event.clientY);
  }

  private onTouchMove(event: TouchEvent): void {
    if (this.isDragging || this.isResizing) {
      event.preventDefault();
      const touch = event.touches[0];
      this.handleMove(touch.clientX, touch.clientY);
    }
  }

  private handleMove(clientX: number, clientY: number): void {
    if (this.isDragging) {
      this.handleDrag(clientX, clientY);
    } else if (this.isResizing) {
      this.handleResize(clientX, clientY);
    }
  }

  private handleDrag(clientX: number, clientY: number): void {
    const deltaX = clientX - this.startX;
    const deltaY = clientY - this.startY;

    const containerW = this.getContainerWidth();
    const containerH = this.containerHeight();
    const crop = this.startCropArea;

    let newX = crop.x + deltaX;
    let newY = crop.y + deltaY;

    // Constrain to container
    newX = Math.max(0, Math.min(newX, containerW - crop.width));
    newY = Math.max(0, Math.min(newY, containerH - crop.height));

    this.cropArea.set({
      ...this.cropArea(),
      x: newX,
      y: newY,
    });

    this.cropChange.emit(this.cropArea());
  }

  private handleResize(clientX: number, clientY: number): void {
    const deltaX = clientX - this.startX;
    const deltaY = clientY - this.startY;
    const crop = this.startCropArea;
    const aspectRatio = this.aspectRatio();
    const minW = this.minWidth();
    const minH = this.minHeight();
    const containerW = this.getContainerWidth();
    const containerH = this.containerHeight();

    let newX = crop.x;
    let newY = crop.y;
    let newW = crop.width;
    let newH = crop.height;

    switch (this.resizeHandle) {
      case 'se':
        newW = Math.max(minW, crop.width + deltaX);
        newH =
          aspectRatio !== null
            ? newW / aspectRatio
            : Math.max(minH, crop.height + deltaY);
        break;
      case 'sw':
        newW = Math.max(minW, crop.width - deltaX);
        newH =
          aspectRatio !== null
            ? newW / aspectRatio
            : Math.max(minH, crop.height + deltaY);
        newX = crop.x + crop.width - newW;
        break;
      case 'ne':
        newW = Math.max(minW, crop.width + deltaX);
        newH =
          aspectRatio !== null
            ? newW / aspectRatio
            : Math.max(minH, crop.height - deltaY);
        newY = crop.y + crop.height - newH;
        break;
      case 'nw':
        newW = Math.max(minW, crop.width - deltaX);
        newH =
          aspectRatio !== null
            ? newW / aspectRatio
            : Math.max(minH, crop.height - deltaY);
        newX = crop.x + crop.width - newW;
        newY = crop.y + crop.height - newH;
        break;
      case 'n':
        newH = Math.max(minH, crop.height - deltaY);
        if (aspectRatio !== null) newW = newH * aspectRatio;
        newY = crop.y + crop.height - newH;
        break;
      case 's':
        newH = Math.max(minH, crop.height + deltaY);
        if (aspectRatio !== null) newW = newH * aspectRatio;
        break;
      case 'w':
        newW = Math.max(minW, crop.width - deltaX);
        if (aspectRatio !== null) newH = newW / aspectRatio;
        newX = crop.x + crop.width - newW;
        break;
      case 'e':
        newW = Math.max(minW, crop.width + deltaX);
        if (aspectRatio !== null) newH = newW / aspectRatio;
        break;
    }

    // Constrain to container
    if (newX < 0) {
      newW += newX;
      newX = 0;
    }
    if (newY < 0) {
      newH += newY;
      newY = 0;
    }
    if (newX + newW > containerW) {
      newW = containerW - newX;
    }
    if (newY + newH > containerH) {
      newH = containerH - newY;
    }

    // Maintain aspect ratio after constraints
    if (aspectRatio !== null) {
      if (newW / aspectRatio > newH) {
        newW = newH * aspectRatio;
      } else {
        newH = newW / aspectRatio;
      }
    }

    this.cropArea.set({
      x: newX,
      y: newY,
      width: Math.max(minW, newW),
      height: Math.max(minH, newH),
    });

    this.cropChange.emit(this.cropArea());
  }

  private onMouseUp(): void {
    this.isDragging = false;
    this.isResizing = false;
  }

  private onTouchEnd(): void {
    this.isDragging = false;
    this.isResizing = false;
  }

  async crop(): Promise<CropResult> {
    const img = this.imageEl()?.nativeElement;
    const canvas = this.canvasEl()?.nativeElement;

    if (!img || !canvas) {
      throw new Error('Image or canvas not found');
    }

    const crop = this.cropArea();
    const containerW = this.getContainerWidth();
    const containerH = this.containerHeight();

    // Calculate the scale between displayed image and natural image
    const displayedW = this.scaledImageWidth();
    const displayedH = this.scaledImageHeight();
    const scale = Math.min(containerW / displayedW, containerH / displayedH, 1);

    const offsetX = (containerW - displayedW * scale) / 2;
    const offsetY = (containerH - displayedH * scale) / 2;

    // Convert crop area to natural image coordinates
    const naturalScale = this.imageNaturalWidth() / (displayedW * scale);
    const srcX = (crop.x - offsetX) * naturalScale;
    const srcY = (crop.y - offsetY) * naturalScale;
    const srcW = crop.width * naturalScale;
    const srcH = crop.height * naturalScale;

    // Set canvas size to crop dimensions
    canvas.width = srcW;
    canvas.height = srcH;

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      throw new Error('Could not get canvas context');
    }

    // Draw cropped portion
    ctx.drawImage(img, srcX, srcY, srcW, srcH, 0, 0, srcW, srcH);

    // Get result
    const dataUrl = canvas.toDataURL(this.outputType(), this.outputQuality());

    return new Promise((resolve) => {
      canvas.toBlob(
        (blob) => {
          resolve({
            dataUrl,
            blob,
            width: srcW,
            height: srcH,
          });
        },
        this.outputType(),
        this.outputQuality(),
      );
    });
  }

  resetCropArea(): void {
    this.initializeCropArea();
  }

  setZoom(value: number): void {
    this.zoom.set(Math.max(0.1, Math.min(3, value)));
  }

  zoomIn(): void {
    this.setZoom(this.zoom() + 0.1);
  }

  zoomOut(): void {
    this.setZoom(this.zoom() - 0.1);
  }
}
