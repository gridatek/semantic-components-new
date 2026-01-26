import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BasicKanbanBoardDemoContainer } from './demos/basic-kanban-board-demo-container';
import { MinimalKanbanBoardDemoContainer } from './demos/minimal-kanban-board-demo-container';

@Component({
  selector: 'app-kanban-board-page',
  imports: [BasicKanbanBoardDemoContainer, MinimalKanbanBoardDemoContainer],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">KanbanBoard</h1>
        <p class="text-muted-foreground">
          Drag-and-drop task board for project management and workflow
          visualization.
        </p>
      </div>

      <section class="space-y-8">
        <h2 class="text-xl font-semibold tracking-tight">Examples</h2>
        <app-basic-kanban-board-demo-container />
        <app-minimal-kanban-board-demo-container />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class KanbanBoardPage {}
