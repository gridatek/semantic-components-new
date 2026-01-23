import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScMentionInputDemo } from './mention-input-demo';

@Component({
  selector: 'app-mention-input-demo-container',
  imports: [DemoContainer, ScMentionInputDemo],
  template: `
    <app-demo-container title="Mention" [code]="code">
      <sc-mention-input-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScMentionInputDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScMentionInput, MentionUser } from '@semantic-components/ui';

@Component({
  selector: 'sc-mention-input-demo',
  imports: [ScMentionInput],
  template: \`
    <div class="space-y-8">
      <!-- Basic Mention Input -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Basic Mention Input</h3>
        <p class="text-sm text-muted-foreground">
          Type &#64; to trigger the mention dropdown. Select a user to insert a
          mention.
        </p>
        <div class="max-w-lg">
          <sc-mention-input
            [(value)]="basicValue"
            [(mentions)]="basicMentions"
            [users]="sampleUsers"
            placeholder="Type @ to mention someone..."
            (mentionSelect)="onMentionSelect($event)"
          />
        </div>
        <div class="text-sm text-muted-foreground space-y-1">
          <p>Value: {{ basicValue() || 'Empty' }}</p>
          <p>Mentions: {{ basicMentions().length }} user(s)</p>
        </div>
      </section>

      <!-- With Avatars -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Users with Avatars</h3>
        <p class="text-sm text-muted-foreground">
          Mention users that have avatar images.
        </p>
        <div class="max-w-lg">
          <sc-mention-input
            [users]="usersWithAvatars"
            placeholder="Mention team members..."
            [rows]="4"
          />
        </div>
      </section>

      <!-- Custom Trigger -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Custom Trigger Character</h3>
        <p class="text-sm text-muted-foreground">
          Use # instead of &#64; to trigger mentions (e.g., for hashtags or
          channels).
        </p>
        <div class="max-w-lg">
          <sc-mention-input
            [users]="channelList"
            trigger="#"
            placeholder="Type # to mention a channel..."
          />
        </div>
      </section>

      <!-- Disabled State -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Disabled</h3>
        <p class="text-sm text-muted-foreground">
          Disabled mention input state.
        </p>
        <div class="max-w-lg">
          <sc-mention-input [users]="sampleUsers" [disabled]="true" />
        </div>
      </section>

      <!-- In a Comment Form -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Comment Form Example</h3>
        <p class="text-sm text-muted-foreground">
          Mention input used in a comment or message form.
        </p>
        <div class="max-w-lg rounded-lg border p-4 space-y-3">
          <div class="flex items-center gap-3">
            <div
              class="size-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-medium"
            >
              JD
            </div>
            <span class="font-medium">John Doe</span>
          </div>
          <sc-mention-input
            [(value)]="commentValue"
            [users]="sampleUsers"
            placeholder="Write a comment... Use @ to mention someone"
            [rows]="3"
          />
          <div class="flex justify-end gap-2">
            <button
              class="inline-flex h-8 items-center justify-center rounded-md px-3 text-sm font-medium border border-input hover:bg-accent"
            >
              Cancel
            </button>
            <button
              class="inline-flex h-8 items-center justify-center rounded-md bg-primary px-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              [disabled]="!commentValue()"
            >
              Post Comment
            </button>
          </div>
        </div>
      </section>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScMentionInputDemo {
  readonly basicValue = signal('');
  readonly basicMentions = signal<MentionUser[]>([]);
  readonly commentValue = signal('');

  readonly sampleUsers: MentionUser[] = [
    { id: '1', name: 'John Doe', username: 'johndoe' },
    { id: '2', name: 'Jane Smith', username: 'janesmith' },
    { id: '3', name: 'Bob Wilson', username: 'bobwilson' },
    { id: '4', name: 'Alice Brown', username: 'alicebrown' },
    { id: '5', name: 'Charlie Davis', username: 'charlied' },
    { id: '6', name: 'Eva Martinez', username: 'evam' },
    { id: '7', name: 'Frank Johnson', username: 'frankj' },
    { id: '8', name: 'Grace Lee', username: 'gracelee' },
  ];

  readonly usersWithAvatars: MentionUser[] = [
    {
      id: '1',
      name: 'Sarah Connor',
      username: 'sconnor',
      avatar: 'https://i.pravatar.cc/150?u=sarah',
    },
    {
      id: '2',
      name: 'James Wilson',
      username: 'jwilson',
      avatar: 'https://i.pravatar.cc/150?u=james',
    },
    {
      id: '3',
      name: 'Emily Chen',
      username: 'echen',
      avatar: 'https://i.pravatar.cc/150?u=emily',
    },
    {
      id: '4',
      name: 'Michael Park',
      username: 'mpark',
      avatar: 'https://i.pravatar.cc/150?u=michael',
    },
  ];

  readonly channelList: MentionUser[] = [
    { id: '1', name: 'General', username: 'general' },
    { id: '2', name: 'Engineering', username: 'engineering' },
    { id: '3', name: 'Design', username: 'design' },
    { id: '4', name: 'Marketing', username: 'marketing' },
    { id: '5', name: 'Random', username: 'random' },
  ];

  onMentionSelect(user: MentionUser): void {
    console.log('Mentioned:', user);
  }
}`;
}
