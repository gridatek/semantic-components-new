import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScScrollArea, ScScrollBar } from '@semantic-components/ui';

interface Tag {
  id: string;
  name: string;
}

@Component({
  selector: 'app-scroll-area-demo',
  imports: [ScScrollArea, ScScrollBar],
  template: `
    <div class="space-y-8">
      <!-- Vertical Scroll -->
      <div class="space-y-2">
        <h3 class="text-sm font-medium">Vertical Scroll</h3>
        <div sc-scroll-area class="h-72 w-48 rounded-md border">
          <div class="p-4">
            <h4 class="mb-4 text-sm font-medium leading-none">Tags</h4>
            @for (tag of tags; track tag.id) {
              <div class="text-sm">
                {{ tag.name }}
              </div>
              @if (!$last) {
                <div class="my-2 h-px bg-border"></div>
              }
            }
          </div>
          <div sc-scroll-bar orientation="vertical"></div>
        </div>
      </div>

      <!-- Horizontal Scroll -->
      <div class="space-y-2">
        <h3 class="text-sm font-medium">Horizontal Scroll</h3>
        <div sc-scroll-area class="w-96 whitespace-nowrap rounded-md border">
          <div class="flex w-max space-x-4 p-4">
            @for (artwork of artworks; track artwork.artist) {
              <figure class="shrink-0">
                <div class="overflow-hidden rounded-md">
                  <div
                    class="h-[150px] w-[150px] bg-muted flex items-center justify-center text-muted-foreground text-xs"
                  >
                    {{ artwork.art }}
                  </div>
                </div>
                <figcaption class="pt-2 text-xs text-muted-foreground">
                  Photo by
                  <span class="font-semibold text-foreground">
                    {{ artwork.artist }}
                  </span>
                </figcaption>
              </figure>
            }
          </div>
          <div sc-scroll-bar orientation="horizontal"></div>
        </div>
      </div>

      <!-- Both Scrollbars -->
      <div class="space-y-2">
        <h3 class="text-sm font-medium">Both Scrollbars</h3>
        <div sc-scroll-area class="h-72 w-72 rounded-md border">
          <div class="p-4" style="width: 500px;">
            <h4 class="mb-4 text-sm font-medium leading-none">
              Content with both scrollbars
            </h4>
            <p class="text-sm text-muted-foreground leading-relaxed">
              This content is wider and taller than the container, so both
              scrollbars are visible. You can scroll both horizontally and
              vertically to see all the content.
            </p>
            <div class="mt-4 space-y-2">
              @for (i of numbers; track i) {
                <div class="text-sm whitespace-nowrap">
                  Row {{ i }}: Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </div>
              }
            </div>
          </div>
          <div sc-scroll-bar orientation="vertical"></div>
          <div sc-scroll-bar orientation="horizontal"></div>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScScrollAreaDemo {
  readonly tags: Tag[] = Array.from({ length: 50 }, (_, i) => ({
    id: `tag-${i + 1}`,
    name: `v1.2.0-beta.${i + 1}`,
  }));

  readonly artworks = [
    { art: 'Artwork 1', artist: 'Ornella Binni' },
    { art: 'Artwork 2', artist: 'Tom Byrom' },
    { art: 'Artwork 3', artist: 'Vladimir Malyavko' },
    { art: 'Artwork 4', artist: 'Double Brain' },
    { art: 'Artwork 5', artist: 'Eugene Golovesov' },
    { art: 'Artwork 6', artist: 'Rezli' },
    { art: 'Artwork 7', artist: 'Claudio Schwarz' },
  ];

  readonly numbers = Array.from({ length: 20 }, (_, i) => i + 1);
}
