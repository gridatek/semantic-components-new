import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { SpeedDialDemo } from './speed-dial-demo';

@Component({
  selector: 'app-speed-dial-demo-container',
  imports: [DemoContainer, SpeedDialDemo],
  template: `
    <app-demo-container title="Speed" [code]="code">
      <app-speed-dial-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpeedDialDemoContainer {
  readonly code = `import {
  ChangeDetectionStrategy,
  Component,
  signal,
  ViewEncapsulation,
} from '@angular/core';
import {
  ScSpeedDial,
  type SpeedDialAction,
  type SpeedDialActionClickEvent,
} from '@semantic-components/ui';

@Component({
  selector: 'app-speed-dial-demo',
  imports: [ScSpeedDial],
  template: \`
    <div class="space-y-8">
      <!-- Basic Demo -->
      <section>
        <h3 class="text-lg font-medium mb-4">Basic Speed Dial</h3>
        <p class="text-sm text-muted-foreground mb-4">
          Click the floating action button to reveal actions.
        </p>
        <div class="relative h-64 border rounded-lg bg-muted/20">
          <div class="absolute bottom-4 right-4">
            <sc-speed-dial
              [actions]="basicActions()"
              (actionClick)="onActionClick($event)"
            />
          </div>
        </div>
        @if (lastAction()) {
          <p class="mt-2 text-sm text-muted-foreground">
            Last action: {{ lastAction() }}
          </p>
        }
      </section>

      <!-- Directions -->
      <section>
        <h3 class="text-lg font-medium mb-4">Direction Options</h3>
        <p class="text-sm text-muted-foreground mb-4">
          Speed dial can expand in different directions.
        </p>
        <div class="grid grid-cols-2 gap-4">
          <!-- Up Direction -->
          <div class="relative h-48 border rounded-lg bg-muted/20">
            <div class="absolute bottom-4 left-1/2 -translate-x-1/2">
              <sc-speed-dial
                [actions]="directionActions()"
                direction="up"
                ariaLabel="Up direction"
              />
            </div>
            <span class="absolute top-2 left-2 text-xs text-muted-foreground">
              Up (default)
            </span>
          </div>

          <!-- Down Direction -->
          <div class="relative h-48 border rounded-lg bg-muted/20">
            <div class="absolute top-4 left-1/2 -translate-x-1/2">
              <sc-speed-dial
                [actions]="directionActions()"
                direction="down"
                ariaLabel="Down direction"
              />
            </div>
            <span class="absolute top-2 left-2 text-xs text-muted-foreground">
              Down
            </span>
          </div>

          <!-- Left Direction -->
          <div class="relative h-48 border rounded-lg bg-muted/20">
            <div class="absolute top-1/2 right-4 -translate-y-1/2">
              <sc-speed-dial
                [actions]="directionActions()"
                direction="left"
                ariaLabel="Left direction"
              />
            </div>
            <span class="absolute top-2 left-2 text-xs text-muted-foreground">
              Left
            </span>
          </div>

          <!-- Right Direction -->
          <div class="relative h-48 border rounded-lg bg-muted/20">
            <div class="absolute top-1/2 left-4 -translate-y-1/2">
              <sc-speed-dial
                [actions]="directionActions()"
                direction="right"
                ariaLabel="Right direction"
              />
            </div>
            <span class="absolute top-2 left-2 text-xs text-muted-foreground">
              Right
            </span>
          </div>
        </div>
      </section>

      <!-- Custom Icons -->
      <section>
        <h3 class="text-lg font-medium mb-4">Custom Icons</h3>
        <p class="text-sm text-muted-foreground mb-4">
          Customize the main FAB and close icons.
        </p>
        <div class="relative h-64 border rounded-lg bg-muted/20">
          <div class="absolute bottom-4 right-4">
            <sc-speed-dial
              [actions]="socialActions()"
              [icon]="shareIcon"
              ariaLabel="Share options"
            />
          </div>
        </div>
      </section>

      <!-- Sizes -->
      <section>
        <h3 class="text-lg font-medium mb-4">Size Variants</h3>
        <p class="text-sm text-muted-foreground mb-4">
          Speed dial comes in different sizes.
        </p>
        <div class="flex items-end gap-8 p-4">
          <div class="text-center">
            <sc-speed-dial
              [actions]="basicActions().slice(0, 3)"
              size="sm"
              actionSize="sm"
              ariaLabel="Small speed dial"
            />
            <p class="mt-2 text-xs text-muted-foreground">Small</p>
          </div>
          <div class="text-center">
            <sc-speed-dial
              [actions]="basicActions().slice(0, 3)"
              size="md"
              actionSize="md"
              ariaLabel="Medium speed dial"
            />
            <p class="mt-2 text-xs text-muted-foreground">Medium</p>
          </div>
          <div class="text-center">
            <sc-speed-dial
              [actions]="basicActions().slice(0, 3)"
              size="lg"
              actionSize="lg"
              ariaLabel="Large speed dial"
            />
            <p class="mt-2 text-xs text-muted-foreground">Large</p>
          </div>
        </div>
      </section>

      <!-- Without Labels -->
      <section>
        <h3 class="text-lg font-medium mb-4">Without Labels</h3>
        <p class="text-sm text-muted-foreground mb-4">
          Hide labels for a cleaner look (labels still appear as tooltips).
        </p>
        <div class="relative h-64 border rounded-lg bg-muted/20">
          <div class="absolute bottom-4 right-4">
            <sc-speed-dial
              [actions]="basicActions()"
              [showLabels]="false"
              ariaLabel="Actions without labels"
            />
          </div>
        </div>
      </section>

      <!-- With Disabled Actions -->
      <section>
        <h3 class="text-lg font-medium mb-4">With Disabled Actions</h3>
        <p class="text-sm text-muted-foreground mb-4">
          Some actions can be disabled.
        </p>
        <div class="relative h-64 border rounded-lg bg-muted/20">
          <div class="absolute bottom-4 right-4">
            <sc-speed-dial
              [actions]="actionsWithDisabled()"
              ariaLabel="Actions with disabled items"
            />
          </div>
        </div>
      </section>
    </div>
  \`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpeedDialDemo {
  readonly lastAction = signal<string | null>(null);

  readonly shareIcon = \`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>\`;

  readonly basicActions = signal<SpeedDialAction[]>([
    {
      id: 'edit',
      icon: \`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>\`,
      label: 'Edit',
    },
    {
      id: 'copy',
      icon: \`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>\`,
      label: 'Copy',
    },
    {
      id: 'share',
      icon: \`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>\`,
      label: 'Share',
    },
    {
      id: 'delete',
      icon: \`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>\`,
      label: 'Delete',
    },
  ]);

  readonly directionActions = signal<SpeedDialAction[]>([
    {
      id: 'home',
      icon: \`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>\`,
      label: 'Home',
    },
    {
      id: 'settings',
      icon: \`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>\`,
      label: 'Settings',
    },
    {
      id: 'help',
      icon: \`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>\`,
      label: 'Help',
    },
  ]);

  readonly socialActions = signal<SpeedDialAction[]>([
    {
      id: 'facebook',
      icon: \`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>\`,
      label: 'Facebook',
    },
    {
      id: 'twitter',
      icon: \`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>\`,
      label: 'Twitter',
    },
    {
      id: 'linkedin',
      icon: \`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>\`,
      label: 'LinkedIn',
    },
    {
      id: 'email',
      icon: \`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>\`,
      label: 'Email',
    },
  ]);

  readonly actionsWithDisabled = signal<SpeedDialAction[]>([
    {
      id: 'save',
      icon: \`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"/><path d="M7 3v4a1 1 0 0 0 1 1h7"/></svg>\`,
      label: 'Save',
    },
    {
      id: 'print',
      icon: \`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"/><rect x="6" y="14" width="12" height="8" rx="1"/></svg>\`,
      label: 'Print',
      disabled: true,
    },
    {
      id: 'download',
      icon: \`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>\`,
      label: 'Download',
    },
    {
      id: 'archive',
      icon: \`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="5" x="2" y="3" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/><path d="M10 12h4"/></svg>\`,
      label: 'Archive',
      disabled: true,
    },
  ]);

  onActionClick(event: SpeedDialActionClickEvent): void {
    this.lastAction.set(\`\${event.action.label} (index: \${event.index})\`);
  }
}`;
}
