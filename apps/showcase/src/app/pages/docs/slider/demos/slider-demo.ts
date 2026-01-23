import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScSlider } from '@semantic-components/ui';

@Component({
  selector: 'app-sc-slider-demo',
  imports: [ScSlider],
  template: `
    <div class="space-y-8">
      <!-- Basic Slider -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Basic Slider</h3>
        <div class="w-[60%]">
          <div sc-slider [(value)]="basicValue"></div>
          <p class="mt-2 text-sm text-muted-foreground">
            Value: {{ basicValue() }}
          </p>
        </div>
      </div>

      <!-- With Min/Max -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Custom Range (0-50)</h3>
        <div class="w-[60%]">
          <div sc-slider [(value)]="rangeValue" [min]="0" [max]="50"></div>
          <p class="mt-2 text-sm text-muted-foreground">
            Value: {{ rangeValue() }}
          </p>
        </div>
      </div>

      <!-- With Step -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">With Step (10)</h3>
        <div class="w-[60%]">
          <div sc-slider [(value)]="stepValue" [step]="10"></div>
          <p class="mt-2 text-sm text-muted-foreground">
            Value: {{ stepValue() }}
          </p>
        </div>
      </div>

      <!-- Disabled -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Disabled</h3>
        <div class="w-[60%]">
          <div sc-slider [value]="50" [disabled]="true"></div>
        </div>
      </div>

      <!-- Volume Control -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Volume Control</h3>
        <div class="flex w-[60%] items-center gap-4">
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
            class="size-5 text-muted-foreground"
          >
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          </svg>
          <div sc-slider [(value)]="volume" class="flex-1"></div>
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
            class="size-5 text-muted-foreground"
          >
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
          </svg>
          <span class="w-12 text-sm text-muted-foreground">
            {{ volume() }}%
          </span>
        </div>
      </div>

      <!-- Price Range -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Price Filter</h3>
        <div class="w-[60%] space-y-2">
          <div class="flex justify-between text-sm">
            <span>Price</span>
            <span class="text-muted-foreground">{{ '$' + price() }}</span>
          </div>
          <div
            sc-slider
            [(value)]="price"
            [min]="0"
            [max]="1000"
            [step]="50"
          ></div>
          <div class="flex justify-between text-xs text-muted-foreground">
            <span>$0</span>
            <span>$1000</span>
          </div>
        </div>
      </div>

      <!-- Temperature -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Temperature</h3>
        <div class="w-[60%] rounded-lg border p-4">
          <div class="flex items-center justify-between">
            <span class="text-sm font-medium">Room Temperature</span>
            <span class="text-2xl font-bold">{{ temperature() }}°C</span>
          </div>
          <div
            sc-slider
            [(value)]="temperature"
            [min]="16"
            [max]="30"
            class="mt-4"
          ></div>
          <div class="mt-2 flex justify-between text-xs text-muted-foreground">
            <span>16°C</span>
            <span>30°C</span>
          </div>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSliderDemo {
  readonly basicValue = signal(33);
  readonly rangeValue = signal(25);
  readonly stepValue = signal(50);
  readonly volume = signal(75);
  readonly price = signal(500);
  readonly temperature = signal(22);
}
