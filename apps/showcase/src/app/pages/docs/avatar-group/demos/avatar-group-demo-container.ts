import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { AvatarGroupDemo } from './avatar-group-demo';

@Component({
  selector: 'app-avatar-group-demo-container',
  imports: [DemoContainer, AvatarGroupDemo],
  template: `
    <app-demo-container title="Avatar" [code]="code">
      <app-avatar-group-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarGroupDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScAvatarGroup, type AvatarGroupItem } from '@semantic-components/ui';

@Component({
  selector: 'app-avatar-group-demo',
  imports: [ScAvatarGroup],
  template: \`
    <div class="space-y-8">
      <!-- Basic Demo -->
      <section>
        <h3 class="text-lg font-medium mb-4">Basic Avatar Group</h3>
        <p class="text-sm text-muted-foreground mb-4">
          Stacked avatars with overflow indicator.
        </p>
        <sc-avatar-group
          [avatars]="users()"
          [max]="4"
          (avatarClick)="onAvatarClick($event)"
          (overflowClick)="onOverflowClick($event)"
        />
        @if (clickedUser()) {
          <p class="mt-2 text-sm text-muted-foreground">
            Clicked: {{ clickedUser() }}
          </p>
        }
      </section>

      <!-- Size Variants -->
      <section>
        <h3 class="text-lg font-medium mb-4">Size Variants</h3>
        <p class="text-sm text-muted-foreground mb-4">
          Different sizes for various contexts.
        </p>
        <div class="flex flex-col gap-4">
          <div class="flex items-center gap-4">
            <span class="text-sm w-12">Small:</span>
            <sc-avatar-group [avatars]="users()" [max]="4" size="sm" />
          </div>
          <div class="flex items-center gap-4">
            <span class="text-sm w-12">Medium:</span>
            <sc-avatar-group [avatars]="users()" [max]="4" size="md" />
          </div>
          <div class="flex items-center gap-4">
            <span class="text-sm w-12">Large:</span>
            <sc-avatar-group [avatars]="users()" [max]="4" size="lg" />
          </div>
          <div class="flex items-center gap-4">
            <span class="text-sm w-12">XL:</span>
            <sc-avatar-group [avatars]="users()" [max]="4" size="xl" />
          </div>
        </div>
      </section>

      <!-- Spacing Options -->
      <section>
        <h3 class="text-lg font-medium mb-4">Spacing Options</h3>
        <p class="text-sm text-muted-foreground mb-4">
          Control the overlap amount between avatars.
        </p>
        <div class="flex flex-col gap-4">
          <div class="flex items-center gap-4">
            <span class="text-sm w-16">Tight:</span>
            <sc-avatar-group [avatars]="users()" [max]="5" spacing="tight" />
          </div>
          <div class="flex items-center gap-4">
            <span class="text-sm w-16">Normal:</span>
            <sc-avatar-group [avatars]="users()" [max]="5" spacing="normal" />
          </div>
          <div class="flex items-center gap-4">
            <span class="text-sm w-16">Loose:</span>
            <sc-avatar-group [avatars]="users()" [max]="5" spacing="loose" />
          </div>
        </div>
      </section>

      <!-- Max Display -->
      <section>
        <h3 class="text-lg font-medium mb-4">Max Display Count</h3>
        <p class="text-sm text-muted-foreground mb-4">
          Control how many avatars are visible before showing overflow.
        </p>
        <div class="flex flex-col gap-4">
          <div class="flex items-center gap-4">
            <span class="text-sm w-20">Max 2:</span>
            <sc-avatar-group [avatars]="users()" [max]="2" />
          </div>
          <div class="flex items-center gap-4">
            <span class="text-sm w-20">Max 4:</span>
            <sc-avatar-group [avatars]="users()" [max]="4" />
          </div>
          <div class="flex items-center gap-4">
            <span class="text-sm w-20">Max 6:</span>
            <sc-avatar-group [avatars]="users()" [max]="6" />
          </div>
          <div class="flex items-center gap-4">
            <span class="text-sm w-20">Show all:</span>
            <sc-avatar-group [avatars]="users()" [max]="100" />
          </div>
        </div>
      </section>

      <!-- With Fallbacks -->
      <section>
        <h3 class="text-lg font-medium mb-4">With Fallback Initials</h3>
        <p class="text-sm text-muted-foreground mb-4">
          Avatars without images show initials.
        </p>
        <sc-avatar-group [avatars]="usersWithFallbacks()" [max]="6" />
      </section>

      <!-- Team Example -->
      <section>
        <h3 class="text-lg font-medium mb-4">Team Members Example</h3>
        <p class="text-sm text-muted-foreground mb-4">
          Common use case for showing team members.
        </p>
        <div class="flex items-center gap-3 p-4 border rounded-lg">
          <sc-avatar-group [avatars]="teamMembers()" [max]="3" size="sm" />
          <span class="text-sm text-muted-foreground">
            Working on this project
          </span>
        </div>
      </section>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarGroupDemo {
  readonly clickedUser = signal<string | null>(null);

  readonly users = signal<AvatarGroupItem[]>([
    {
      id: '1',
      src: 'https://i.pravatar.cc/150?u=user1',
      name: 'Alice Johnson',
    },
    { id: '2', src: 'https://i.pravatar.cc/150?u=user2', name: 'Bob Smith' },
    { id: '3', src: 'https://i.pravatar.cc/150?u=user3', name: 'Carol White' },
    { id: '4', src: 'https://i.pravatar.cc/150?u=user4', name: 'David Brown' },
    { id: '5', src: 'https://i.pravatar.cc/150?u=user5', name: 'Eve Davis' },
    { id: '6', src: 'https://i.pravatar.cc/150?u=user6', name: 'Frank Miller' },
    { id: '7', src: 'https://i.pravatar.cc/150?u=user7', name: 'Grace Wilson' },
  ]);

  readonly usersWithFallbacks = signal<AvatarGroupItem[]>([
    { id: '1', src: 'https://i.pravatar.cc/150?u=team1', name: 'John Doe' },
    { id: '2', name: 'Jane Smith', fallback: 'JS' },
    { id: '3', src: 'https://i.pravatar.cc/150?u=team3', name: 'Mike Johnson' },
    { id: '4', name: 'Sarah Williams' },
    { id: '5', name: 'Tom Brown', fallback: 'TB' },
    { id: '6', src: 'https://i.pravatar.cc/150?u=team6', name: 'Emily Davis' },
  ]);

  readonly teamMembers = signal<AvatarGroupItem[]>([
    { id: '1', src: 'https://i.pravatar.cc/150?u=dev1', name: 'Alex Chen' },
    { id: '2', src: 'https://i.pravatar.cc/150?u=dev2', name: 'Sam Taylor' },
    { id: '3', src: 'https://i.pravatar.cc/150?u=dev3', name: 'Jordan Lee' },
    { id: '4', src: 'https://i.pravatar.cc/150?u=dev4', name: 'Casey Morgan' },
    { id: '5', src: 'https://i.pravatar.cc/150?u=dev5', name: 'Riley Parker' },
  ]);

  onAvatarClick(event: { avatar: AvatarGroupItem; index: number }): void {
    this.clickedUser.set(event.avatar.name || \`Avatar \${event.index + 1}\`);
  }

  onOverflowClick(avatars: AvatarGroupItem[]): void {
    this.clickedUser.set(\`+\${avatars.length} more users\`);
  }
}`;
}
