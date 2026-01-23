import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScAspectRatio } from '@semantic-components/ui';

@Component({
  selector: 'app-sc-aspect-ratio-demo',
  imports: [ScAspectRatio],
  template: `
    <div class="space-y-8">
      <!-- 16:9 Aspect Ratio -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">16:9 Aspect Ratio</h3>
        <div class="w-[450px] overflow-hidden rounded-md">
          <div sc-aspect-ratio [ratio]="16 / 9">
            <img
              src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
              alt="Photo by Drew Beamer"
              class="size-full object-cover"
            />
          </div>
        </div>
      </div>

      <!-- 4:3 Aspect Ratio -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">4:3 Aspect Ratio</h3>
        <div class="w-[450px] overflow-hidden rounded-md">
          <div sc-aspect-ratio [ratio]="4 / 3">
            <img
              src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
              alt="Photo by Drew Beamer"
              class="size-full object-cover"
            />
          </div>
        </div>
      </div>

      <!-- 1:1 Square -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">1:1 Square</h3>
        <div class="w-[300px] overflow-hidden rounded-md">
          <div sc-aspect-ratio [ratio]="1">
            <img
              src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
              alt="Photo by Drew Beamer"
              class="size-full object-cover"
            />
          </div>
        </div>
      </div>

      <!-- 21:9 Ultrawide -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">21:9 Ultrawide</h3>
        <div class="w-[500px] overflow-hidden rounded-md">
          <div sc-aspect-ratio [ratio]="21 / 9">
            <img
              src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
              alt="Photo by Drew Beamer"
              class="size-full object-cover"
            />
          </div>
        </div>
      </div>

      <!-- Portrait 9:16 -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">9:16 Portrait</h3>
        <div class="w-[200px] overflow-hidden rounded-md">
          <div sc-aspect-ratio [ratio]="9 / 16">
            <img
              src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
              alt="Photo by Drew Beamer"
              class="size-full object-cover"
            />
          </div>
        </div>
      </div>

      <!-- With Placeholder -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">With Placeholder Background</h3>
        <div class="w-[450px] overflow-hidden rounded-md">
          <div sc-aspect-ratio [ratio]="16 / 9" class="bg-muted">
            <div class="flex size-full items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="size-10 text-muted-foreground"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                <circle cx="9" cy="9" r="2" />
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Video Embed -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Video Embed Container</h3>
        <div class="w-[450px] overflow-hidden rounded-md border">
          <div sc-aspect-ratio [ratio]="16 / 9" class="bg-black">
            <div class="flex size-full items-center justify-center text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-16"
              >
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Map Container -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Map Container (3:2)</h3>
        <div class="w-[450px] overflow-hidden rounded-md border">
          <div sc-aspect-ratio [ratio]="3 / 2" class="bg-muted">
            <div class="flex size-full items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="size-10 text-muted-foreground"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScAspectRatioDemo {}
