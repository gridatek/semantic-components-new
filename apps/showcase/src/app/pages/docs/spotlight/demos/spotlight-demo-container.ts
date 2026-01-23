import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { SpotlightDemo } from './spotlight-demo';

@Component({
  selector: 'app-spotlight-demo-container',
  imports: [DemoContainer, SpotlightDemo],
  template: `
    <app-demo-container title="Spotlight" [code]="code">
      <app-spotlight-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpotlightDemoContainer {
  readonly code = `import {
  ChangeDetectionStrategy,
  Component,
  signal,
  viewChild,
} from '@angular/core';
import {
  ScSpotlight,
  ScSpotlightTitle,
  ScSpotlightDescription,
  ScSpotlightActions,
} from '@semantic-components/ui';

@Component({
  selector: 'app-spotlight-demo',
  imports: [
    ScSpotlight,
    ScSpotlightTitle,
    ScSpotlightDescription,
    ScSpotlightActions,
  ],
  template: \`
    <div class="space-y-8">
      <!-- Demo elements -->
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div
          id="spotlight-feature-1"
          class="p-6 border rounded-lg bg-card hover:shadow-md transition-shadow"
        >
          <div
            class="size-12 rounded-full bg-primary/10 flex items-center justify-center mb-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              class="size-6 text-primary"
            >
              <path
                d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"
              />
            </svg>
          </div>
          <h3 class="font-semibold mb-2">New Feature</h3>
          <p class="text-sm text-muted-foreground">
            Discover our latest feature that helps you work more efficiently.
          </p>
        </div>

        <div
          id="spotlight-feature-2"
          class="p-6 border rounded-lg bg-card hover:shadow-md transition-shadow"
        >
          <div
            class="size-12 rounded-full bg-green-500/10 flex items-center justify-center mb-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              class="size-6 text-green-500"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h3 class="font-semibold mb-2">Quick Actions</h3>
          <p class="text-sm text-muted-foreground">
            Perform common tasks with just a single click.
          </p>
        </div>

        <div
          id="spotlight-feature-3"
          class="p-6 border rounded-lg bg-card hover:shadow-md transition-shadow"
        >
          <div
            class="size-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              class="size-6 text-blue-500"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4M12 8h.01" />
            </svg>
          </div>
          <h3 class="font-semibold mb-2">Help Center</h3>
          <p class="text-sm text-muted-foreground">
            Get support and learn more about using the application.
          </p>
        </div>
      </div>

      <!-- Control buttons -->
      <div class="flex flex-wrap gap-4">
        <button
          type="button"
          (click)="showFeature1()"
          class="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
        >
          Highlight New Feature
        </button>

        <button
          type="button"
          (click)="showFeature2()"
          class="px-4 py-2 border rounded-md hover:bg-accent"
        >
          Highlight Quick Actions
        </button>

        <button
          type="button"
          (click)="showFeature3()"
          class="px-4 py-2 border rounded-md hover:bg-accent"
        >
          Highlight Help
        </button>
      </div>

      <!-- Interactive demo button -->
      <div class="p-6 border rounded-lg bg-card">
        <h3 class="font-semibold mb-4">Interactive Demo</h3>
        <p class="text-sm text-muted-foreground mb-4">
          Click the button below to see the spotlight in action with custom
          content.
        </p>
        <button
          id="spotlight-cta"
          type="button"
          (click)="showCTA()"
          class="px-6 py-3 bg-gradient-to-r from-primary to-purple-600 text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
        >
          Try Premium Feature
        </button>
      </div>

      <!-- Spotlight components -->
      <sc-spotlight
        #spotlight1
        [padding]="12"
        [borderRadius]="12"
        (closed)="onClosed('Feature 1')"
      >
        <sc-spotlight-title>New Feature Available!</sc-spotlight-title>
        <sc-spotlight-description>
          This exciting new feature helps you work more efficiently. Click to
          learn more about how it works.
        </sc-spotlight-description>
        <sc-spotlight-actions>
          <button
            type="button"
            (click)="spotlight1.close()"
            class="px-3 py-1.5 text-sm border rounded-md hover:bg-accent"
          >
            Maybe Later
          </button>
          <button
            type="button"
            (click)="learnMore(); spotlight1.close()"
            class="px-3 py-1.5 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
          >
            Learn More
          </button>
        </sc-spotlight-actions>
      </sc-spotlight>

      <sc-spotlight #spotlight2 [overlayOpacity]="0.8" [showClose]="false">
        <sc-spotlight-title>Quick Actions</sc-spotlight-title>
        <sc-spotlight-description>
          Access frequently used actions from here. You can customize which
          actions appear.
        </sc-spotlight-description>
        <sc-spotlight-actions>
          <button
            type="button"
            (click)="spotlight2.close()"
            class="px-3 py-1.5 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
          >
            Got it
          </button>
        </sc-spotlight-actions>
      </sc-spotlight>

      <sc-spotlight #spotlight3 [contentPlacement]="'bottom'">
        <sc-spotlight-title>Need Help?</sc-spotlight-title>
        <sc-spotlight-description>
          Our help center has guides, tutorials, and FAQs to help you get the
          most out of the application.
        </sc-spotlight-description>
        <sc-spotlight-actions>
          <button
            type="button"
            (click)="spotlight3.close()"
            class="px-3 py-1.5 text-sm border rounded-md hover:bg-accent"
          >
            Close
          </button>
          <button
            type="button"
            (click)="openHelp(); spotlight3.close()"
            class="px-3 py-1.5 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
          >
            Open Help
          </button>
        </sc-spotlight-actions>
      </sc-spotlight>

      <sc-spotlight
        #spotlightCTA
        [padding]="16"
        [borderRadius]="12"
        [overlayOpacity]="0.85"
      >
        <sc-spotlight-title>Unlock Premium Features</sc-spotlight-title>
        <sc-spotlight-description>
          Upgrade to premium to access advanced analytics, priority support, and
          exclusive features.
        </sc-spotlight-description>
        <sc-spotlight-actions>
          <button
            type="button"
            (click)="spotlightCTA.close()"
            class="px-3 py-1.5 text-sm border rounded-md hover:bg-accent"
          >
            Not Now
          </button>
          <button
            type="button"
            (click)="upgrade(); spotlightCTA.close()"
            class="px-3 py-1.5 text-sm bg-gradient-to-r from-primary to-purple-600 text-primary-foreground rounded-md"
          >
            Upgrade Now
          </button>
        </sc-spotlight-actions>
      </sc-spotlight>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpotlightDemo {
  private readonly spotlight1 = viewChild.required<ScSpotlight>('spotlight1');
  private readonly spotlight2 = viewChild.required<ScSpotlight>('spotlight2');
  private readonly spotlight3 = viewChild.required<ScSpotlight>('spotlight3');
  private readonly spotlightCTA =
    viewChild.required<ScSpotlight>('spotlightCTA');

  showFeature1(): void {
    this.spotlight1().show('#spotlight-feature-1');
  }

  showFeature2(): void {
    this.spotlight2().show('#spotlight-feature-2');
  }

  showFeature3(): void {
    this.spotlight3().show('#spotlight-feature-3');
  }

  showCTA(): void {
    this.spotlightCTA().show('#spotlight-cta');
  }

  learnMore(): void {
    console.log('Learn more clicked');
  }

  openHelp(): void {
    console.log('Open help clicked');
  }

  upgrade(): void {
    console.log('Upgrade clicked');
  }

  onClosed(feature: string): void {
    console.log(\`Spotlight closed: \${feature}\`);
  }
}`;
}
