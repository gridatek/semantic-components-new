import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BasicAspectRatioDemoContainer } from './demos/basic-aspect-ratio-demo-container';
import { FourThreeAspectRatioDemoContainer } from './demos/four-three-aspect-ratio-demo-container';
import { SquareAspectRatioDemoContainer } from './demos/square-aspect-ratio-demo-container';
import { UltrawideAspectRatioDemoContainer } from './demos/ultrawide-aspect-ratio-demo-container';
import { PortraitAspectRatioDemoContainer } from './demos/portrait-aspect-ratio-demo-container';
import { PlaceholderAspectRatioDemoContainer } from './demos/placeholder-aspect-ratio-demo-container';
import { VideoAspectRatioDemoContainer } from './demos/video-aspect-ratio-demo-container';
import { MapAspectRatioDemoContainer } from './demos/map-aspect-ratio-demo-container';

@Component({
  selector: 'app-aspect-ratio-page',
  imports: [
    BasicAspectRatioDemoContainer,
    FourThreeAspectRatioDemoContainer,
    SquareAspectRatioDemoContainer,
    UltrawideAspectRatioDemoContainer,
    PortraitAspectRatioDemoContainer,
    PlaceholderAspectRatioDemoContainer,
    VideoAspectRatioDemoContainer,
    MapAspectRatioDemoContainer,
  ],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">AspectRatio</h1>
        <p class="text-muted-foreground">
          Displays content within a desired ratio.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-basic-aspect-ratio-demo-container />
        <app-four-three-aspect-ratio-demo-container />
        <app-square-aspect-ratio-demo-container />
        <app-ultrawide-aspect-ratio-demo-container />
        <app-portrait-aspect-ratio-demo-container />
        <app-placeholder-aspect-ratio-demo-container />
        <app-video-aspect-ratio-demo-container />
        <app-map-aspect-ratio-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AspectRatioPage {}
