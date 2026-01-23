import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ImageAnnotatorDemo } from './image-annotator-demo';

@Component({
  selector: 'app-image-annotator-demo-container',
  imports: [DemoContainer, ImageAnnotatorDemo],
  template: `
    <app-demo-container title="Image" [code]="code">
      <app-image-annotator-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageAnnotatorDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScImageAnnotator, type Annotation } from '@semantic-components/ui';

@Component({
  selector: 'app-image-annotator-demo',
  imports: [ScImageAnnotator],
  template: \`
    <div class="space-y-8">
      <!-- Basic Demo -->
      <section>
        <h3 class="text-lg font-medium mb-4">Image Annotator</h3>
        <p class="text-sm text-muted-foreground mb-4">
          Draw, mark up, and annotate images with various tools.
        </p>
        <sc-image-annotator
          [src]="imageSrc()"
          [width]="700"
          [height]="450"
          (annotationsChange)="onAnnotationsChange($event)"
          (save)="onSave($event)"
        />
        <p class="mt-2 text-sm text-muted-foreground">
          Annotations: {{ annotationCount() }}
        </p>
      </section>

      <!-- Instructions -->
      <section>
        <h3 class="text-lg font-medium mb-4">How to Use</h3>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div class="p-4 border rounded-lg">
            <h4 class="font-medium mb-2">Pen Tool</h4>
            <p class="text-sm text-muted-foreground">
              Freehand drawing. Click and drag to draw.
            </p>
          </div>
          <div class="p-4 border rounded-lg">
            <h4 class="font-medium mb-2">Line Tool</h4>
            <p class="text-sm text-muted-foreground">
              Draw straight lines between two points.
            </p>
          </div>
          <div class="p-4 border rounded-lg">
            <h4 class="font-medium mb-2">Rectangle Tool</h4>
            <p class="text-sm text-muted-foreground">
              Draw rectangles by clicking and dragging.
            </p>
          </div>
          <div class="p-4 border rounded-lg">
            <h4 class="font-medium mb-2">Circle Tool</h4>
            <p class="text-sm text-muted-foreground">
              Draw circles from center outward.
            </p>
          </div>
          <div class="p-4 border rounded-lg">
            <h4 class="font-medium mb-2">Arrow Tool</h4>
            <p class="text-sm text-muted-foreground">
              Draw arrows to point at things.
            </p>
          </div>
          <div class="p-4 border rounded-lg">
            <h4 class="font-medium mb-2">Eraser Tool</h4>
            <p class="text-sm text-muted-foreground">
              Remove annotations by clicking on them.
            </p>
          </div>
        </div>
      </section>

      <!-- Smaller Size Demo -->
      <section>
        <h3 class="text-lg font-medium mb-4">Custom Size</h3>
        <p class="text-sm text-muted-foreground mb-4">
          Annotator with custom dimensions.
        </p>
        <sc-image-annotator [src]="imageSrc2()" [width]="400" [height]="300" />
      </section>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageAnnotatorDemo {
  readonly annotationCount = signal(0);

  readonly imageSrc = signal('https://picsum.photos/seed/annotate1/700/450');
  readonly imageSrc2 = signal('https://picsum.photos/seed/annotate2/400/300');

  onAnnotationsChange(annotations: Annotation[]): void {
    this.annotationCount.set(annotations.length);
  }

  onSave(dataUrl: string): void {
    console.log('Image saved, data URL length:', dataUrl.length);
  }
}`;
}
