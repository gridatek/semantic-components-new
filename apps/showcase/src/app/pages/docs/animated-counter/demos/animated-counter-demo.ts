import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScAnimatedCounter } from '@semantic-components/ui';

@Component({
  selector: 'sc-animated-counter-demo',
  imports: [ScAnimatedCounter],
  template: `
    <div class="flex flex-col gap-8">
      <!-- Basic Counter -->
      <div class="space-y-3">
        <h3 class="text-sm font-medium">Basic Counter</h3>
        <div class="flex items-center gap-4">
          <sc-animated-counter
            [value]="basicValue()"
            class="text-4xl font-bold"
          />
          <button
            class="rounded-md bg-primary px-3 py-1.5 text-sm text-primary-foreground hover:bg-primary/90"
            (click)="incrementBasic()"
          >
            +100
          </button>
          <button
            class="rounded-md bg-secondary px-3 py-1.5 text-sm text-secondary-foreground hover:bg-secondary/90"
            (click)="resetBasic()"
          >
            Reset
          </button>
        </div>
      </div>

      <!-- With Prefix/Suffix -->
      <div class="space-y-3">
        <h3 class="text-sm font-medium">With Prefix & Suffix</h3>
        <div class="flex items-center gap-4">
          <sc-animated-counter
            [value]="moneyValue()"
            prefix="$"
            [decimalPlaces]="2"
            class="text-3xl font-bold text-green-600"
          />
          <button
            class="rounded-md bg-green-600 px-3 py-1.5 text-sm text-white hover:bg-green-700"
            (click)="addMoney()"
          >
            +$50
          </button>
        </div>
      </div>

      <!-- Percentage -->
      <div class="space-y-3">
        <h3 class="text-sm font-medium">Percentage</h3>
        <div class="flex items-center gap-4">
          <sc-animated-counter
            [value]="percentValue()"
            suffix="%"
            [decimalPlaces]="1"
            class="text-3xl font-bold text-blue-600"
          />
          <button
            class="rounded-md bg-blue-600 px-3 py-1.5 text-sm text-white hover:bg-blue-700"
            (click)="updatePercent()"
          >
            Random %
          </button>
        </div>
      </div>

      <!-- Different Easings -->
      <div class="space-y-3">
        <h3 class="text-sm font-medium">Easing Options</h3>
        <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div class="text-center">
            <p class="mb-2 text-xs text-muted-foreground">Linear</p>
            <sc-animated-counter
              [value]="easingValue()"
              easing="linear"
              [duration]="2000"
              class="text-2xl font-bold"
            />
          </div>
          <div class="text-center">
            <p class="mb-2 text-xs text-muted-foreground">Ease In</p>
            <sc-animated-counter
              [value]="easingValue()"
              easing="easeIn"
              [duration]="2000"
              class="text-2xl font-bold"
            />
          </div>
          <div class="text-center">
            <p class="mb-2 text-xs text-muted-foreground">Ease Out</p>
            <sc-animated-counter
              [value]="easingValue()"
              easing="easeOut"
              [duration]="2000"
              class="text-2xl font-bold"
            />
          </div>
          <div class="text-center">
            <p class="mb-2 text-xs text-muted-foreground">Ease In/Out</p>
            <sc-animated-counter
              [value]="easingValue()"
              easing="easeInOut"
              [duration]="2000"
              class="text-2xl font-bold"
            />
          </div>
        </div>
        <button
          class="rounded-md bg-primary px-3 py-1.5 text-sm text-primary-foreground hover:bg-primary/90"
          (click)="animateEasing()"
        >
          Animate All
        </button>
      </div>

      <!-- Large Numbers -->
      <div class="space-y-3">
        <h3 class="text-sm font-medium">Large Numbers with Separators</h3>
        <div class="flex items-center gap-4">
          <sc-animated-counter
            [value]="largeValue()"
            separator=","
            class="text-3xl font-bold"
          />
          <button
            class="rounded-md bg-primary px-3 py-1.5 text-sm text-primary-foreground hover:bg-primary/90"
            (click)="addLarge()"
          >
            +10,000
          </button>
        </div>
      </div>

      <!-- Stats Cards -->
      <div class="space-y-3">
        <h3 class="text-sm font-medium">Stats Dashboard</h3>
        <div class="grid grid-cols-3 gap-4">
          <div class="rounded-lg border bg-card p-4 text-center">
            <p class="text-xs text-muted-foreground">Users</p>
            <sc-animated-counter
              [value]="statsUsers()"
              class="text-2xl font-bold"
            />
          </div>
          <div class="rounded-lg border bg-card p-4 text-center">
            <p class="text-xs text-muted-foreground">Revenue</p>
            <sc-animated-counter
              [value]="statsRevenue()"
              prefix="$"
              class="text-2xl font-bold text-green-600"
            />
          </div>
          <div class="rounded-lg border bg-card p-4 text-center">
            <p class="text-xs text-muted-foreground">Growth</p>
            <sc-animated-counter
              [value]="statsGrowth()"
              suffix="%"
              [decimalPlaces]="1"
              class="text-2xl font-bold text-blue-600"
            />
          </div>
        </div>
        <button
          class="rounded-md bg-primary px-3 py-1.5 text-sm text-primary-foreground hover:bg-primary/90"
          (click)="updateStats()"
        >
          Update Stats
        </button>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimatedCounterDemoComponent {
  readonly basicValue = signal(0);
  readonly moneyValue = signal(0);
  readonly percentValue = signal(0);
  readonly easingValue = signal(0);
  readonly largeValue = signal(0);

  readonly statsUsers = signal(1234);
  readonly statsRevenue = signal(45678);
  readonly statsGrowth = signal(12.5);

  incrementBasic(): void {
    this.basicValue.update((v) => v + 100);
  }

  resetBasic(): void {
    this.basicValue.set(0);
  }

  addMoney(): void {
    this.moneyValue.update((v) => v + 50);
  }

  updatePercent(): void {
    this.percentValue.set(Math.random() * 100);
  }

  animateEasing(): void {
    this.easingValue.set(0);
    setTimeout(() => this.easingValue.set(1000), 50);
  }

  addLarge(): void {
    this.largeValue.update((v) => v + 10000);
  }

  updateStats(): void {
    this.statsUsers.update((v) => v + Math.floor(Math.random() * 100));
    this.statsRevenue.update((v) => v + Math.floor(Math.random() * 5000));
    this.statsGrowth.set(Math.random() * 50);
  }
}
