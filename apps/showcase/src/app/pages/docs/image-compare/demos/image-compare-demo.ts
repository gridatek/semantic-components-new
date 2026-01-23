import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScImageCompare } from '@semantic-components/ui';

@Component({
  selector: 'sc-image-compare-demo',
  imports: [ScImageCompare],
  template: `
    <div class="space-y-8">
      <!-- Basic Image Compare -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Basic Image Compare</h3>
        <p class="text-sm text-muted-foreground">
          Drag the slider to compare before and after images.
        </p>
        <sc-image-compare
          [beforeImage]="'https://picsum.photos/800/400?grayscale&random=1'"
          [afterImage]="'https://picsum.photos/800/400?random=1'"
          class="w-full max-w-2xl aspect-[2/1]"
        />
      </section>

      <!-- Custom Labels -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Custom Labels</h3>
        <p class="text-sm text-muted-foreground">
          Use custom labels for the comparison.
        </p>
        <sc-image-compare
          [beforeImage]="'https://picsum.photos/800/400?blur=5&random=2'"
          [afterImage]="'https://picsum.photos/800/400?random=2'"
          [beforeLabel]="'Blurred'"
          [afterLabel]="'Sharp'"
          class="w-full max-w-2xl aspect-[2/1]"
        />
      </section>

      <!-- Without Labels -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Without Labels</h3>
        <p class="text-sm text-muted-foreground">
          Clean comparison without overlay labels.
        </p>
        <sc-image-compare
          [beforeImage]="'https://picsum.photos/800/400?grayscale&random=3'"
          [afterImage]="'https://picsum.photos/800/400?random=3'"
          [showLabels]="false"
          class="w-full max-w-2xl aspect-[2/1]"
        />
      </section>

      <!-- Vertical Orientation -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Vertical Orientation</h3>
        <p class="text-sm text-muted-foreground">
          Compare images with a vertical slider.
        </p>
        <sc-image-compare
          [beforeImage]="'https://picsum.photos/400/600?grayscale&random=4'"
          [afterImage]="'https://picsum.photos/400/600?random=4'"
          [orientation]="'vertical'"
          [beforeLabel]="'Top'"
          [afterLabel]="'Bottom'"
          class="w-full max-w-sm aspect-[2/3]"
        />
      </section>

      <!-- Custom Initial Position -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Custom Initial Position</h3>
        <p class="text-sm text-muted-foreground">
          Start with the slider at 25%.
        </p>
        <sc-image-compare
          [beforeImage]="'https://picsum.photos/800/400?grayscale&random=5'"
          [afterImage]="'https://picsum.photos/800/400?random=5'"
          [(position)]="customPosition"
          class="w-full max-w-2xl aspect-[2/1]"
        />
        <p class="text-sm text-muted-foreground">
          Current position: {{ customPosition() }}%
        </p>
      </section>

      <!-- Controlled Position -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Controlled Position</h3>
        <p class="text-sm text-muted-foreground">
          Control the slider position with a range input.
        </p>
        <sc-image-compare
          [beforeImage]="'https://picsum.photos/800/400?grayscale&random=6'"
          [afterImage]="'https://picsum.photos/800/400?random=6'"
          [(position)]="controlledPosition"
          class="w-full max-w-2xl aspect-[2/1]"
        />
        <div class="flex items-center gap-4 max-w-2xl">
          <input
            type="range"
            min="0"
            max="100"
            [value]="controlledPosition()"
            (input)="controlledPosition.set(+$any($event.target).value)"
            class="flex-1"
          />
          <span class="text-sm w-12 text-right">
            {{ controlledPosition() }}%
          </span>
        </div>
      </section>

      <!-- Square Aspect Ratio -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Square Images</h3>
        <p class="text-sm text-muted-foreground">
          Works with any aspect ratio.
        </p>
        <sc-image-compare
          [beforeImage]="'https://picsum.photos/500/500?grayscale&random=7'"
          [afterImage]="'https://picsum.photos/500/500?random=7'"
          class="w-full max-w-md aspect-square"
        />
      </section>

      <!-- Keyboard Navigation -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Keyboard Navigation</h3>
        <p class="text-sm text-muted-foreground">
          Focus the comparison and use arrow keys to adjust. Hold Shift for
          larger steps.
        </p>
        <ul
          class="text-sm space-y-1 list-disc list-inside text-muted-foreground"
        >
          <li>
            <kbd class="px-1 py-0.5 bg-muted rounded text-xs">←</kbd>
            /
            <kbd class="px-1 py-0.5 bg-muted rounded text-xs">→</kbd>
            - Move slider
          </li>
          <li>
            <kbd class="px-1 py-0.5 bg-muted rounded text-xs">Home</kbd>
            - Go to start
          </li>
          <li>
            <kbd class="px-1 py-0.5 bg-muted rounded text-xs">End</kbd>
            - Go to end
          </li>
          <li>
            <kbd class="px-1 py-0.5 bg-muted rounded text-xs">Shift</kbd>
            + Arrow - Move by 10%
          </li>
        </ul>
        <sc-image-compare
          [beforeImage]="'https://picsum.photos/800/400?grayscale&random=8'"
          [afterImage]="'https://picsum.photos/800/400?random=8'"
          class="w-full max-w-2xl aspect-[2/1]"
        />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScImageCompareDemo {
  readonly customPosition = signal(25);
  readonly controlledPosition = signal(50);
}
