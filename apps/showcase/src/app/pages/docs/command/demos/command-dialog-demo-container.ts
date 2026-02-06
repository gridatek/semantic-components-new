import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScCommandDialogDemo } from './command-dialog-demo';

@Component({
  selector: 'app-command-dialog-demo-container',
  imports: [DemoContainer, ScCommandDialogDemo],
  template: `
    <app-demo-container
      title="Command Dialog"
      [code]="code"
      demoUrl="/demos/command/command-dialog-demo"
    >
      <app-command-dialog-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScCommandDialogDemoContainer {
  readonly code = `import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  signal,
} from '@angular/core';
import {
  ScCommand,
  ScCommandEmpty,
  ScCommandGroup,
  ScCommandGroupHeading,
  ScCommandInput,
  ScCommandItem,
  ScCommandList,
  ScCommandSeparator,
  ScCommandShortcut,
  ScDialogProvider,
  ScDialogPortal,
  ScDialog,
} from '@semantic-components/ui';

@Component({
  selector: 'app-command-dialog-demo',
  imports: [
    ScCommand,
    ScCommandEmpty,
    ScCommandGroup,
    ScCommandGroupHeading,
    ScCommandInput,
    ScCommandItem,
    ScCommandList,
    ScCommandSeparator,
    ScCommandShortcut,
    ScDialogProvider,
    ScDialogPortal,
    ScDialog,
  ],
  template: \`
    <p class="text-muted-foreground text-sm">
      Press
      <kbd
        class="bg-muted text-muted-foreground pointer-events-none inline-flex h-5 items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100"
      >
        <span class="text-xs">\u2318</span>J
      </kbd>
    </p>

    <div sc-dialog-provider [(open)]="open">
      <div sc-dialog-portal>
        <div sc-dialog class="gap-0 p-0">
          <div sc-command class="[&_[data-slot=command-input]]:h-12">
            <div sc-command-input placeholder="Type a command or search..."></div>
            <div sc-command-list>
              <div sc-command-empty>No results found.</div>
              <div sc-command-group>
                <span sc-command-group-heading>Suggestions</span>
                <div sc-command-item value="calendar" (select)="onSelect('Calendar')">
                  Calendar
                </div>
                <div sc-command-item value="calculator" (select)="onSelect('Calculator')">
                  Calculator
                </div>
              </div>
              <div sc-command-separator></div>
              <div sc-command-group>
                <span sc-command-group-heading>Settings</span>
                <div sc-command-item value="profile" (select)="onSelect('Profile')">
                  Profile
                  <span sc-command-shortcut>\u2318P</span>
                </div>
                <div sc-command-item value="settings" (select)="onSelect('Settings')">
                  Settings
                  <span sc-command-shortcut>\u2318S</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScCommandDialogDemo {
  readonly open = signal(false);

  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'j' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        this.open.update((v) => !v);
      }
    };

    document.addEventListener('keydown', handler);
    this.destroyRef.onDestroy(() =>
      document.removeEventListener('keydown', handler),
    );
  }

  onSelect(item: string): void {
    console.log('Selected:', item);
    this.open.set(false);
  }
}`;
}
