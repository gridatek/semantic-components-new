import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScColorPicker,
  ScColorPickerArea,
  ScColorPickerHue,
  ScColorPickerPreview,
  ScColorPickerInput,
  ScColorPickerSwatches,
  ScColorPickerEyeDropper,
} from '@semantic-components/ui';

@Component({
  selector: 'app-sc-color-picker-demo',
  imports: [
    ScColorPicker,
    ScColorPickerArea,
    ScColorPickerHue,
    ScColorPickerPreview,
    ScColorPickerInput,
    ScColorPickerSwatches,
    ScColorPickerEyeDropper,
  ],
  template: `
    <div class="space-y-8">
      <!-- Full Color Picker -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Full Color Picker</h3>
        <div class="max-w-xs">
          <div
            sc-color-picker
            [(value)]="color1"
            class="space-y-4 rounded-lg border p-4"
          >
            <div sc-color-picker-area></div>
            <div sc-color-picker-hue></div>
            <div class="flex items-center gap-3">
              <div sc-color-picker-preview></div>
              <input sc-color-picker-input format="hex" class="flex-1" />
            </div>
          </div>
          <p class="mt-2 text-sm text-muted-foreground">
            Selected: {{ color1() }}
          </p>
        </div>
      </div>

      <!-- With Swatches -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">With Preset Swatches</h3>
        <div class="max-w-xs">
          <div
            sc-color-picker
            [(value)]="color2"
            class="space-y-4 rounded-lg border p-4"
          >
            <div sc-color-picker-area></div>
            <div sc-color-picker-hue></div>
            <div sc-color-picker-swatches></div>
            <div class="flex items-center gap-3">
              <div sc-color-picker-preview></div>
              <input sc-color-picker-input format="hex" class="flex-1" />
            </div>
          </div>
        </div>
      </div>

      <!-- With Eye Dropper -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">With Eye Dropper (Chrome/Edge)</h3>
        <div class="max-w-xs">
          <div
            sc-color-picker
            [(value)]="color3"
            class="space-y-4 rounded-lg border p-4"
          >
            <div sc-color-picker-area></div>
            <div sc-color-picker-hue></div>
            <div class="flex items-center gap-3">
              <div sc-color-picker-preview></div>
              <input sc-color-picker-input format="hex" class="flex-1" />
              <button sc-color-picker-eyedropper></button>
            </div>
          </div>
        </div>
      </div>

      <!-- Simple Swatch Picker -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Simple Swatch Picker</h3>
        <div class="max-w-xs">
          <div
            sc-color-picker
            [(value)]="color4"
            class="space-y-4 rounded-lg border p-4"
          >
            <div sc-color-picker-swatches [colors]="customSwatches"></div>
            <div class="flex items-center gap-3">
              <div sc-color-picker-preview></div>
              <input sc-color-picker-input format="hex" class="flex-1" />
            </div>
          </div>
        </div>
      </div>

      <!-- Compact -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Compact</h3>
        <div class="max-w-[200px]">
          <div
            sc-color-picker
            [(value)]="color5"
            class="space-y-3 rounded-lg border p-3"
          >
            <div sc-color-picker-area class="h-32"></div>
            <div sc-color-picker-hue></div>
            <input sc-color-picker-input format="hex" />
          </div>
        </div>
      </div>

      <!-- RGB Format -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">RGB Format Display</h3>
        <div class="max-w-xs">
          <div
            sc-color-picker
            [(value)]="color6"
            class="space-y-4 rounded-lg border p-4"
          >
            <div sc-color-picker-area></div>
            <div sc-color-picker-hue></div>
            <div class="flex items-center gap-3">
              <div sc-color-picker-preview></div>
              <input sc-color-picker-input format="rgb" class="flex-1" />
            </div>
          </div>
        </div>
      </div>

      <!-- HSL Format -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">HSL Format Display</h3>
        <div class="max-w-xs">
          <div
            sc-color-picker
            [(value)]="color7"
            class="space-y-4 rounded-lg border p-4"
          >
            <div sc-color-picker-area></div>
            <div sc-color-picker-hue></div>
            <div class="flex items-center gap-3">
              <div sc-color-picker-preview></div>
              <input sc-color-picker-input format="hsl" class="flex-1" />
            </div>
          </div>
        </div>
      </div>

      <!-- Color Preview Cards -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Live Preview</h3>
        <div class="flex gap-4">
          <div
            class="flex h-24 w-32 items-center justify-center rounded-lg text-white shadow-lg"
            [style.background-color]="color1()"
          >
            <span class="text-sm font-medium drop-shadow">Preview</span>
          </div>
          <div class="space-y-2">
            <div class="flex items-center gap-2">
              <div
                class="size-4 rounded"
                [style.background-color]="color1()"
              ></div>
              <span class="font-mono text-sm">{{ color1() }}</span>
            </div>
            <p class="text-sm text-muted-foreground">
              Use the picker above to change this color
            </p>
          </div>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScColorPickerDemo {
  readonly color1 = signal('#3b82f6');
  readonly color2 = signal('#22c55e');
  readonly color3 = signal('#8b5cf6');
  readonly color4 = signal('#ef4444');
  readonly color5 = signal('#f97316');
  readonly color6 = signal('#06b6d4');
  readonly color7 = signal('#ec4899');

  readonly customSwatches = [
    '#1e293b',
    '#334155',
    '#475569',
    '#64748b',
    '#94a3b8',
    '#cbd5e1',
    '#dc2626',
    '#ea580c',
    '#d97706',
    '#65a30d',
    '#16a34a',
    '#0d9488',
    '#0891b2',
    '#2563eb',
    '#7c3aed',
    '#c026d3',
  ];
}
