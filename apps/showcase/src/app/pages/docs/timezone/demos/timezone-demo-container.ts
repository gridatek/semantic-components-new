import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScTimezoneDemo } from './timezone-demo';

@Component({
  selector: 'app-timezone-demo-container',
  imports: [DemoContainer, ScTimezoneDemo],
  template: `
    <app-demo-container title="Timezone" [code]="code">
      <app-sc-timezone-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScTimezoneDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  ScTimezoneBadge,
  ScTimezoneButton,
  ScTimezoneDisplay,
  ScTimezoneSelect,
  ScTimezoneService,
} from '@semantic-components/ui';

@Component({
  selector: 'app-sc-timezone-demo',
  imports: [
    ScTimezoneDisplay,
    ScTimezoneSelect,
    ScTimezoneButton,
    ScTimezoneBadge,
  ],
  template: \`
    <div class="space-y-8">
      <!-- Basic Select -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Basic Select</h3>
        <div class="max-w-xs">
          <sc-timezone-select></sc-timezone-select>
        </div>
        <p class="text-sm text-muted-foreground">
          Current: {{ timezoneService.currentTimezone().label }} ({{
            timezoneService.currentTimezone().offset
          }})
        </p>
      </div>

      <!-- Select without Abbreviation -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Select (No Abbreviation)</h3>
        <div class="max-w-xs">
          <sc-timezone-select [showAbbr]="false"></sc-timezone-select>
        </div>
      </div>

      <!-- Select without Offset -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Select (No Offset)</h3>
        <div class="max-w-xs">
          <sc-timezone-select [showOffset]="false"></sc-timezone-select>
        </div>
      </div>

      <!-- Timezone Display -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Timezone Display</h3>
        <div class="flex items-center gap-4">
          <button sc-timezone-display></button>
          <span class="text-sm text-muted-foreground">
            Shows current timezone abbreviation
          </span>
        </div>
      </div>

      <!-- Timezone Display with Offset -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Timezone Display with Offset</h3>
        <div class="flex items-center gap-4">
          <button sc-timezone-display [showOffset]="true"></button>
          <span class="text-sm text-muted-foreground">
            Shows abbreviation and UTC offset
          </span>
        </div>
      </div>

      <!-- Icon Only Display -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Icon Only Display</h3>
        <div class="flex items-center gap-4">
          <button sc-timezone-display [iconOnly]="true" size="icon"></button>
          <span class="text-sm text-muted-foreground">Clock icon only</span>
        </div>
      </div>

      <!-- Variants -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Variants</h3>
        <div class="flex items-center gap-4">
          <div class="flex flex-col items-center gap-2">
            <button sc-timezone-display variant="default"></button>
            <span class="text-xs text-muted-foreground">Default</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <button sc-timezone-display variant="outline"></button>
            <span class="text-xs text-muted-foreground">Outline</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <button sc-timezone-display variant="ghost"></button>
            <span class="text-xs text-muted-foreground">Ghost</span>
          </div>
        </div>
      </div>

      <!-- Sizes -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Sizes</h3>
        <div class="flex items-center gap-4">
          <div class="flex flex-col items-center gap-2">
            <button sc-timezone-display variant="outline" size="sm"></button>
            <span class="text-xs text-muted-foreground">Small</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <button
              sc-timezone-display
              variant="outline"
              size="default"
            ></button>
            <span class="text-xs text-muted-foreground">Default</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <button sc-timezone-display variant="outline" size="lg"></button>
            <span class="text-xs text-muted-foreground">Large</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <button
              sc-timezone-display
              variant="outline"
              size="icon"
              [iconOnly]="true"
            ></button>
            <span class="text-xs text-muted-foreground">Icon</span>
          </div>
        </div>
      </div>

      <!-- Timezone Button -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Timezone Button</h3>
        <div class="flex items-center gap-4">
          <button sc-timezone-button variant="outline"></button>
          <span class="text-sm text-muted-foreground">
            Shows current timezone with dropdown icon
          </span>
        </div>
      </div>

      <!-- Timezone Button with Offset -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Timezone Button with Offset</h3>
        <div class="flex items-center gap-4">
          <button
            sc-timezone-button
            variant="outline"
            [showOffset]="true"
          ></button>
        </div>
      </div>

      <!-- Timezone Badge -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Timezone Badge</h3>
        <div class="flex items-center gap-4">
          <span sc-timezone-badge></span>
          <span sc-timezone-badge [showLabel]="true"></span>
          <span sc-timezone-badge [showOffset]="true"></span>
          <span sc-timezone-badge [showLabel]="true" [showOffset]="true"></span>
        </div>
        <p class="text-sm text-muted-foreground">
          Compact badge for headers and status bars
        </p>
      </div>

      <!-- Badge without Icon -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Badge without Icon</h3>
        <div class="flex items-center gap-4">
          <span sc-timezone-badge [showIcon]="false"></span>
          <span sc-timezone-badge [showIcon]="false" [showLabel]="true"></span>
        </div>
      </div>

      <!-- In Navigation Context -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">In Navigation Context</h3>
        <div class="flex items-center justify-between rounded-lg border p-4">
          <div class="space-y-0.5">
            <span class="text-base font-medium">Timezone</span>
            <p class="text-sm text-muted-foreground">
              Your current timezone setting
            </p>
          </div>
          <button sc-timezone-display variant="outline"></button>
        </div>
      </div>

      <!-- Settings Panel -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Settings Panel</h3>
        <div class="w-[400px] rounded-lg border p-4">
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <div class="space-y-0.5">
                <label class="text-sm font-medium">Timezone</label>
                <p class="text-sm text-muted-foreground">
                  Select your timezone
                </p>
              </div>
              <sc-timezone-select class="w-56"></sc-timezone-select>
            </div>
          </div>
        </div>
      </div>

      <!-- Current Time Display -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Current Time Display</h3>
        <div class="flex items-center gap-4 rounded-lg border p-4">
          <span sc-timezone-badge></span>
          <span class="text-lg font-mono">
            {{ timezoneService.currentTimeFormatted() }}
          </span>
        </div>
        <p class="text-sm text-muted-foreground">
          Shows the current time in the selected timezone
        </p>
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScTimezoneDemo {
  protected readonly timezoneService = inject(ScTimezoneService);
}`;
}
