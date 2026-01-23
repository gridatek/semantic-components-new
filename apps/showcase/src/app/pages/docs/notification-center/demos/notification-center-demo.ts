import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScNotificationCenter,
  type Notification,
  type NotificationGroup,
} from '@semantic-components/ui';

@Component({
  selector: 'app-notification-center-demo',
  imports: [ScNotificationCenter],
  template: `
    <div class="space-y-8">
      <!-- Grouped Notifications -->
      <section>
        <h3 class="text-lg font-medium mb-4">Grouped Notifications</h3>
        <div class="max-w-md h-[500px]">
          <sc-notification-center
            [(notifications)]="groupedNotifications"
            [groups]="groups()"
            class="h-full"
            (markRead)="onMarkRead($event)"
            (dismiss)="onDismiss($event)"
            (clearAll)="onClearAll()"
          />
        </div>
      </section>

      <!-- Flat List -->
      <section>
        <h3 class="text-lg font-medium mb-4">Flat List (No Groups)</h3>
        <div class="max-w-md h-[400px]">
          <sc-notification-center
            [(notifications)]="flatNotifications"
            class="h-full"
            [showFilters]="true"
          />
        </div>
      </section>

      <!-- Empty State -->
      <section>
        <h3 class="text-lg font-medium mb-4">Empty State</h3>
        <div class="max-w-md h-[300px]">
          <sc-notification-center
            [(notifications)]="emptyNotifications"
            class="h-full"
            emptyTitle="All caught up!"
            emptyDescription="No new notifications to show."
          />
        </div>
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationCenterDemoComponent {
  readonly groups = signal<NotificationGroup[]>([
    { id: 'messages', title: 'Messages' },
    { id: 'updates', title: 'Updates' },
    { id: 'alerts', title: 'Alerts' },
  ]);

  readonly groupedNotifications = signal<Notification[]>([
    {
      id: '1',
      title: 'New message from Alice',
      description: 'Hey! Are you available for a quick call this afternoon?',
      type: 'message',
      timestamp: new Date(Date.now() - 5 * 60000),
      read: false,
      groupId: 'messages',
      avatar: 'https://i.pravatar.cc/150?u=alice',
      action: { label: 'Reply' },
    },
    {
      id: '2',
      title: 'Bob mentioned you in a comment',
      description: '@you Great work on the new feature!',
      type: 'message',
      timestamp: new Date(Date.now() - 30 * 60000),
      read: false,
      groupId: 'messages',
      avatar: 'https://i.pravatar.cc/150?u=bob',
    },
    {
      id: '3',
      title: 'New version available',
      description:
        'Version 2.5.0 is now available with new features and bug fixes.',
      type: 'info',
      timestamp: new Date(Date.now() - 2 * 3600000),
      read: true,
      groupId: 'updates',
      action: { label: 'Update now' },
    },
    {
      id: '4',
      title: 'Weekly report generated',
      description: 'Your weekly activity report is ready to view.',
      type: 'success',
      timestamp: new Date(Date.now() - 24 * 3600000),
      read: true,
      groupId: 'updates',
    },
    {
      id: '5',
      title: 'Payment failed',
      description:
        'Your payment method was declined. Please update your billing info.',
      type: 'error',
      timestamp: new Date(Date.now() - 10 * 60000),
      read: false,
      groupId: 'alerts',
      action: { label: 'Update payment' },
    },
    {
      id: '6',
      title: 'Storage limit warning',
      description: "You've used 90% of your storage quota.",
      type: 'warning',
      timestamp: new Date(Date.now() - 3 * 3600000),
      read: false,
      groupId: 'alerts',
      action: { label: 'Upgrade plan' },
    },
  ]);

  readonly flatNotifications = signal<Notification[]>([
    {
      id: 'f1',
      title: 'Build completed successfully',
      description: 'Project my-app built in 45 seconds.',
      type: 'success',
      timestamp: new Date(Date.now() - 2 * 60000),
      read: false,
    },
    {
      id: 'f2',
      title: 'Deployment in progress',
      description: 'Deploying to production environment...',
      type: 'info',
      timestamp: new Date(Date.now() - 15 * 60000),
      read: false,
    },
    {
      id: 'f3',
      title: 'Security alert',
      description: 'Unusual login attempt detected from a new location.',
      type: 'warning',
      timestamp: new Date(Date.now() - 45 * 60000),
      read: true,
      action: { label: 'Review activity' },
    },
    {
      id: 'f4',
      title: 'Scheduled maintenance',
      description: 'System maintenance scheduled for tonight at 2 AM.',
      type: 'info',
      timestamp: new Date(Date.now() - 4 * 3600000),
      read: true,
    },
    {
      id: 'f5',
      title: 'New team member joined',
      description: 'Carol has joined the Engineering team.',
      type: 'message',
      timestamp: new Date(Date.now() - 2 * 24 * 3600000),
      read: true,
      avatar: 'https://i.pravatar.cc/150?u=carol',
    },
  ]);

  readonly emptyNotifications = signal<Notification[]>([]);

  onMarkRead(event: { notification: Notification; read: boolean }): void {
    console.log('Mark read:', event);
  }

  onDismiss(notification: Notification): void {
    console.log('Dismissed:', notification);
  }

  onClearAll(): void {
    console.log('Cleared all notifications');
  }
}
