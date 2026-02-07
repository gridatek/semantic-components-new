import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { TourGuideDemo } from './tour-guide-demo';

@Component({
  selector: 'app-tour-guide-demo-container',
  imports: [DemoContainer, TourGuideDemo],
  template: `
    <app-demo-container title="Tour" [code]="code">
      <app-tour-guide-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TourGuideDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ScTourGuide, TourService, TourOptions } from '@semantic-components/ui';

@Component({
  selector: 'app-tour-guide-demo',
  imports: [ScTourGuide],
  template: \`
    <div class="space-y-8">
      <!-- Demo UI elements -->
      <div class="grid gap-6 md:grid-cols-3">
        <div id="tour-card-1" class="p-6 border rounded-lg bg-card">
          <h3 class="font-semibold mb-2">Dashboard</h3>
          <p class="text-sm text-muted-foreground">
            View your analytics and key metrics at a glance.
          </p>
        </div>

        <div id="tour-card-2" class="p-6 border rounded-lg bg-card">
          <h3 class="font-semibold mb-2">Settings</h3>
          <p class="text-sm text-muted-foreground">
            Configure your preferences and account details.
          </p>
        </div>

        <div id="tour-card-3" class="p-6 border rounded-lg bg-card">
          <h3 class="font-semibold mb-2">Reports</h3>
          <p class="text-sm text-muted-foreground">
            Generate and export detailed reports.
          </p>
        </div>
      </div>

      <!-- Action buttons -->
      <div class="flex flex-wrap gap-4">
        <button
          id="tour-button-1"
          type="button"
          (click)="startTour()"
          class="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
        >
          Start Tour
        </button>

        <button
          id="tour-button-2"
          type="button"
          (click)="startMinimalTour()"
          class="px-4 py-2 border rounded-md hover:bg-accent"
        >
          Minimal Tour
        </button>
      </div>

      <!-- Sample form -->
      <div id="tour-form" class="max-w-md p-6 border rounded-lg bg-card">
        <h3 class="font-semibold mb-4">Quick Action Form</h3>
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              class="w-full px-3 py-2 border rounded-md bg-background"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label class="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              class="w-full px-3 py-2 border rounded-md bg-background"
              placeholder="Enter your email"
            />
          </div>
          <button
            type="button"
            class="w-full px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
          >
            Submit
          </button>
        </div>
      </div>

      <!-- Tour Guide Component -->
      <sc-tour-guide
        (stepChange)="onStepChange($event)"
        (tourComplete)="onTourComplete()"
        (tourClosed)="onTourClosed()"
      />
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TourGuideDemo {
  private readonly tourService = inject(TourService);

  startTour(): void {
    const options: TourOptions = {
      steps: [
        {
          target: '#tour-card-1',
          title: 'Welcome to Dashboard',
          content:
            'This is your main dashboard where you can view all your analytics and key performance metrics.',
          placement: 'bottom',
        },
        {
          target: '#tour-card-2',
          title: 'Settings Panel',
          content:
            'Configure your account settings, preferences, and notification options here.',
          placement: 'bottom',
        },
        {
          target: '#tour-card-3',
          title: 'Reports Section',
          content:
            'Generate detailed reports and export them in various formats for analysis.',
          placement: 'bottom',
        },
        {
          target: '#tour-form',
          title: 'Quick Actions',
          content:
            'Use this form to quickly perform common actions. Fill in the details and submit.',
          placement: 'right',
          highlightPadding: 12,
        },
        {
          target: '#tour-button-1',
          title: 'Start Again',
          content:
            'Click this button anytime to restart the tour and learn about new features.',
          placement: 'bottom',
        },
      ],
      showProgress: true,
      showStepNumbers: true,
      allowClose: true,
      allowKeyboardNavigation: true,
      scrollBehavior: 'smooth',
    };

    this.tourService.start(options);
  }

  startMinimalTour(): void {
    const options: TourOptions = {
      steps: [
        {
          target: '#tour-card-1',
          title: 'Dashboard Overview',
          content: 'Your central hub for all information.',
        },
        {
          target: '#tour-button-2',
          title: 'Alternative Tours',
          content: 'Try different tour configurations.',
        },
      ],
      showProgress: false,
      showStepNumbers: false,
      overlayOpacity: 0.6,
    };

    this.tourService.start(options);
  }

  onStepChange(step: number): void {
    console.log('Step changed to:', step);
  }

  onTourComplete(): void {
    console.log('Tour completed!');
  }

  onTourClosed(): void {
    console.log('Tour closed');
  }
}`;
}
