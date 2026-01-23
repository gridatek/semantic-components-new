import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScCountdownDemo } from './countdown-demo';

@Component({
  selector: 'app-countdown-demo-container',
  imports: [DemoContainer, ScCountdownDemo],
  template: `
    <app-demo-container title="Countdown" [code]="code">
      <sc-countdown-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScCountdownDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScCountdown,
  ScCountdownSimple,
  CountdownTime,
} from '@semantic-components/ui';

@Component({
  selector: 'sc-countdown-demo',
  imports: [ScCountdown, ScCountdownSimple],
  template: \`
    <div class="space-y-8">
      <!-- Basic Countdown -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Basic Countdown</h3>
        <p class="text-sm text-muted-foreground">
          Countdown to a target date with days, hours, minutes, and seconds.
        </p>
        <div class="p-6 rounded-lg border inline-block">
          <sc-countdown [targetDate]="futureDate" (complete)="onComplete()" />
        </div>
      </section>

      <!-- Compact Variant -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Compact Variant</h3>
        <p class="text-sm text-muted-foreground">
          Smaller, more compact display.
        </p>
        <div class="p-4 rounded-lg border inline-block">
          <sc-countdown [targetDate]="futureDate" variant="compact" />
        </div>
      </section>

      <!-- Cards Variant -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Cards Variant</h3>
        <p class="text-sm text-muted-foreground">
          Each unit displayed in a card.
        </p>
        <div class="p-6 rounded-lg border inline-block">
          <sc-countdown [targetDate]="futureDate" variant="cards" />
        </div>
      </section>

      <!-- Without Separator -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Without Separator</h3>
        <p class="text-sm text-muted-foreground">
          Hide the separator between units.
        </p>
        <div class="p-6 rounded-lg border inline-block">
          <sc-countdown [targetDate]="futureDate" [showSeparator]="false" />
        </div>
      </section>

      <!-- Custom Labels -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Custom Labels</h3>
        <p class="text-sm text-muted-foreground">Use abbreviated labels.</p>
        <div class="p-6 rounded-lg border inline-block">
          <sc-countdown
            [targetDate]="futureDate"
            daysLabel="D"
            hoursLabel="H"
            minutesLabel="M"
            secondsLabel="S"
          />
        </div>
      </section>

      <!-- Hours, Minutes, Seconds Only -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Without Days</h3>
        <p class="text-sm text-muted-foreground">
          Show only hours, minutes, and seconds.
        </p>
        <div class="p-4 rounded-lg border inline-block">
          <sc-countdown
            [targetDate]="shortFuture"
            [showDays]="false"
            variant="compact"
          />
        </div>
      </section>

      <!-- Simple Countdown -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Simple Countdown</h3>
        <p class="text-sm text-muted-foreground">
          Inline countdown display for simple use cases.
        </p>
        <div class="space-y-2">
          <div class="flex items-center gap-2">
            <span class="text-muted-foreground">Time remaining:</span>
            <sc-countdown-simple
              [targetDate]="futureDate"
              format="full"
              class="text-lg font-semibold"
            />
          </div>
          <div class="flex items-center gap-2">
            <span class="text-muted-foreground">HH:MM:SS:</span>
            <sc-countdown-simple
              [targetDate]="shortFuture"
              format="hh:mm:ss"
              class="text-lg"
            />
          </div>
          <div class="flex items-center gap-2">
            <span class="text-muted-foreground">MM:SS:</span>
            <sc-countdown-simple
              [targetDate]="veryShortFuture"
              format="mm:ss"
              class="text-lg"
            />
          </div>
        </div>
      </section>

      <!-- Event Countdown -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Event Countdown</h3>
        <p class="text-sm text-muted-foreground">
          Countdown styled for a product launch or event.
        </p>
        <div
          class="max-w-md rounded-lg border bg-gradient-to-br from-primary/10 to-primary/5 p-8 text-center"
        >
          <h4 class="text-lg font-semibold mb-2">Product Launch</h4>
          <p class="text-muted-foreground mb-6">
            Get ready for something amazing!
          </p>
          <sc-countdown
            [targetDate]="futureDate"
            variant="cards"
            daysLabel="DAYS"
            hoursLabel="HRS"
            minutesLabel="MIN"
            secondsLabel="SEC"
          />
          <button
            class="mt-6 inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Notify Me
          </button>
        </div>
      </section>

      <!-- Sale Timer -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Sale Timer</h3>
        <p class="text-sm text-muted-foreground">
          Countdown for a limited time offer.
        </p>
        <div
          class="max-w-sm rounded-lg bg-destructive/10 border border-destructive/20 p-4 flex items-center gap-4"
        >
          <div class="text-destructive">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              class="size-8"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </div>
          <div class="flex-1">
            <div class="font-semibold text-destructive">Flash Sale Ends In</div>
            <sc-countdown-simple
              [targetDate]="shortFuture"
              format="hh:mm:ss"
              class="text-xl font-bold text-destructive"
            />
          </div>
        </div>
      </section>

      <!-- Completed State -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Completed Countdown</h3>
        <p class="text-sm text-muted-foreground">
          When the countdown reaches zero.
        </p>
        <div class="p-6 rounded-lg border inline-block">
          <sc-countdown [targetDate]="pastDate" variant="cards" />
        </div>
        <p class="text-sm text-muted-foreground">
          The countdown shows all zeros when complete.
        </p>
      </section>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScCountdownDemo {
  // 7 days from now
  readonly futureDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

  // 2 hours from now
  readonly shortFuture = new Date(Date.now() + 2 * 60 * 60 * 1000);

  // 5 minutes from now
  readonly veryShortFuture = new Date(Date.now() + 5 * 60 * 1000);

  // Past date (already expired)
  readonly pastDate = new Date(Date.now() - 1000);

  onComplete(): void {
    console.log('Countdown complete!');
  }
}`;
}
