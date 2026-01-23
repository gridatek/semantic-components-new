import { Component } from '@angular/core';
import {
  ScTimeline,
  ScTimelineItem,
  ScTimelineConnector,
  ScTimelineDot,
  ScTimelineContent,
  ScTimelineTitle,
  ScTimelineDescription,
  ScTimelineTime,
} from '@semantic-components/ui';

@Component({
  selector: 'sc-timeline-demo',
  imports: [
    ScTimeline,
    ScTimelineItem,
    ScTimelineConnector,
    ScTimelineDot,
    ScTimelineContent,
    ScTimelineTitle,
    ScTimelineDescription,
    ScTimelineTime,
  ],
  template: `
    <div class="space-y-10">
      <!-- Basic Timeline -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Basic Timeline</h3>
        <div sc-timeline class="ml-4">
          <div sc-timeline-item>
            <div sc-timeline-connector></div>
            <div sc-timeline-dot></div>
            <div sc-timeline-content>
              <h4 sc-timeline-title>Project Started</h4>
              <p sc-timeline-description>
                Initial setup and planning phase completed.
              </p>
              <span sc-timeline-time>January 2024</span>
            </div>
          </div>

          <div sc-timeline-item>
            <div sc-timeline-connector></div>
            <div sc-timeline-dot></div>
            <div sc-timeline-content>
              <h4 sc-timeline-title>Development Phase</h4>
              <p sc-timeline-description>Core features implementation began.</p>
              <span sc-timeline-time>February 2024</span>
            </div>
          </div>

          <div sc-timeline-item>
            <div sc-timeline-dot></div>
            <div sc-timeline-content>
              <h4 sc-timeline-title>Launch</h4>
              <p sc-timeline-description>Product launched to production.</p>
              <span sc-timeline-time>March 2024</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Timeline with Status Variants -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Status Variants</h3>
        <div sc-timeline class="ml-4">
          <div sc-timeline-item>
            <div sc-timeline-connector></div>
            <div sc-timeline-dot variant="success">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                class="size-3"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <div sc-timeline-content>
              <h4 sc-timeline-title>Completed</h4>
              <p sc-timeline-description>
                This task has been completed successfully.
              </p>
            </div>
          </div>

          <div sc-timeline-item>
            <div sc-timeline-connector></div>
            <div sc-timeline-dot variant="warning">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                class="size-3"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" x2="12" y1="8" y2="12" />
                <line x1="12" x2="12.01" y1="16" y2="16" />
              </svg>
            </div>
            <div sc-timeline-content>
              <h4 sc-timeline-title>In Progress</h4>
              <p sc-timeline-description>
                This task is currently being worked on.
              </p>
            </div>
          </div>

          <div sc-timeline-item>
            <div sc-timeline-connector></div>
            <div sc-timeline-dot variant="error">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                class="size-3"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </div>
            <div sc-timeline-content>
              <h4 sc-timeline-title>Failed</h4>
              <p sc-timeline-description>This task encountered an error.</p>
            </div>
          </div>

          <div sc-timeline-item>
            <div sc-timeline-dot variant="outline"></div>
            <div sc-timeline-content>
              <h4 sc-timeline-title>Pending</h4>
              <p sc-timeline-description>This task is waiting to start.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Different Dot Sizes -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Dot Sizes</h3>
        <div sc-timeline class="ml-4">
          <div sc-timeline-item>
            <div sc-timeline-connector></div>
            <div sc-timeline-dot size="sm"></div>
            <div sc-timeline-content>
              <h4 sc-timeline-title>Small Dot</h4>
              <p sc-timeline-description>
                Using size="sm" for a smaller indicator.
              </p>
            </div>
          </div>

          <div sc-timeline-item>
            <div sc-timeline-connector></div>
            <div sc-timeline-dot size="default"></div>
            <div sc-timeline-content>
              <h4 sc-timeline-title>Default Dot</h4>
              <p sc-timeline-description>
                Using default size for standard indicator.
              </p>
            </div>
          </div>

          <div sc-timeline-item>
            <div sc-timeline-dot size="lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                class="size-4"
              >
                <path
                  d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
                />
              </svg>
            </div>
            <div sc-timeline-content>
              <h4 sc-timeline-title>Large Dot with Icon</h4>
              <p sc-timeline-description>
                Using size="lg" with an icon inside.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Activity Feed Example -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Activity Feed</h3>
        <div class="rounded-lg border p-4">
          <h4 class="mb-4 font-semibold">Recent Activity</h4>
          <div sc-timeline class="ml-2">
            <div sc-timeline-item class="pb-4">
              <div sc-timeline-connector></div>
              <div sc-timeline-dot size="sm" variant="default"></div>
              <div sc-timeline-content class="space-y-0">
                <p class="text-sm">
                  <span class="font-medium">John Doe</span>
                  created a new project
                </p>
                <span sc-timeline-time>2 hours ago</span>
              </div>
            </div>

            <div sc-timeline-item class="pb-4">
              <div sc-timeline-connector></div>
              <div sc-timeline-dot size="sm" variant="success"></div>
              <div sc-timeline-content class="space-y-0">
                <p class="text-sm">
                  <span class="font-medium">Jane Smith</span>
                  completed the review
                </p>
                <span sc-timeline-time>4 hours ago</span>
              </div>
            </div>

            <div sc-timeline-item class="pb-4">
              <div sc-timeline-connector></div>
              <div sc-timeline-dot size="sm" variant="outline"></div>
              <div sc-timeline-content class="space-y-0">
                <p class="text-sm">
                  <span class="font-medium">Bob Wilson</span>
                  added a comment
                </p>
                <span sc-timeline-time>Yesterday</span>
              </div>
            </div>

            <div sc-timeline-item class="pb-0">
              <div sc-timeline-dot size="sm" variant="outline"></div>
              <div sc-timeline-content class="space-y-0">
                <p class="text-sm">
                  <span class="font-medium">Alice Brown</span>
                  joined the team
                </p>
                <span sc-timeline-time>2 days ago</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Order Tracking Example -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Order Tracking</h3>
        <div class="rounded-lg border p-4">
          <div sc-timeline class="ml-4">
            <div sc-timeline-item>
              <div sc-timeline-connector></div>
              <div sc-timeline-dot variant="success" size="lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  class="size-4"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <div sc-timeline-content>
                <h4 sc-timeline-title>Order Placed</h4>
                <p sc-timeline-description>Your order has been confirmed.</p>
                <span sc-timeline-time>Jan 15, 2024 at 10:30 AM</span>
              </div>
            </div>

            <div sc-timeline-item>
              <div sc-timeline-connector></div>
              <div sc-timeline-dot variant="success" size="lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  class="size-4"
                >
                  <path
                    d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
                  />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
              </div>
              <div sc-timeline-content>
                <h4 sc-timeline-title>Shipped</h4>
                <p sc-timeline-description>Your package is on its way.</p>
                <span sc-timeline-time>Jan 16, 2024 at 2:15 PM</span>
              </div>
            </div>

            <div sc-timeline-item>
              <div sc-timeline-connector></div>
              <div sc-timeline-dot variant="warning" size="lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  class="size-4"
                >
                  <rect x="1" y="3" width="15" height="13" />
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                  <circle cx="5.5" cy="18.5" r="2.5" />
                  <circle cx="18.5" cy="18.5" r="2.5" />
                </svg>
              </div>
              <div sc-timeline-content>
                <h4 sc-timeline-title>Out for Delivery</h4>
                <p sc-timeline-description>
                  Your package is out for delivery today.
                </p>
                <span sc-timeline-time>Jan 18, 2024 at 8:00 AM</span>
              </div>
            </div>

            <div sc-timeline-item>
              <div sc-timeline-dot variant="outline" size="lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  class="size-4"
                >
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <div sc-timeline-content>
                <h4 sc-timeline-title class="text-muted-foreground">
                  Delivered
                </h4>
                <p sc-timeline-description>Estimated delivery by end of day.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
})
export class ScTimelineDemo {}
