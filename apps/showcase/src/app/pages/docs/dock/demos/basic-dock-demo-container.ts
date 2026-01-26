import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { BasicDockDemo } from './basic-dock-demo';

@Component({
  selector: 'app-basic-dock-demo-container',
  imports: [DemoContainer, BasicDockDemo],
  template: `
    <app-demo-container title="Basic" [code]="code">
      <app-basic-dock-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicDockDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScDock } from '@semantic-components/ui';
import type { DockItem } from '@semantic-components/ui';

@Component({
  selector: 'app-basic-dock-demo',
  imports: [ScDock],
  template: \`
    <div class="flex justify-center rounded-lg border bg-muted/30 p-8">
      <sc-dock [items]="items" (itemClick)="onItemClick($event)" />
    </div>
    @if (clickedItem()) {
      <p class="mt-2 text-sm text-muted-foreground">
        Clicked: <span class="font-medium">{{ clickedItem() }}</span>
      </p>
    }
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicDockDemo {
  readonly clickedItem = signal<string | null>(null);

  readonly items: DockItem[] = [
    { id: 'finder', label: 'Finder', icon: '...' },
    { id: 'safari', label: 'Safari', icon: '...' },
    { id: 'mail', label: 'Mail', icon: '...' },
    { id: 'photos', label: 'Photos', icon: '...' },
    { id: 'music', label: 'Music', icon: '...' },
    { id: 'settings', label: 'Settings', icon: '...' },
  ];

  onItemClick(item: DockItem): void {
    this.clickedItem.set(item.label);
  }
}`;
}
