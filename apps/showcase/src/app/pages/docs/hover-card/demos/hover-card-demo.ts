import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScHoverCardProvider,
  ScHoverCardPortal,
  ScHoverCard,
  ScHoverCardTrigger,
} from '@semantic-components/ui';

@Component({
  selector: 'app-sc-hover-card-demo',
  imports: [
    ScHoverCardProvider,
    ScHoverCardPortal,
    ScHoverCard,
    ScHoverCardTrigger,
  ],
  template: `
    <div class="flex flex-wrap items-center gap-8">
      <!-- Basic Hover Card -->
      <div sc-hover-card-provider>
        <a
          sc-hover-card-trigger
          href="https://github.com/angular"
          target="_blank"
          rel="noopener noreferrer"
          class="text-sm font-medium underline underline-offset-4"
        >
          &#64;angular
        </a>
        <div sc-hover-card-portal>
          <div sc-hover-card>
            <div class="flex justify-between gap-4">
              <div
                class="flex size-12 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-red-700 text-xl font-bold text-white"
              >
                A
              </div>
              <div class="space-y-1">
                <h4 class="text-sm font-semibold">&#64;angular</h4>
                <p class="text-sm text-muted-foreground">
                  The modern web developer's platform.
                </p>
                <div class="flex items-center pt-2">
                  <svg
                    class="mr-2 size-4 text-muted-foreground"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                  >
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                    <line x1="16" x2="16" y1="2" y2="6" />
                    <line x1="8" x2="8" y1="2" y2="6" />
                    <line x1="3" x2="21" y1="10" y2="10" />
                  </svg>
                  <span class="text-xs text-muted-foreground">
                    Joined September 2014
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Hover Card with Different Side -->
      <div sc-hover-card-provider side="right">
        <button
          sc-hover-card-trigger
          class="inline-flex h-9 items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <svg
            class="size-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
          </svg>
          More Info
        </button>
        <div sc-hover-card-portal>
          <div sc-hover-card>
            <div class="space-y-2">
              <h4 class="text-sm font-semibold">Information</h4>
              <p class="text-sm text-muted-foreground">
                Hover cards display supplementary information when hovering over
                a trigger element. They're useful for showing previews or
                additional context.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Hover Card Top Aligned -->
      <div sc-hover-card-provider side="top" align="start">
        <span
          sc-hover-card-trigger
          class="cursor-help border-b border-dashed border-muted-foreground text-sm"
        >
          What is Angular?
        </span>
        <div sc-hover-card-portal>
          <div sc-hover-card>
            <div class="space-y-2">
              <h4 class="text-sm font-semibold">Angular</h4>
              <p class="text-sm text-muted-foreground">
                Angular is a TypeScript-based web application framework led by
                the Angular Team at Google. It's a complete rewrite of
                AngularJS.
              </p>
              <div class="flex gap-2 pt-2">
                <span
                  class="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                >
                  TypeScript
                </span>
                <span
                  class="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                >
                  Framework
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScHoverCardDemo {}
