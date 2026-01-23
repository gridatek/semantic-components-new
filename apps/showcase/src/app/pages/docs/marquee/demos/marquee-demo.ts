import { Component } from '@angular/core';
import {
  ScMarquee,
  ScMarqueeClone,
  ScMarqueeItem,
  ScMarqueeText,
} from '@semantic-components/ui';

@Component({
  selector: 'app-marquee-demo',
  imports: [ScMarquee, ScMarqueeItem, ScMarqueeClone, ScMarqueeText],
  template: `
    <div class="space-y-10">
      <!-- Text Marquee -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Text Marquee</h3>
        <div class="rounded-lg border bg-muted/30 py-2">
          <sc-marquee-text
            text="Breaking News: This is a scrolling text marquee component for Angular"
            [duration]="15"
          />
        </div>
      </section>

      <!-- Text Marquee Reversed -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Reversed Direction</h3>
        <div class="rounded-lg border bg-muted/30 py-2">
          <sc-marquee-text
            text="This text scrolls in the opposite direction"
            [duration]="12"
            [reverse]="true"
            separator="★"
          />
        </div>
      </section>

      <!-- Logo Marquee -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Logo/Brand Marquee</h3>
        <sc-marquee [duration]="30" [gap]="48">
          @for (brand of brands; track brand) {
            <div
              sc-marquee-item
              class="flex h-16 w-32 items-center justify-center rounded-lg border bg-background px-4"
            >
              <span class="text-lg font-semibold text-muted-foreground">
                {{ brand }}
              </span>
            </div>
          }
          <ng-container sc-marquee-clone>
            @for (brand of brands; track brand) {
              <div
                sc-marquee-item
                class="flex h-16 w-32 items-center justify-center rounded-lg border bg-background px-4"
              >
                <span class="text-lg font-semibold text-muted-foreground">
                  {{ brand }}
                </span>
              </div>
            }
          </ng-container>
        </sc-marquee>
      </section>

      <!-- Testimonials Marquee -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Testimonials</h3>
        <sc-marquee [duration]="40" [gap]="24">
          @for (testimonial of testimonials; track testimonial.name) {
            <div
              sc-marquee-item
              class="w-80 rounded-lg border bg-background p-4 shadow-sm"
            >
              <p class="text-sm text-muted-foreground mb-3">
                "{{ testimonial.quote }}"
              </p>
              <div class="flex items-center gap-2">
                <div
                  class="size-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium"
                >
                  {{ testimonial.name.charAt(0) }}
                </div>
                <div>
                  <p class="text-sm font-medium">{{ testimonial.name }}</p>
                  <p class="text-xs text-muted-foreground">
                    {{ testimonial.role }}
                  </p>
                </div>
              </div>
            </div>
          }
          <ng-container sc-marquee-clone>
            @for (testimonial of testimonials; track testimonial.name) {
              <div
                sc-marquee-item
                class="w-80 rounded-lg border bg-background p-4 shadow-sm"
              >
                <p class="text-sm text-muted-foreground mb-3">
                  "{{ testimonial.quote }}"
                </p>
                <div class="flex items-center gap-2">
                  <div
                    class="size-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium"
                  >
                    {{ testimonial.name.charAt(0) }}
                  </div>
                  <div>
                    <p class="text-sm font-medium">{{ testimonial.name }}</p>
                    <p class="text-xs text-muted-foreground">
                      {{ testimonial.role }}
                    </p>
                  </div>
                </div>
              </div>
            }
          </ng-container>
        </sc-marquee>
      </section>

      <!-- Reversed Marquee -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Reversed Direction</h3>
        <sc-marquee [duration]="25" [reverse]="true">
          @for (tech of technologies; track tech) {
            <div
              sc-marquee-item
              class="inline-flex items-center gap-2 rounded-full border bg-background px-4 py-2"
            >
              <span class="text-sm font-medium">{{ tech }}</span>
            </div>
          }
          <ng-container sc-marquee-clone>
            @for (tech of technologies; track tech) {
              <div
                sc-marquee-item
                class="inline-flex items-center gap-2 rounded-full border bg-background px-4 py-2"
              >
                <span class="text-sm font-medium">{{ tech }}</span>
              </div>
            }
          </ng-container>
        </sc-marquee>
      </section>

      <!-- Vertical Marquee -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Vertical Marquee</h3>
        <div class="h-48 overflow-hidden rounded-lg border">
          <sc-marquee direction="vertical" [duration]="20" [gap]="12">
            @for (notification of notifications; track notification.id) {
              <div
                sc-marquee-item
                class="mx-2 rounded-lg border bg-background p-3 shadow-sm"
              >
                <div class="flex items-start gap-2">
                  <span class="text-lg">{{ notification.icon }}</span>
                  <div>
                    <p class="text-sm font-medium">{{ notification.title }}</p>
                    <p class="text-xs text-muted-foreground">
                      {{ notification.time }}
                    </p>
                  </div>
                </div>
              </div>
            }
            <ng-container sc-marquee-clone>
              @for (notification of notifications; track notification.id) {
                <div
                  sc-marquee-item
                  class="mx-2 rounded-lg border bg-background p-3 shadow-sm"
                >
                  <div class="flex items-start gap-2">
                    <span class="text-lg">{{ notification.icon }}</span>
                    <div>
                      <p class="text-sm font-medium">
                        {{ notification.title }}
                      </p>
                      <p class="text-xs text-muted-foreground">
                        {{ notification.time }}
                      </p>
                    </div>
                  </div>
                </div>
              }
            </ng-container>
          </sc-marquee>
        </div>
      </section>

      <!-- Speed Variations -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Speed Variations</h3>
        <div class="space-y-4">
          <div>
            <p class="text-sm text-muted-foreground mb-1">Fast (10s)</p>
            <sc-marquee-text
              text="Fast scrolling text"
              [duration]="10"
              separator="→"
            />
          </div>
          <div>
            <p class="text-sm text-muted-foreground mb-1">Normal (20s)</p>
            <sc-marquee-text
              text="Normal scrolling text"
              [duration]="20"
              separator="→"
            />
          </div>
          <div>
            <p class="text-sm text-muted-foreground mb-1">Slow (40s)</p>
            <sc-marquee-text
              text="Slow scrolling text"
              [duration]="40"
              separator="→"
            />
          </div>
        </div>
      </section>

      <!-- Pause on Hover -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Pause on Hover</h3>
        <p class="text-sm text-muted-foreground">
          Hover over the marquee to pause animation
        </p>
        <div class="rounded-lg border bg-primary/5 py-3">
          <sc-marquee-text
            text="Hover over me to pause the animation!"
            [duration]="15"
            [pauseOnHover]="true"
          />
        </div>
      </section>

      <!-- No Pause on Hover -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Continuous (No Pause)</h3>
        <div class="rounded-lg border bg-muted/30 py-3">
          <sc-marquee-text
            text="This marquee does not pause on hover"
            [duration]="15"
            [pauseOnHover]="false"
          />
        </div>
      </section>

      <!-- Image Gallery Marquee -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Image Gallery</h3>
        <sc-marquee [duration]="35" [gap]="16">
          @for (i of [1, 2, 3, 4, 5, 6]; track i) {
            <div
              sc-marquee-item
              class="h-32 w-48 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center"
            >
              <span class="text-4xl opacity-50">📷</span>
            </div>
          }
          <ng-container sc-marquee-clone>
            @for (i of [1, 2, 3, 4, 5, 6]; track i) {
              <div
                sc-marquee-item
                class="h-32 w-48 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center"
              >
                <span class="text-4xl opacity-50">📷</span>
              </div>
            }
          </ng-container>
        </sc-marquee>
      </section>

      <!-- Stacked Marquees -->
      <section class="space-y-3">
        <h3 class="text-lg font-semibold">Stacked Marquees</h3>
        <div class="space-y-2">
          <sc-marquee [duration]="30" [gap]="24">
            @for (emoji of row1Emojis; track emoji) {
              <span sc-marquee-item class="text-3xl">{{ emoji }}</span>
            }
            <ng-container sc-marquee-clone>
              @for (emoji of row1Emojis; track emoji) {
                <span sc-marquee-item class="text-3xl">{{ emoji }}</span>
              }
            </ng-container>
          </sc-marquee>
          <sc-marquee [duration]="25" [reverse]="true" [gap]="24">
            @for (emoji of row2Emojis; track emoji) {
              <span sc-marquee-item class="text-3xl">{{ emoji }}</span>
            }
            <ng-container sc-marquee-clone>
              @for (emoji of row2Emojis; track emoji) {
                <span sc-marquee-item class="text-3xl">{{ emoji }}</span>
              }
            </ng-container>
          </sc-marquee>
          <sc-marquee [duration]="35" [gap]="24">
            @for (emoji of row3Emojis; track emoji) {
              <span sc-marquee-item class="text-3xl">{{ emoji }}</span>
            }
            <ng-container sc-marquee-clone>
              @for (emoji of row3Emojis; track emoji) {
                <span sc-marquee-item class="text-3xl">{{ emoji }}</span>
              }
            </ng-container>
          </sc-marquee>
        </div>
      </section>
    </div>
  `,
})
export class ScMarqueeDemo {
  readonly brands = ['Acme', 'Globex', 'Initech', 'Umbrella', 'Stark', 'Wayne'];

  readonly testimonials = [
    {
      name: 'Alice Johnson',
      role: 'CEO at TechCorp',
      quote: 'This component library has transformed our development workflow.',
    },
    {
      name: 'Bob Smith',
      role: 'Lead Developer',
      quote:
        'The best Angular components I have ever used. Highly recommended!',
    },
    {
      name: 'Carol Williams',
      role: 'Product Manager',
      quote: 'Clean, accessible, and beautifully designed components.',
    },
    {
      name: 'David Brown',
      role: 'UX Designer',
      quote: 'Perfect balance of functionality and aesthetics.',
    },
  ];

  readonly technologies = [
    'Angular',
    'TypeScript',
    'Tailwind CSS',
    'RxJS',
    'Signals',
    'ARIA',
    'WCAG',
  ];

  readonly notifications = [
    { id: 1, icon: '📧', title: 'New message from John', time: '2 min ago' },
    { id: 2, icon: '🎉', title: 'Project completed!', time: '5 min ago' },
    { id: 3, icon: '📦', title: 'Package delivered', time: '10 min ago' },
    { id: 4, icon: '🔔', title: 'Meeting reminder', time: '15 min ago' },
    { id: 5, icon: '⭐', title: 'New review received', time: '20 min ago' },
  ];

  readonly row1Emojis = ['🚀', '⭐', '💡', '🎯', '🔥', '💎', '🌟', '✨'];
  readonly row2Emojis = ['🎨', '🎭', '🎪', '🎢', '🎡', '🎠', '🎮', '🎲'];
  readonly row3Emojis = ['🌈', '🌸', '🌺', '🌻', '🌼', '🌷', '🌹', '💐'];
}
