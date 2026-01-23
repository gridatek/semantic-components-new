import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { KanbanBoardDemoComponent } from './kanban-board-demo';

@Component({
  selector: 'app-kanban-board-demo-container',
  imports: [DemoContainer, KanbanBoardDemoComponent],
  template: `
    <app-demo-container title="KanbanBoard" [code]="code">
      <app-kanban-board-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class KanbanBoardDemoContainer {
  readonly code = '';
}
