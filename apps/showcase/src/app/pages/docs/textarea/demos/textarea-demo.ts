import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScTextarea } from '@semantic-components/ui';
import { ScLabel } from '@semantic-components/ui';

@Component({
  selector: 'app-textarea-demo',
  imports: [ScTextarea, ScLabel],
  template: `
    <div class="space-y-8">
      <!-- Basic Textarea -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Basic Textarea</h3>
        <textarea sc-textarea placeholder="Type your message here."></textarea>
      </div>

      <!-- With Label -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">With Label</h3>
        <div class="grid w-full gap-1.5">
          <label sc-label for="message">Your message</label>
          <textarea
            sc-textarea
            id="message"
            placeholder="Type your message here."
          ></textarea>
        </div>
      </div>

      <!-- With Helper Text -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">With Helper Text</h3>
        <div class="grid w-full gap-1.5">
          <label sc-label for="bio">Bio</label>
          <textarea
            sc-textarea
            id="bio"
            placeholder="Tell us about yourself"
          ></textarea>
          <p class="text-sm text-muted-foreground">
            Your bio will be visible on your public profile.
          </p>
        </div>
      </div>

      <!-- With Rows -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Custom Rows</h3>
        <div class="grid w-full gap-4">
          <div class="grid gap-1.5">
            <label sc-label for="small">Small (2 rows)</label>
            <textarea
              sc-textarea
              id="small"
              rows="2"
              placeholder="Small textarea"
            ></textarea>
          </div>
          <div class="grid gap-1.5">
            <label sc-label for="large">Large (6 rows)</label>
            <textarea
              sc-textarea
              id="large"
              rows="6"
              placeholder="Large textarea"
            ></textarea>
          </div>
        </div>
      </div>

      <!-- Disabled -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Disabled</h3>
        <textarea
          sc-textarea
          placeholder="Disabled textarea"
          disabled
        ></textarea>
      </div>

      <!-- With Max Length -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">With Character Limit</h3>
        <div class="grid w-full gap-1.5">
          <label sc-label for="limited">Description (max 200 characters)</label>
          <textarea
            sc-textarea
            id="limited"
            maxlength="200"
            placeholder="Enter description..."
          ></textarea>
        </div>
      </div>

      <!-- Form Example -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Form Example</h3>
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
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScTextareaDemo {}
