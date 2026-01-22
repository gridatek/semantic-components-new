import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  model,
  output,
} from '@angular/core';
import { cn } from '../../utils';
import { ScNotificationGroup } from './notification-group';
import { ScNotificationItem } from './notification-item';
import type {
  Notification,
  NotificationAction,
  NotificationGroup,
} from './notification-types';

export type NotificationFilter = 'all' | 'unread' | 'read';

@Component({
  selector: 'sc-notification-center',
  imports: [ScNotificationGroup, ScNotificationItem],
  template: `
    <div [class]="containerClass()">
      <!-- Header -->
      <div class="flex items-center justify-between px-4 py-3 border-b">
        <div class="flex items-center gap-2">
          <h2 class="text-lg font-semibold">{{ title() }}</h2>
          @if (totalUnread() > 0) {
            <span
              class="px-2 py-0.5 text-xs font-medium bg-primary text-primary-foreground rounded-full"
            >
              {{ totalUnread() }}
            </span>
          }
        </div>

        <div class="flex items-center gap-2">
          <!-- Filter tabs -->
          @if (showFilters()) {
            <div class="flex items-center bg-muted rounded-lg p-0.5">
              @for (f of filters; track f.value) {
                <button
                  type="button"
                  class="px-2.5 py-1 text-xs font-medium rounded-md transition-colors"
                  [class.bg-background]="filter() === f.value"
                  [class.text-foreground]="filter() === f.value"
                  [class.shadow-sm]="filter() === f.value"
                  [class.text-muted-foreground]="filter() !== f.value"
                  [class.hover:text-foreground]="filter() !== f.value"
                  (click)="setFilter(f.value)"
                >
                  {{ f.label }}
                </button>
              }
            </div>
          }

          <!-- Mark all read -->
          @if (totalUnread() > 0) {
            <button
              type="button"
              class="p-1.5 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              (click)="onMarkAllRead()"
              aria-label="Mark all as read"
              title="Mark all as read"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </button>
          }

          <!-- Clear all -->
          @if (notifications().length > 0 && showClearAll()) {
            <button
              type="button"
              class="p-1.5 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
              (click)="onClearAll()"
              aria-label="Clear all notifications"
              title="Clear all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M3 6h18" />
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
              </svg>
            </button>
          }
        </div>
      </div>

      <!-- Content -->
      <div class="flex-1 overflow-y-auto">
        @if (filteredNotifications().length === 0) {
          <div
            class="flex flex-col items-center justify-center py-12 text-center"
          >
            <div
              class="w-16 h-16 mb-4 rounded-full bg-muted flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="text-muted-foreground"
              >
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
              </svg>
            </div>
            <p class="text-sm font-medium text-foreground">
              {{ emptyTitle() }}
            </p>
            <p class="mt-1 text-sm text-muted-foreground">
              {{ emptyDescription() }}
            </p>
          </div>
        } @else if (groups().length > 0) {
          <!-- Grouped notifications -->
          <div class="p-2 space-y-4">
            @for (group of groups(); track group.id) {
              <sc-notification-group
                [group]="group"
                [notifications]="getGroupNotifications(group.id)"
                [showDismiss]="showDismiss()"
                (markRead)="onMarkRead($event.notification, $event.read)"
                (markAllRead)="onMarkAllReadInGroup(group.id)"
                (dismiss)="onDismiss($event)"
                (clearAll)="onClearGroup(group.id)"
                (actionClick)="
                  onActionClick($event.notification, $event.action)
                "
                (itemClick)="itemClick.emit($event)"
              />
            }

            <!-- Ungrouped notifications -->
            @if (ungroupedNotifications().length > 0) {
              <div>
                <p class="px-3 py-2 text-sm font-medium text-muted-foreground">
                  Other
                </p>
                <div class="space-y-1">
                  @for (
                    notification of ungroupedNotifications();
                    track notification.id
                  ) {
                    <sc-notification-item
                      [notification]="notification"
                      [showDismiss]="showDismiss()"
                      (markRead)="onMarkRead(notification, $event)"
                      (dismiss)="onDismiss(notification)"
                      (actionClick)="onActionClick(notification, $event)"
                      (itemClick)="itemClick.emit(notification)"
                    />
                  }
                </div>
              </div>
            }
          </div>
        } @else {
          <!-- Flat list -->
          <div class="p-2 space-y-1" role="feed" aria-label="Notifications">
            @for (
              notification of filteredNotifications();
              track notification.id
            ) {
              <sc-notification-item
                [notification]="notification"
                [showDismiss]="showDismiss()"
                (markRead)="onMarkRead(notification, $event)"
                (dismiss)="onDismiss(notification)"
                (actionClick)="onActionClick(notification, $event)"
                (itemClick)="itemClick.emit(notification)"
              />
            }
          </div>
        }
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScNotificationCenter {
  readonly notifications = model<Notification[]>([]);
  readonly groups = input<NotificationGroup[]>([]);
  readonly title = input('Notifications');
  readonly showFilters = input(true);
  readonly showClearAll = input(true);
  readonly showDismiss = input(true);
  readonly emptyTitle = input('No notifications');
  readonly emptyDescription = input("You're all caught up!");
  readonly class = input<string>('');

  readonly markRead = output<{ notification: Notification; read: boolean }>();
  readonly markAllRead = output<void>();
  readonly dismiss = output<Notification>();
  readonly clearAll = output<void>();
  readonly actionClick = output<{
    notification: Notification;
    action: NotificationAction;
  }>();
  readonly itemClick = output<Notification>();
  readonly filterChange = output<NotificationFilter>();

  protected readonly filter = model<NotificationFilter>('all');

  protected readonly filters: { value: NotificationFilter; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'unread', label: 'Unread' },
    { value: 'read', label: 'Read' },
  ];

  protected readonly containerClass = computed(() =>
    cn('flex flex-col bg-background border rounded-lg shadow-lg', this.class()),
  );

  protected readonly totalUnread = computed(
    () => this.notifications().filter((n) => !n.read).length,
  );

  protected readonly filteredNotifications = computed(() => {
    const f = this.filter();
    const all = this.notifications();

    switch (f) {
      case 'unread':
        return all.filter((n) => !n.read);
      case 'read':
        return all.filter((n) => n.read);
      default:
        return all;
    }
  });

  protected readonly ungroupedNotifications = computed(() =>
    this.filteredNotifications().filter((n) => !n.groupId),
  );

  protected getGroupNotifications(groupId: string): Notification[] {
    return this.filteredNotifications().filter((n) => n.groupId === groupId);
  }

  protected setFilter(f: NotificationFilter): void {
    this.filter.set(f);
    this.filterChange.emit(f);
  }

  protected onMarkRead(notification: Notification, read: boolean): void {
    this.notifications.update((notifications) =>
      notifications.map((n) => (n.id === notification.id ? { ...n, read } : n)),
    );
    this.markRead.emit({ notification, read });
  }

  protected onMarkAllRead(): void {
    this.notifications.update((notifications) =>
      notifications.map((n) => ({ ...n, read: true })),
    );
    this.markAllRead.emit();
  }

  protected onMarkAllReadInGroup(groupId: string): void {
    this.notifications.update((notifications) =>
      notifications.map((n) =>
        n.groupId === groupId ? { ...n, read: true } : n,
      ),
    );
  }

  protected onDismiss(notification: Notification): void {
    this.notifications.update((notifications) =>
      notifications.filter((n) => n.id !== notification.id),
    );
    this.dismiss.emit(notification);
  }

  protected onClearAll(): void {
    this.notifications.set([]);
    this.clearAll.emit();
  }

  protected onClearGroup(groupId: string): void {
    this.notifications.update((notifications) =>
      notifications.filter((n) => n.groupId !== groupId),
    );
  }

  protected onActionClick(
    notification: Notification,
    action: NotificationAction,
  ): void {
    this.actionClick.emit({ notification, action });
  }
}
