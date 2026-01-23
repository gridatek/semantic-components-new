import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScEmojiPickerDemo } from './emoji-picker-demo';

@Component({
  selector: 'app-emoji-picker-demo-container',
  imports: [DemoContainer, ScEmojiPickerDemo],
  template: `
    <app-demo-container title="Emoji" [code]="code">
      <sc-emoji-picker-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScEmojiPickerDemoContainer {
  readonly code = `import { Component, signal } from '@angular/core';
import {
  ScEmojiPicker,
  ScEmojiPickerTrigger,
  Emoji,
} from '@semantic-components/ui';

@Component({
  selector: 'sc-emoji-picker-demo',
  imports: [ScEmojiPicker, ScEmojiPickerTrigger],
  template: \`
    <div class="space-y-8">
      <!-- Basic Emoji Picker -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Basic Emoji Picker</h3>
        <sc-emoji-picker (emojiSelect)="onEmojiSelect($event)" />
        @if (selectedEmoji()) {
          <p class="text-sm text-muted-foreground">
            Selected: {{ selectedEmoji()?.emoji }} ({{ selectedEmoji()?.name }})
          </p>
        }
      </section>

      <!-- Without Search -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Without Search</h3>
        <sc-emoji-picker [showSearch]="false" />
      </section>

      <!-- Without Categories -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Without Category Tabs</h3>
        <sc-emoji-picker [showCategories]="false" class="h-72" />
      </section>

      <!-- Without Recent -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Without Recently Used</h3>
        <sc-emoji-picker [showRecent]="false" />
      </section>

      <!-- Compact (fewer columns) -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Compact (6 columns)</h3>
        <sc-emoji-picker [columns]="6" class="w-56" />
      </section>

      <!-- In Input Context -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Emoji Input</h3>
        <div class="flex items-start gap-2">
          <div class="flex-1">
            <div class="relative">
              <input
                type="text"
                [value]="inputValue()"
                (input)="onInputChange($event)"
                placeholder="Type a message..."
                class="w-full rounded-md border border-input bg-transparent px-3 py-2 pr-10 text-sm shadow-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
              />
              <button
                type="button"
                class="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-accent rounded"
                (click)="togglePicker()"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  class="size-4 text-muted-foreground"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                  <line x1="9" x2="9.01" y1="9" y2="9" />
                  <line x1="15" x2="15.01" y1="9" y2="9" />
                </svg>
              </button>
            </div>
            @if (showInputPicker()) {
              <div class="mt-2">
                <sc-emoji-picker
                  (emojiSelect)="insertEmoji($event)"
                  [maxRecent]="6"
                />
              </div>
            }
          </div>
        </div>
      </section>

      <!-- Trigger Button Example -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Trigger Button</h3>
        <p class="text-sm text-muted-foreground mb-2">
          Use with a popover for dropdown behavior:
        </p>
        <div class="flex items-center gap-2">
          <button sc-emoji-picker-trigger></button>
          <span class="text-sm text-muted-foreground">
            ← Click to open (requires popover)
          </span>
        </div>
      </section>

      <!-- Reaction Picker Style -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Quick Reactions</h3>
        <div
          class="inline-flex gap-1 rounded-full border bg-background p-1 shadow-sm"
        >
          @for (emoji of quickReactions; track emoji) {
            <button
              type="button"
              class="rounded-full p-2 text-xl hover:bg-accent transition-colors"
              (click)="onQuickReaction(emoji)"
            >
              {{ emoji }}
            </button>
          }
        </div>
        @if (lastReaction()) {
          <p class="text-sm text-muted-foreground">
            You reacted with: {{ lastReaction() }}
          </p>
        }
      </section>

      <!-- Message with Reactions -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Message with Reactions</h3>
        <div class="max-w-md rounded-lg border p-4">
          <p class="text-sm">
            This is a sample message that can have emoji reactions.
          </p>
          <div class="mt-2 flex items-center gap-1">
            @for (reaction of messageReactions(); track reaction.emoji) {
              <button
                type="button"
                class="inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-sm hover:bg-accent"
                (click)="incrementReaction(reaction.emoji)"
              >
                <span>{{ reaction.emoji }}</span>
                <span class="text-xs text-muted-foreground">
                  {{ reaction.count }}
                </span>
              </button>
            }
            <button
              type="button"
              class="rounded-full p-1 hover:bg-accent"
              (click)="showReactionPicker.set(!showReactionPicker())"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                class="size-4 text-muted-foreground"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" x2="12" y1="8" y2="16" />
                <line x1="8" x2="16" y1="12" y2="12" />
              </svg>
            </button>
          </div>
          @if (showReactionPicker()) {
            <div class="mt-2">
              <sc-emoji-picker
                [showSearch]="false"
                [showRecent]="false"
                class="w-64"
                [columns]="6"
                (emojiSelect)="addReaction($event)"
              />
            </div>
          }
        </div>
      </section>
    </div>
  \`,
})
export class ScEmojiPickerDemo {
  readonly selectedEmoji = signal<Emoji | null>(null);
  readonly inputValue = signal('');
  readonly showInputPicker = signal(false);
  readonly lastReaction = signal('');
  readonly showReactionPicker = signal(false);
  readonly messageReactions = signal<{ emoji: string; count: number }[]>([
    { emoji: '👍', count: 3 },
    { emoji: '❤️', count: 1 },
  ]);

  readonly quickReactions = ['👍', '❤️', '😂', '😮', '😢', '😡'];

  onEmojiSelect(emoji: Emoji): void {
    this.selectedEmoji.set(emoji);
  }

  onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.inputValue.set(input.value);
  }

  togglePicker(): void {
    this.showInputPicker.set(!this.showInputPicker());
  }

  insertEmoji(emoji: Emoji): void {
    this.inputValue.update((v) => v + emoji.emoji);
    this.showInputPicker.set(false);
  }

  onQuickReaction(emoji: string): void {
    this.lastReaction.set(emoji);
  }

  addReaction(emoji: Emoji): void {
    const reactions = this.messageReactions();
    const existing = reactions.find((r) => r.emoji === emoji.emoji);
    if (existing) {
      this.messageReactions.set(
        reactions.map((r) =>
          r.emoji === emoji.emoji ? { ...r, count: r.count + 1 } : r,
        ),
      );
    } else {
      this.messageReactions.set([
        ...reactions,
        { emoji: emoji.emoji, count: 1 },
      ]);
    }
    this.showReactionPicker.set(false);
  }

  incrementReaction(emoji: string): void {
    this.messageReactions.update((reactions) =>
      reactions.map((r) =>
        r.emoji === emoji ? { ...r, count: r.count + 1 } : r,
      ),
    );
  }
}`;
}
