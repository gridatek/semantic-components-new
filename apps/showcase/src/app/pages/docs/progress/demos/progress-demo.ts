import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import { ScProgress } from '@semantic-components/ui';

@Component({
  selector: 'app-sc-progress-demo',
  imports: [ScProgress],
  template: `
    <div class="space-y-8">
      <!-- Basic Progress -->
      <div class="space-y-2">
        <h3 class="text-sm font-medium">Default Progress</h3>
        <div sc-progress [value]="progress()" class="w-[60%]"></div>
        <p class="text-sm text-muted-foreground">{{ progress() }}% complete</p>
      </div>

      <!-- Different Values -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Different Values</h3>
        <div class="space-y-3">
          <div class="flex items-center gap-4">
            <span class="w-12 text-sm text-muted-foreground">0%</span>
            <div sc-progress [value]="0" class="flex-1"></div>
          </div>
          <div class="flex items-center gap-4">
            <span class="w-12 text-sm text-muted-foreground">25%</span>
            <div sc-progress [value]="25" class="flex-1"></div>
          </div>
          <div class="flex items-center gap-4">
            <span class="w-12 text-sm text-muted-foreground">50%</span>
            <div sc-progress [value]="50" class="flex-1"></div>
          </div>
          <div class="flex items-center gap-4">
            <span class="w-12 text-sm text-muted-foreground">75%</span>
            <div sc-progress [value]="75" class="flex-1"></div>
          </div>
          <div class="flex items-center gap-4">
            <span class="w-12 text-sm text-muted-foreground">100%</span>
            <div sc-progress [value]="100" class="flex-1"></div>
          </div>
        </div>
      </div>

      <!-- Custom Max -->
      <div class="space-y-2">
        <h3 class="text-sm font-medium">Custom Max (50 of 200)</h3>
        <div sc-progress [value]="50" [max]="200" class="w-[60%]"></div>
      </div>

      <!-- Custom Styling -->
      <div class="space-y-2">
        <h3 class="text-sm font-medium">Custom Styling</h3>
        <div sc-progress [value]="66" class="h-4 w-[60%]"></div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScProgressDemo implements OnInit, OnDestroy {
  readonly progress = signal(13);
  private intervalId: ReturnType<typeof setInterval> | null = null;

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.progress.update((prev) => {
        if (prev >= 100) return 13;
        return prev + 1;
      });
    }, 100);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
