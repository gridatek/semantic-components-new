import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ConfettiDemoComponent } from './confetti-demo';

@Component({
  selector: 'app-confetti-demo-container',
  imports: [DemoContainer, ConfettiDemoComponent],
  template: `
    <app-demo-container title="Confetti" [code]="code">
      <sc-confetti-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfettiDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component, viewChild } from '@angular/core';
import { ScConfetti } from '@semantic-components/ui';

@Component({
  selector: 'sc-confetti-demo',
  imports: [ScConfetti],
  template: \`
    <sc-confetti #confetti (complete)="onComplete()" />

    <div class="flex flex-col gap-6">
      <!-- Basic -->
      <div class="space-y-3">
        <h3 class="text-sm font-medium">Basic Confetti</h3>
        <button
          class="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          (click)="fireBasic()"
        >
          Fire Confetti!
        </button>
      </div>

      <!-- From Element -->
      <div class="space-y-3">
        <h3 class="text-sm font-medium">Fire from Element</h3>
        <button
          #celebrateBtn
          class="inline-flex items-center justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
          (click)="fireFromButton(celebrateBtn)"
        >
          Celebrate!
        </button>
      </div>

      <!-- Custom Options -->
      <div class="space-y-3">
        <h3 class="text-sm font-medium">Custom Colors</h3>
        <button
          class="inline-flex items-center justify-center rounded-md bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700"
          (click)="fireCustom()"
        >
          Purple Party
        </button>
      </div>

      <!-- Multiple Bursts -->
      <div class="space-y-3">
        <h3 class="text-sm font-medium">Multiple Bursts</h3>
        <button
          class="inline-flex items-center justify-center rounded-md bg-orange-600 px-4 py-2 text-sm font-medium text-white hover:bg-orange-700"
          (click)="fireMultiple()"
        >
          Big Celebration
        </button>
      </div>

      <!-- Corner Bursts -->
      <div class="space-y-3">
        <h3 class="text-sm font-medium">Corner Bursts</h3>
        <button
          class="inline-flex items-center justify-center rounded-md bg-cyan-600 px-4 py-2 text-sm font-medium text-white hover:bg-cyan-700"
          (click)="fireCorners()"
        >
          Fire from Corners
        </button>
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfettiDemo {
  readonly confetti = viewChild.required<ScConfetti>('confetti');

  fireBasic(): void {
    this.confetti().fire();
  }

  fireFromButton(button: HTMLButtonElement): void {
    this.confetti().fireFromElement(button, {
      particleCount: 50,
      spread: 60,
    });
  }

  fireCustom(): void {
    this.confetti().fire({
      colors: ['#8b5cf6', '#a78bfa', '#c4b5fd', '#ddd6fe'],
      particleCount: 80,
    });
  }

  fireMultiple(): void {
    this.confetti().fire({ origin: { x: 0.3, y: 0.6 }, particleCount: 50 });
    setTimeout(() => {
      this.confetti().fire({ origin: { x: 0.7, y: 0.6 }, particleCount: 50 });
    }, 200);
    setTimeout(() => {
      this.confetti().fire({ origin: { x: 0.5, y: 0.4 }, particleCount: 80 });
    }, 400);
  }

  fireCorners(): void {
    this.confetti().fire({
      origin: { x: 0, y: 1 },
      spread: 45,
      particleCount: 30,
    });
    this.confetti().fire({
      origin: { x: 1, y: 1 },
      spread: 45,
      particleCount: 30,
    });
  }

  onComplete(): void {
    console.log('Confetti animation complete');
  }
}`;
}
