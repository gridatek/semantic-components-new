import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScCommandDemo } from './command-demo';

@Component({
  selector: 'app-command-demo-container',
  imports: [DemoContainer, ScCommandDemo],
  template: `
    <app-demo-container
      title="Command"
      [code]="code"
      demoUrl="/demos/command/command-demo"
    >
      <app-command-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScCommandDemoContainer {
  readonly code = `import {
  ChangeDetectionStrategy,
  Component,
  computed,
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
} from '@semantic-components/ui';

interface CommandItem {
  value: string;
  label: string;
  keywords?: string[];
  shortcut?: string;
}

@Component({
  selector: 'app-command-demo',
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
  ],
  template: \`
    <div class="w-full max-w-md">
      <div sc-command class="rounded-lg border shadow-md">
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
            filteredSuggestions().length > 0 && filteredSettings().length > 0
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
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScCommandDemo {
  private readonly command = viewChild.required(ScCommand);

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
    const search = this.command().value().toLowerCase();
    return this.filterItems(this.suggestions, search);
  });

  readonly filteredSettings = computed(() => {
    const search = this.command().value().toLowerCase();
    return this.filterItems(this.settings, search);
  });

  onSelect(item: string): void {
    console.log('Selected:', item);
  }
}`;
}
