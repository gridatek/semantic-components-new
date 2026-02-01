import {
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  inject,
  input,
  model,
  output,
  signal,
  ViewEncapsulation,
} from '@angular/core';
import { cn } from '../../utils';
import { LightboxImage } from './lightbox.types';

@Component({
  selector: 'sc-lightbox',
  exportAs: 'scLightbox',

  template: `
    @if (isOpen()) {
      <div
        [class]="overlayClass()"
        (click)="onOverlayClick($event)"
        (keydown)="onKeydown($event)"
        tabindex="-1"
        role="dialog"
        aria-modal="true"
        [attr.aria-label]="
          'Image gallery, showing image ' +
          (currentIndex() + 1) +
          ' of ' +
          images().length
        "
      >
        <!-- Close button -->
        <button
          type="button"
          [class]="closeButtonClass()"
          (click)="close()"
          aria-label="Close lightbox"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            class="size-6"
          >
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>

        <!-- Navigation: Previous -->
        @if (images().length > 1) {
          <button
            type="button"
            [class]="navButtonClass('left')"
            (click)="previous()"
            [disabled]="!loop() && currentIndex() === 0"
            aria-label="Previous image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              class="size-8"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
        }

        <!-- Main image container -->
        <div [class]="imageContainerClass()">
          <img
            [src]="currentImage().src"
            [alt]="currentImage().alt || 'Image ' + (currentIndex() + 1)"
            [class]="imageClass()"
            [style.transform]="'scale(' + zoomLevel() + ')'"
            (load)="onImageLoad()"
            draggable="false"
          />

          <!-- Loading indicator -->
          @if (imageLoading()) {
            <div class="absolute inset-0 flex items-center justify-center">
              <svg
                class="size-8 animate-spin text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                (click)="$event.stopPropagation()"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                />
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            </div>
          }
        </div>

        <!-- Navigation: Next -->
        @if (images().length > 1) {
          <button
            type="button"
            [class]="navButtonClass('right')"
            (click)="next()"
            [disabled]="!loop() && currentIndex() === images().length - 1"
            aria-label="Next image"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              class="size-8"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        }

        <!-- Bottom bar -->
        <div [class]="bottomBarClass()">
          <!-- Image info -->
          @if (
            showInfo() && (currentImage().title || currentImage().description)
          ) {
            <div class="flex-1 text-white">
              @if (currentImage().title) {
                <h3 class="font-semibold">{{ currentImage().title }}</h3>
              }
              @if (currentImage().description) {
                <p class="text-sm text-white/80">
                  {{ currentImage().description }}
                </p>
              }
            </div>
          }

          <!-- Controls -->
          <div class="flex items-center gap-2">
            <!-- Counter -->
            @if (showCounter() && images().length > 1) {
              <span class="text-sm text-white/80">
                {{ currentIndex() + 1 }} / {{ images().length }}
              </span>
            }

            <!-- Zoom controls -->
            @if (showZoom()) {
              <div class="flex items-center gap-1 ml-4">
                <button
                  type="button"
                  class="p-2 text-white/80 hover:text-white transition-colors"
                  (click)="zoomOut()"
                  [disabled]="zoomLevel() <= 0.5"
                  aria-label="Zoom out"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    class="size-5"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3M8 11h6" />
                  </svg>
                </button>
                <span class="text-sm text-white/80 min-w-[3rem] text-center">
                  {{ Math.round(zoomLevel() * 100) }}%
                </span>
                <button
                  type="button"
                  class="p-2 text-white/80 hover:text-white transition-colors"
                  (click)="zoomIn()"
                  [disabled]="zoomLevel() >= 3"
                  aria-label="Zoom in"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    class="size-5"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3M8 11h6M11 8v6" />
                  </svg>
                </button>
                <button
                  type="button"
                  class="p-2 text-white/80 hover:text-white transition-colors"
                  (click)="resetZoom()"
                  aria-label="Reset zoom"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    class="size-5"
                  >
                    <path d="M21 21l-6-6m6 6v-4.8m0 4.8h-4.8" />
                    <path d="M3 16.2V21m0 0h4.8M3 21l6-6" />
                    <path d="M21 7.8V3m0 0h-4.8M21 3l-6 6" />
                    <path d="M3 7.8V3m0 0h4.8M3 3l6 6" />
                  </svg>
                </button>
              </div>
            }
          </div>
        </div>

        <!-- Thumbnails -->
        @if (showThumbnails() && images().length > 1) {
          <div [class]="thumbnailsClass()">
            @for (image of images(); track image.src; let i = $index) {
              <button
                type="button"
                [class]="thumbnailClass(i)"
                (click)="goTo(i)"
                [attr.aria-label]="'Go to image ' + (i + 1)"
              >
                <img
                  [src]="image.thumbnail || image.src"
                  [alt]="image.alt || 'Thumbnail ' + (i + 1)"
                  class="size-full object-cover"
                />
              </button>
            }
          </div>
        }
      </div>
    }

    <ng-content />
  `,
  host: {
    'data-slot': 'lightbox',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScLightbox {
  private readonly destroyRef = inject(DestroyRef);

  readonly classInput = input<string>('', { alias: 'class' });
  readonly images = input<LightboxImage[]>([]);
  readonly startIndex = input<number>(0);
  readonly loop = input<boolean>(true);
  readonly showCounter = input<boolean>(true);
  readonly showInfo = input<boolean>(true);
  readonly showZoom = input<boolean>(true);
  readonly showThumbnails = input<boolean>(true);
  readonly closeOnOverlayClick = input<boolean>(true);
  readonly closeOnEscape = input<boolean>(true);

  readonly isOpen = model<boolean>(false);
  readonly currentIndex = model<number>(0);

  readonly opened = output<number>();
  readonly closed = output<void>();
  readonly indexChange = output<number>();

  protected readonly zoomLevel = signal(1);
  protected readonly imageLoading = signal(false);

  protected readonly Math = Math;

  protected readonly currentImage = computed(() => {
    const images = this.images();
    const index = this.currentIndex();
    return images[index];
  });

  protected readonly overlayClass = computed(() =>
    cn(
      'fixed inset-0 z-50 bg-black/95 flex flex-col',
      'animate-in fade-in-0 duration-200',
    ),
  );

  protected readonly closeButtonClass = computed(() =>
    cn(
      'absolute top-4 right-4 z-10 p-2 text-white/80 hover:text-white',
      'transition-colors rounded-full hover:bg-white/10',
    ),
  );

  protected navButtonClass(side: 'left' | 'right'): string {
    return cn(
      'absolute top-1/2 -translate-y-1/2 z-10 p-2 text-white/80 hover:text-white',
      'transition-colors rounded-full hover:bg-white/10',
      'disabled:opacity-30 disabled:cursor-not-allowed',
      side === 'left' ? 'left-4' : 'right-4',
    );
  }

  protected readonly imageContainerClass = computed(() =>
    cn('flex-1 flex items-center justify-center overflow-hidden relative'),
  );

  protected readonly imageClass = computed(() =>
    cn(
      'max-h-[calc(100vh-200px)] max-w-[calc(100vw-100px)] object-contain',
      'transition-transform duration-200',
      this.imageLoading() && 'opacity-0',
    ),
  );

  protected readonly bottomBarClass = computed(() =>
    cn('flex items-center justify-between px-4 py-3 bg-black/50'),
  );

  protected readonly thumbnailsClass = computed(() =>
    cn(
      'flex items-center justify-center gap-2 px-4 py-3 bg-black/50 overflow-x-auto',
    ),
  );

  protected thumbnailClass(index: number): string {
    return cn(
      'size-16 rounded overflow-hidden flex-shrink-0',
      'ring-2 ring-offset-2 ring-offset-black transition-all',
      index === this.currentIndex()
        ? 'ring-white'
        : 'ring-transparent hover:ring-white/50',
    );
  }

  open(index = 0): void {
    this.currentIndex.set(index);
    this.isOpen.set(true);
    this.zoomLevel.set(1);
    this.imageLoading.set(true);
    this.opened.emit(index);
    document.body.style.overflow = 'hidden';
  }

  close(): void {
    this.isOpen.set(false);
    this.closed.emit();
    document.body.style.overflow = '';
  }

  next(): void {
    const images = this.images();
    const current = this.currentIndex();

    if (current < images.length - 1) {
      this.goTo(current + 1);
    } else if (this.loop()) {
      this.goTo(0);
    }
  }

  previous(): void {
    const current = this.currentIndex();

    if (current > 0) {
      this.goTo(current - 1);
    } else if (this.loop()) {
      this.goTo(this.images().length - 1);
    }
  }

  goTo(index: number): void {
    this.currentIndex.set(index);
    this.zoomLevel.set(1);
    this.imageLoading.set(true);
    this.indexChange.emit(index);
  }

  zoomIn(): void {
    this.zoomLevel.update((z) => Math.min(3, z + 0.25));
  }

  zoomOut(): void {
    this.zoomLevel.update((z) => Math.max(0.5, z - 0.25));
  }

  resetZoom(): void {
    this.zoomLevel.set(1);
  }

  onImageLoad(): void {
    this.imageLoading.set(false);
  }

  onOverlayClick(event: MouseEvent): void {
    if (
      this.closeOnOverlayClick() &&
      (event.target as HTMLElement).getAttribute('data-slot') === 'lightbox'
    ) {
      this.close();
    }
  }

  onKeydown(event: KeyboardEvent): void {
    switch (event.key) {
      case 'Escape':
        if (this.closeOnEscape()) {
          this.close();
        }
        break;
      case 'ArrowLeft':
        this.previous();
        break;
      case 'ArrowRight':
        this.next();
        break;
      case '+':
      case '=':
        this.zoomIn();
        break;
      case '-':
        this.zoomOut();
        break;
      case '0':
        this.resetZoom();
        break;
    }
  }

  getCurrentImage(): LightboxImage | undefined {
    return this.currentImage();
  }
}
