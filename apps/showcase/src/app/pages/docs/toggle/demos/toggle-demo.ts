import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScToggle } from '@semantic-components/ui';

@Component({
  selector: 'app-toggle-demo',
  imports: [ScToggle],
  template: `
    <div class="space-y-8">
      <!-- Basic Toggle -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Basic Toggle</h3>
        <button sc-toggle [(pressed)]="bold" aria-label="Toggle bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="size-4"
          >
            <path d="M14 12a4 4 0 0 0 0-8H6v8" />
            <path d="M15 20a4 4 0 0 0 0-8H6v8" />
          </svg>
        </button>
      </div>

      <!-- Outline Variant -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Outline Variant</h3>
        <button
          sc-toggle
          variant="outline"
          [(pressed)]="italic"
          aria-label="Toggle italic"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="size-4"
          >
            <line x1="19" x2="10" y1="4" y2="4" />
            <line x1="14" x2="5" y1="20" y2="20" />
            <line x1="15" x2="9" y1="4" y2="20" />
          </svg>
        </button>
      </div>

      <!-- With Text -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">With Text</h3>
        <button sc-toggle [(pressed)]="underline" aria-label="Toggle underline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="mr-2 size-4"
          >
            <path d="M6 4v6a6 6 0 0 0 12 0V4" />
            <line x1="4" x2="20" y1="20" y2="20" />
          </svg>
          Underline
        </button>
      </div>

      <!-- Sizes -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Sizes</h3>
        <div class="flex items-center gap-2">
          <button sc-toggle size="sm" aria-label="Toggle small">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="size-4"
            >
              <path d="M14 12a4 4 0 0 0 0-8H6v8" />
              <path d="M15 20a4 4 0 0 0 0-8H6v8" />
            </svg>
          </button>
          <button sc-toggle size="default" aria-label="Toggle default">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="size-4"
            >
              <path d="M14 12a4 4 0 0 0 0-8H6v8" />
              <path d="M15 20a4 4 0 0 0 0-8H6v8" />
            </svg>
          </button>
          <button sc-toggle size="lg" aria-label="Toggle large">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="size-4"
            >
              <path d="M14 12a4 4 0 0 0 0-8H6v8" />
              <path d="M15 20a4 4 0 0 0 0-8H6v8" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Disabled -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Disabled</h3>
        <div class="flex items-center gap-2">
          <button sc-toggle [disabled]="true" aria-label="Toggle disabled">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="size-4"
            >
              <path d="M14 12a4 4 0 0 0 0-8H6v8" />
              <path d="M15 20a4 4 0 0 0 0-8H6v8" />
            </svg>
          </button>
          <button
            sc-toggle
            [pressed]="true"
            [disabled]="true"
            aria-label="Toggle disabled pressed"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="size-4"
            >
              <path d="M14 12a4 4 0 0 0 0-8H6v8" />
              <path d="M15 20a4 4 0 0 0 0-8H6v8" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Text Formatting Toolbar -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Text Formatting Toolbar</h3>
        <div class="flex items-center gap-1 rounded-md border p-1">
          <button sc-toggle [(pressed)]="toolbarBold" aria-label="Toggle bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="size-4"
            >
              <path d="M14 12a4 4 0 0 0 0-8H6v8" />
              <path d="M15 20a4 4 0 0 0 0-8H6v8" />
            </svg>
          </button>
          <button
            sc-toggle
            [(pressed)]="toolbarItalic"
            aria-label="Toggle italic"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="size-4"
            >
              <line x1="19" x2="10" y1="4" y2="4" />
              <line x1="14" x2="5" y1="20" y2="20" />
              <line x1="15" x2="9" y1="4" y2="20" />
            </svg>
          </button>
          <button
            sc-toggle
            [(pressed)]="toolbarUnderline"
            aria-label="Toggle underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="size-4"
            >
              <path d="M6 4v6a6 6 0 0 0 12 0V4" />
              <line x1="4" x2="20" y1="20" y2="20" />
            </svg>
          </button>
          <button
            sc-toggle
            [(pressed)]="toolbarStrike"
            aria-label="Toggle strikethrough"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="size-4"
            >
              <path d="M16 4H9a3 3 0 0 0-2.83 4" />
              <path d="M14 12a4 4 0 0 1 0 8H6" />
              <line x1="4" x2="20" y1="12" y2="12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScToggleDemo {
  readonly bold = signal(false);
  readonly italic = signal(false);
  readonly underline = signal(false);
  readonly toolbarBold = signal(true);
  readonly toolbarItalic = signal(false);
  readonly toolbarUnderline = signal(false);
  readonly toolbarStrike = signal(false);
}
