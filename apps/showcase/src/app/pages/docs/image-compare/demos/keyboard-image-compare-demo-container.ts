import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { KeyboardImageCompareDemo } from './keyboard-image-compare-demo';

@Component({
  selector: 'app-keyboard-image-compare-demo-container',
  imports: [DemoContainer, KeyboardImageCompareDemo],
  template: `
    <app-demo-container title="Keyboard Navigation" [code]="code">
      <app-keyboard-image-compare-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KeyboardImageCompareDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScImageCompare } from '@semantic-components/ui';

@Component({
  selector: 'app-keyboard-image-compare-demo',
  imports: [ScImageCompare],
  template: \`
    <p class="text-sm text-muted-foreground mb-4">
      Focus the comparison and use arrow keys to adjust. Hold Shift for larger
      steps.
    </p>
    <ul class="text-sm space-y-1 list-disc list-inside text-muted-foreground mb-4">
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
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KeyboardImageCompareDemo {}`;
}
