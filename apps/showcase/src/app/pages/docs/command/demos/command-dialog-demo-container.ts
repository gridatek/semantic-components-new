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
  computed,
  DestroyRef,
  inject,
  signal,
  viewChild,
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

interface CommandItem {
  value: string;
  label: string;
  keywords?: string[];
  shortcut?: string;
}

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
        <div sc-dialog class="w-lg gap-0 p-0">
          <div sc-command class="[&_[data-slot=command-input]]:h-12">
            <div sc-command-input placeholder="Type a command or search..."></div>
            <div sc-command-list>
              @if (
                filteredSuggestions().length === 0 &&
                filteredSettings().length === 0
              ) {
                <div sc-command-empty>No results found.</div>
              }
              @if (filteredSuggestions().length > 0) {
                <div sc-command-group>
                  <span sc-command-group-heading>Suggestions</span>
                  @for (item of filteredSuggestions(); track item.value) {
                    <div
                      sc-command-item
                      [value]="item.value"
                      [label]="item.label"
                      (select)="onSelect(item.label)"
                    >
                      <span>{{ item.label }}</span>
                    </div>
                  }
                </div>
              }
              @if (
                filteredSuggestions().length > 0 &&
                filteredSettings().length > 0
              ) {
                <div sc-command-separator></div>
              }
              @if (filteredSettings().length > 0) {
                <div sc-command-group>
                  <span sc-command-group-heading>Settings</span>
                  @for (item of filteredSettings(); track item.value) {
                    <div
                      sc-command-item
                      [value]="item.value"
                      [label]="item.label"
                      (select)="onSelect(item.label)"
                    >
                      <span>{{ item.label }}</span>
                      @if (item.shortcut) {
                        <span sc-command-shortcut>{{ item.shortcut }}</span>
                      }
                    </div>
                  }
                </div>
              }
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

  private readonly command = viewChild(ScCommand);
  private readonly destroyRef = inject(DestroyRef);

  private readonly suggestions: CommandItem[] = [
    { value: 'calendar', label: 'Calendar' },
    { value: 'search emoji', label: 'Search Emoji' },
    { value: 'calculator', label: 'Calculator' },
  ];

  private readonly settings: CommandItem[] = [
    { value: 'profile', label: 'Profile', keywords: ['account', 'user'], shortcut: '\u2318P' },
    { value: 'billing', label: 'Billing', keywords: ['payment', 'subscription'], shortcut: '\u2318B' },
    { value: 'settings', label: 'Settings', keywords: ['preferences', 'config'], shortcut: '\u2318S' },
  ];

  private filterItems(items: CommandItem[], search: string): CommandItem[] {
    if (!search) return items;
    return items.filter(
      (item) =>
        item.value.includes(search) ||
        item.label.toLowerCase().includes(search) ||
        item.keywords?.some((k) => k.includes(search)),
    );
  }

  readonly filteredSuggestions = computed(() => {
    const search = this.command()?.value().toLowerCase() ?? '';
    return this.filterItems(this.suggestions, search);
  });

  readonly filteredSettings = computed(() => {
    const search = this.command()?.value().toLowerCase() ?? '';
    return this.filterItems(this.settings, search);
  });

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
