import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScTagInputDemo } from './tag-input-demo';

@Component({
  selector: 'app-tag-input-demo-container',
  imports: [DemoContainer, ScTagInputDemo],
  template: `
    <app-demo-container title="Tag" [code]="code">
      <app-tag-input-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScTagInputDemoContainer {
  readonly code = `import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScTagInput,
  ScTagInputClear,
  ScTagInputCount,
  ScTagInputField,
  ScTagInputTag,
} from '@semantic-components/ui';

@Component({
  selector: 'app-tag-input-demo',
  imports: [
    JsonPipe,
    ScTagInput,
    ScTagInputField,
    ScTagInputTag,
    ScTagInputClear,
    ScTagInputCount,
  ],
  template: \`
    <div class="space-y-8">
      <!-- Basic -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Basic Tag Input</h3>
        <div class="max-w-md space-y-2">
          <div sc-tag-input [(tags)]="basicTags">
            @for (tag of basicTags(); track tag) {
              <span sc-tag-input-tag [tag]="tag"></span>
            }
            <input sc-tag-input-field />
          </div>
          <p class="text-sm text-muted-foreground">
            Press Enter or comma to add a tag. Backspace removes the last tag.
          </p>
        </div>
      </div>

      <!-- With Clear Button -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">With Clear All Button</h3>
        <div class="max-w-md">
          <div sc-tag-input [(tags)]="clearableTags">
            @for (tag of clearableTags(); track tag) {
              <span sc-tag-input-tag [tag]="tag"></span>
            }
            <input sc-tag-input-field />
            <button sc-tag-input-clear></button>
          </div>
        </div>
      </div>

      <!-- With Max Tags -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">With Max Tags (5)</h3>
        <div class="max-w-md space-y-2">
          <div sc-tag-input [(tags)]="maxTags" [maxTags]="5">
            @for (tag of maxTags(); track tag) {
              <span sc-tag-input-tag [tag]="tag"></span>
            }
            <input sc-tag-input-field />
          </div>
          <div class="flex justify-end">
            <span sc-tag-input-count></span>
          </div>
        </div>
      </div>

      <!-- Different Variants -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Tag Variants</h3>
        <div class="space-y-3 max-w-md">
          <div class="space-y-1">
            <label class="text-xs text-muted-foreground">Default</label>
            <div sc-tag-input [(tags)]="variantDefault">
              @for (tag of variantDefault(); track tag) {
                <span sc-tag-input-tag [tag]="tag" variant="default"></span>
              }
              <input sc-tag-input-field />
            </div>
          </div>
          <div class="space-y-1">
            <label class="text-xs text-muted-foreground">Secondary</label>
            <div sc-tag-input [(tags)]="variantSecondary">
              @for (tag of variantSecondary(); track tag) {
                <span sc-tag-input-tag [tag]="tag" variant="secondary"></span>
              }
              <input sc-tag-input-field />
            </div>
          </div>
          <div class="space-y-1">
            <label class="text-xs text-muted-foreground">Outline</label>
            <div sc-tag-input [(tags)]="variantOutline">
              @for (tag of variantOutline(); track tag) {
                <span sc-tag-input-tag [tag]="tag" variant="outline"></span>
              }
              <input sc-tag-input-field />
            </div>
          </div>
        </div>
      </div>

      <!-- Allow Duplicates -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Allow Duplicates</h3>
        <div class="max-w-md space-y-2">
          <div sc-tag-input [(tags)]="duplicateTags" [allowDuplicates]="true">
            @for (tag of duplicateTags(); track $index) {
              <span sc-tag-input-tag [tag]="tag" variant="secondary"></span>
            }
            <input sc-tag-input-field />
          </div>
          <p class="text-sm text-muted-foreground">
            Try adding the same tag twice.
          </p>
        </div>
      </div>

      <!-- Custom Delimiters -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Custom Delimiters (Space, Tab)</h3>
        <div class="max-w-md space-y-2">
          <div
            sc-tag-input
            [(tags)]="delimiterTags"
            [delimiters]="['Enter', ' ', 'Tab']"
          >
            @for (tag of delimiterTags(); track tag) {
              <span sc-tag-input-tag [tag]="tag"></span>
            }
            <input sc-tag-input-field />
          </div>
          <p class="text-sm text-muted-foreground">
            Press Space or Tab to add tags.
          </p>
        </div>
      </div>

      <!-- Add on Blur -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Add on Blur</h3>
        <div class="max-w-md space-y-2">
          <div sc-tag-input [(tags)]="blurTags">
            @for (tag of blurTags(); track tag) {
              <span sc-tag-input-tag [tag]="tag"></span>
            }
            <input sc-tag-input-field [addOnBlur]="true" />
          </div>
          <p class="text-sm text-muted-foreground">
            Click outside to add the current input.
          </p>
        </div>
      </div>

      <!-- Disabled -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Disabled</h3>
        <div class="max-w-md">
          <div
            sc-tag-input
            [tags]="['Angular', 'React', 'Vue']"
            [disabled]="true"
          >
            @for (tag of ['Angular', 'React', 'Vue']; track tag) {
              <span sc-tag-input-tag [tag]="tag"></span>
            }
            <input sc-tag-input-field />
          </div>
        </div>
      </div>

      <!-- Validation -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">
          With Validation (Min: 2, Max: 15 chars)
        </h3>
        <div class="max-w-md space-y-2">
          <div
            sc-tag-input
            [(tags)]="validatedTags"
            [minLength]="2"
            [maxLength]="15"
          >
            @for (tag of validatedTags(); track tag) {
              <span sc-tag-input-tag [tag]="tag"></span>
            }
            <input sc-tag-input-field />
          </div>
          <p class="text-sm text-muted-foreground">
            Tags must be 2-15 characters long.
          </p>
        </div>
      </div>

      <!-- Form Field Example -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Form Field Example</h3>
        <div class="max-w-md space-y-4">
          <div class="space-y-2">
            <label class="text-sm font-medium">Skills</label>
            <div
              sc-tag-input
              [(tags)]="skillTags"
              [maxTags]="10"
              placeholder="Add a skill..."
            >
              @for (tag of skillTags(); track tag) {
                <span sc-tag-input-tag [tag]="tag" variant="secondary"></span>
              }
              <input sc-tag-input-field />
            </div>
            <div class="flex items-center justify-between">
              <p class="text-xs text-muted-foreground">Add up to 10 skills</p>
              <span sc-tag-input-count class="text-xs"></span>
            </div>
          </div>

          <div class="space-y-2">
            <label class="text-sm font-medium">Categories</label>
            <div
              sc-tag-input
              [(tags)]="categoryTags"
              [maxTags]="3"
              placeholder="Select categories..."
            >
              @for (tag of categoryTags(); track tag) {
                <span sc-tag-input-tag [tag]="tag"></span>
              }
              <input sc-tag-input-field />
              <button sc-tag-input-clear></button>
            </div>
          </div>
        </div>
      </div>

      <!-- Email Tags Example -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Email Recipients</h3>
        <div class="max-w-lg space-y-2">
          <label class="text-sm font-medium">To:</label>
          <div sc-tag-input [(tags)]="emailTags" placeholder="Add recipient...">
            @for (tag of emailTags(); track tag) {
              <span
                sc-tag-input-tag
                [tag]="tag"
                variant="outline"
                class="rounded-full"
              ></span>
            }
            <input sc-tag-input-field [addOnBlur]="true" />
          </div>
        </div>
      </div>

      <!-- Current Tags Display -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Current Tags (Basic)</h3>
        <div class="rounded-md border p-4 bg-muted/50 max-w-md">
          <pre class="text-sm">{{ basicTags() | json }}</pre>
        </div>
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScTagInputDemo {
  readonly basicTags = signal<string[]>(['Angular', 'TypeScript']);
  readonly clearableTags = signal<string[]>(['React', 'Vue', 'Svelte']);
  readonly maxTags = signal<string[]>(['One', 'Two', 'Three']);
  readonly variantDefault = signal<string[]>(['Primary', 'Tags']);
  readonly variantSecondary = signal<string[]>(['Secondary', 'Style']);
  readonly variantOutline = signal<string[]>(['Outline', 'Variant']);
  readonly duplicateTags = signal<string[]>(['hello']);
  readonly delimiterTags = signal<string[]>(['space', 'separated']);
  readonly blurTags = signal<string[]>(['blur', 'to', 'add']);
  readonly validatedTags = signal<string[]>(['valid']);
  readonly skillTags = signal<string[]>(['JavaScript', 'CSS', 'HTML']);
  readonly categoryTags = signal<string[]>(['Technology']);
  readonly emailTags = signal<string[]>([
    'alice@example.com',
    'bob@example.com',
  ]);
}`;
}
