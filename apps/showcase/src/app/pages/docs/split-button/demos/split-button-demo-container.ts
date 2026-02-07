import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { SplitButtonDemo } from './split-button-demo';

@Component({
  selector: 'app-split-button-demo-container',
  imports: [DemoContainer, SplitButtonDemo],
  template: `
    <app-demo-container title="Split" [code]="code">
      <app-split-button-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SplitButtonDemoContainer {
  readonly code = `import {
  ChangeDetectionStrategy,
  Component,
  signal,
  ViewEncapsulation,
} from '@angular/core';
import { ScSplitButton, type SplitButtonAction } from '@semantic-components/ui';

@Component({
  selector: 'app-split-button-demo',
  imports: [ScSplitButton],
  template: \`
    <div class="space-y-8">
      <!-- Basic Demo -->
      <section>
        <h3 class="text-lg font-medium mb-4">Basic Split Button</h3>
        <p class="text-sm text-muted-foreground mb-4">
          A button with a main action and dropdown for more actions.
        </p>
        <sc-split-button
          label="Save"
          [actions]="saveActions()"
          (mainClick)="onSave()"
          (actionClick)="onAction($event)"
        />
        @if (lastAction()) {
          <p class="mt-2 text-sm text-muted-foreground">
            Action: {{ lastAction() }}
          </p>
        }
      </section>

      <!-- Variants -->
      <section>
        <h3 class="text-lg font-medium mb-4">Variants</h3>
        <p class="text-sm text-muted-foreground mb-4">
          Different visual styles for various contexts.
        </p>
        <div class="flex flex-wrap gap-4">
          <sc-split-button
            label="Default"
            variant="default"
            [actions]="basicActions()"
          />
          <sc-split-button
            label="Secondary"
            variant="secondary"
            [actions]="basicActions()"
          />
          <sc-split-button
            label="Outline"
            variant="outline"
            [actions]="basicActions()"
          />
          <sc-split-button
            label="Destructive"
            variant="destructive"
            [actions]="basicActions()"
          />
        </div>
      </section>

      <!-- Sizes -->
      <section>
        <h3 class="text-lg font-medium mb-4">Sizes</h3>
        <p class="text-sm text-muted-foreground mb-4">
          Different sizes for various use cases.
        </p>
        <div class="flex flex-wrap items-center gap-4">
          <sc-split-button label="Small" size="sm" [actions]="basicActions()" />
          <sc-split-button
            label="Medium"
            size="md"
            [actions]="basicActions()"
          />
          <sc-split-button label="Large" size="lg" [actions]="basicActions()" />
        </div>
      </section>

      <!-- With Icons -->
      <section>
        <h3 class="text-lg font-medium mb-4">With Icons</h3>
        <p class="text-sm text-muted-foreground mb-4">
          Add icons to the main button and dropdown actions.
        </p>
        <sc-split-button
          label="Download"
          [icon]="downloadIcon"
          [actions]="downloadActions()"
        />
      </section>

      <!-- With Destructive Actions -->
      <section>
        <h3 class="text-lg font-medium mb-4">With Destructive Actions</h3>
        <p class="text-sm text-muted-foreground mb-4">
          Highlight dangerous actions in the dropdown.
        </p>
        <sc-split-button label="Manage" [actions]="manageActions()" />
      </section>

      <!-- Disabled -->
      <section>
        <h3 class="text-lg font-medium mb-4">Disabled State</h3>
        <p class="text-sm text-muted-foreground mb-4">Disabled split button.</p>
        <sc-split-button
          label="Disabled"
          [actions]="basicActions()"
          [disabled]="true"
        />
      </section>

      <!-- Real World Example -->
      <section>
        <h3 class="text-lg font-medium mb-4">Email Compose Example</h3>
        <p class="text-sm text-muted-foreground mb-4">
          Common pattern in email applications.
        </p>
        <div class="p-4 border rounded-lg bg-card">
          <div class="flex justify-end">
            <sc-split-button
              label="Send"
              [icon]="sendIcon"
              [actions]="sendActions()"
              (mainClick)="onSend()"
            />
          </div>
        </div>
      </section>
    </div>
  \`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SplitButtonDemo {
  readonly lastAction = signal<string | null>(null);

  readonly downloadIcon = \`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>\`;

  readonly sendIcon = \`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>\`;

  readonly basicActions = signal<SplitButtonAction[]>([
    { id: 'option1', label: 'Option 1' },
    { id: 'option2', label: 'Option 2' },
    { id: 'option3', label: 'Option 3' },
  ]);

  readonly saveActions = signal<SplitButtonAction[]>([
    { id: 'save-draft', label: 'Save as Draft' },
    { id: 'save-template', label: 'Save as Template' },
    { id: 'save-copy', label: 'Save a Copy' },
  ]);

  readonly downloadActions = signal<SplitButtonAction[]>([
    {
      id: 'pdf',
      label: 'Download as PDF',
      icon: \`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>\`,
    },
    {
      id: 'csv',
      label: 'Download as CSV',
      icon: \`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>\`,
    },
    {
      id: 'xlsx',
      label: 'Download as Excel',
      icon: \`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>\`,
    },
  ]);

  readonly manageActions = signal<SplitButtonAction[]>([
    { id: 'edit', label: 'Edit' },
    { id: 'duplicate', label: 'Duplicate' },
    { id: 'archive', label: 'Archive' },
    { id: 'delete', label: 'Delete', destructive: true },
  ]);

  readonly sendActions = signal<SplitButtonAction[]>([
    { id: 'schedule', label: 'Schedule Send' },
    { id: 'send-later', label: 'Send Later' },
    { id: 'save-draft', label: 'Save Draft' },
  ]);

  onSave(): void {
    this.lastAction.set('Save clicked');
  }

  onSend(): void {
    this.lastAction.set('Send clicked');
  }

  onAction(action: SplitButtonAction): void {
    this.lastAction.set(\`Action: \${action.label}\`);
  }
}`;
}
