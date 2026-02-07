import {
  ChangeDetectionStrategy,
  Component,
  signal,
  ViewEncapsulation,
} from '@angular/core';
import {
  ScOrgChart,
  type OrgChartNode,
  type OrgChartNodeClickEvent,
} from '@semantic-components/ui';

@Component({
  selector: 'app-org-chart-demo',
  imports: [ScOrgChart],
  template: `
    <div class="space-y-8">
      <!-- Basic Demo -->
      <section>
        <h3 class="text-lg font-medium mb-4">Basic Organization Chart</h3>
        <p class="text-sm text-muted-foreground mb-4">
          Click on nodes to expand/collapse their children.
        </p>
        <div class="border rounded-lg overflow-auto">
          <sc-org-chart
            [data]="basicOrgData()"
            (nodeClick)="onNodeClick($event)"
          />
        </div>
        @if (selectedNode()) {
          <p class="mt-2 text-sm text-muted-foreground">
            Selected: {{ selectedNode()?.name }} - {{ selectedNode()?.title }}
          </p>
        }
      </section>

      <!-- Horizontal Layout -->
      <section>
        <h3 class="text-lg font-medium mb-4">Horizontal Layout</h3>
        <p class="text-sm text-muted-foreground mb-4">
          Organization chart with horizontal orientation.
        </p>
        <div class="border rounded-lg overflow-auto">
          <sc-org-chart [data]="basicOrgData()" direction="horizontal" />
        </div>
      </section>

      <!-- With Avatars -->
      <section>
        <h3 class="text-lg font-medium mb-4">With Avatars</h3>
        <p class="text-sm text-muted-foreground mb-4">
          Organization chart with profile images.
        </p>
        <div class="border rounded-lg overflow-auto">
          <sc-org-chart [data]="orgWithAvatars()" />
        </div>
      </section>

      <!-- Compact Mode -->
      <section>
        <h3 class="text-lg font-medium mb-4">Compact Mode</h3>
        <p class="text-sm text-muted-foreground mb-4">
          Smaller node cards for dense hierarchies.
        </p>
        <div class="border rounded-lg overflow-auto">
          <sc-org-chart [data]="basicOrgData()" [compact]="true" />
        </div>
      </section>

      <!-- Non-collapsible -->
      <section>
        <h3 class="text-lg font-medium mb-4">Non-collapsible</h3>
        <p class="text-sm text-muted-foreground mb-4">
          All nodes are always expanded.
        </p>
        <div class="border rounded-lg overflow-auto">
          <sc-org-chart [data]="smallOrgData()" [collapsible]="false" />
        </div>
      </section>

      <!-- Large Organization -->
      <section>
        <h3 class="text-lg font-medium mb-4">Large Organization</h3>
        <p class="text-sm text-muted-foreground mb-4">
          A more complex organizational structure.
        </p>
        <div class="border rounded-lg overflow-auto max-h-[500px]">
          <sc-org-chart [data]="largeOrgData()" />
        </div>
      </section>
    </div>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrgChartDemo {
  readonly selectedNode = signal<OrgChartNode | null>(null);

  readonly basicOrgData = signal<OrgChartNode>({
    id: '1',
    name: 'Sarah Johnson',
    title: 'CEO',
    department: 'Executive',
    children: [
      {
        id: '2',
        name: 'Michael Chen',
        title: 'CTO',
        department: 'Technology',
        children: [
          {
            id: '5',
            name: 'Emily Davis',
            title: 'Engineering Manager',
            department: 'Engineering',
            children: [
              {
                id: '9',
                name: 'Alex Kim',
                title: 'Senior Developer',
                department: 'Engineering',
              },
              {
                id: '10',
                name: 'Lisa Wang',
                title: 'Developer',
                department: 'Engineering',
              },
            ],
          },
          {
            id: '6',
            name: 'James Wilson',
            title: 'DevOps Lead',
            department: 'Infrastructure',
          },
        ],
      },
      {
        id: '3',
        name: 'Amanda Rodriguez',
        title: 'CFO',
        department: 'Finance',
        children: [
          {
            id: '7',
            name: 'David Brown',
            title: 'Finance Manager',
            department: 'Finance',
          },
        ],
      },
      {
        id: '4',
        name: 'Robert Taylor',
        title: 'CMO',
        department: 'Marketing',
        children: [
          {
            id: '8',
            name: 'Jennifer Lee',
            title: 'Marketing Lead',
            department: 'Marketing',
          },
        ],
      },
    ],
  });

  readonly smallOrgData = signal<OrgChartNode>({
    id: '1',
    name: 'John Smith',
    title: 'Team Lead',
    children: [
      { id: '2', name: 'Alice Brown', title: 'Developer' },
      { id: '3', name: 'Bob Wilson', title: 'Designer' },
      { id: '4', name: 'Carol Davis', title: 'QA Engineer' },
    ],
  });

  readonly orgWithAvatars = signal<OrgChartNode>({
    id: '1',
    name: 'Sarah Johnson',
    title: 'CEO',
    avatar: 'https://i.pravatar.cc/150?u=sarah',
    children: [
      {
        id: '2',
        name: 'Michael Chen',
        title: 'CTO',
        avatar: 'https://i.pravatar.cc/150?u=michael',
        children: [
          {
            id: '5',
            name: 'Emily Davis',
            title: 'Engineering Manager',
            avatar: 'https://i.pravatar.cc/150?u=emily',
          },
          {
            id: '6',
            name: 'James Wilson',
            title: 'DevOps Lead',
            avatar: 'https://i.pravatar.cc/150?u=james',
          },
        ],
      },
      {
        id: '3',
        name: 'Amanda Rodriguez',
        title: 'CFO',
        avatar: 'https://i.pravatar.cc/150?u=amanda',
      },
      {
        id: '4',
        name: 'Robert Taylor',
        title: 'CMO',
        avatar: 'https://i.pravatar.cc/150?u=robert',
      },
    ],
  });

  readonly largeOrgData = signal<OrgChartNode>({
    id: '1',
    name: 'Patricia Moore',
    title: 'CEO',
    department: 'Executive Office',
    children: [
      {
        id: '2',
        name: 'Thomas Anderson',
        title: 'COO',
        department: 'Operations',
        children: [
          {
            id: '8',
            name: 'Nancy White',
            title: 'Operations Director',
            department: 'Operations',
            children: [
              {
                id: '15',
                name: 'Mark Johnson',
                title: 'Operations Manager',
                department: 'Operations',
              },
              {
                id: '16',
                name: 'Susan Clark',
                title: 'Process Analyst',
                department: 'Operations',
              },
            ],
          },
          {
            id: '9',
            name: 'Kevin Hall',
            title: 'Logistics Director',
            department: 'Logistics',
          },
        ],
      },
      {
        id: '3',
        name: 'Jennifer Martinez',
        title: 'CTO',
        department: 'Technology',
        children: [
          {
            id: '10',
            name: 'Brian Lee',
            title: 'VP Engineering',
            department: 'Engineering',
            children: [
              {
                id: '17',
                name: 'Chris Evans',
                title: 'Tech Lead',
                department: 'Engineering',
              },
              {
                id: '18',
                name: 'Diana Prince',
                title: 'Tech Lead',
                department: 'Engineering',
              },
              {
                id: '19',
                name: 'Bruce Wayne',
                title: 'Architect',
                department: 'Engineering',
              },
            ],
          },
          {
            id: '11',
            name: 'Rachel Green',
            title: 'VP Product',
            department: 'Product',
            children: [
              {
                id: '20',
                name: 'Monica Geller',
                title: 'Product Manager',
                department: 'Product',
              },
            ],
          },
        ],
      },
      {
        id: '4',
        name: 'William Brown',
        title: 'CFO',
        department: 'Finance',
        expanded: false,
        children: [
          {
            id: '12',
            name: 'Laura Palmer',
            title: 'Finance Director',
            department: 'Finance',
          },
          {
            id: '13',
            name: 'Dale Cooper',
            title: 'Controller',
            department: 'Finance',
          },
        ],
      },
      {
        id: '5',
        name: 'Elizabeth Taylor',
        title: 'CHRO',
        department: 'Human Resources',
        children: [
          {
            id: '14',
            name: 'Harry Potter',
            title: 'HR Director',
            department: 'Human Resources',
          },
        ],
      },
      {
        id: '6',
        name: 'Richard Garcia',
        title: 'CMO',
        department: 'Marketing',
      },
      {
        id: '7',
        name: 'Sandra Wilson',
        title: 'CLO',
        department: 'Legal',
      },
    ],
  });

  onNodeClick(event: OrgChartNodeClickEvent): void {
    this.selectedNode.set(event.node);
  }
}
