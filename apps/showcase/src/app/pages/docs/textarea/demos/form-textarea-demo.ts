import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScLabel, ScTextarea } from '@semantic-components/ui';

@Component({
  selector: 'app-form-textarea-demo',
  imports: [ScTextarea, ScLabel],
  template: `
    <div class="rounded-lg border p-6 max-w-lg">
      <div class="space-y-4">
        <h4 class="font-semibold">Contact Us</h4>
        <div class="grid gap-4">
          <div class="grid grid-cols-2 gap-4">
            <div class="grid gap-1.5">
              <label sc-label for="contact-name">Name</label>
              <input
                type="text"
                id="contact-name"
                placeholder="Your name"
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
            </div>
            <div class="grid gap-1.5">
              <label sc-label for="contact-email">Email</label>
              <input
                type="email"
                id="contact-email"
                placeholder="your&#64;email.com"
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
            </div>
          </div>
          <div class="grid gap-1.5">
            <label sc-label for="contact-subject">Subject</label>
            <input
              type="text"
              id="contact-subject"
              placeholder="How can we help?"
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
          </div>
          <div class="grid gap-1.5">
            <label sc-label for="contact-message">Message</label>
            <textarea
              sc-textarea
              id="contact-message"
              rows="4"
              placeholder="Please describe your inquiry in detail..."
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormTextareaDemo {}
