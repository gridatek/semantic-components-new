import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScInput } from '@semantic-components/ui';
import { ScLabel } from '@semantic-components/ui';

@Component({
  selector: 'app-sc-input-demo',
  imports: [ScInput, ScLabel],
  template: `
    <div class="space-y-8">
      <!-- Basic Input -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Basic Input</h3>
        <input sc-input type="text" placeholder="Enter text..." />
      </div>

      <!-- With Label -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">With Label</h3>
        <div class="grid w-full max-w-sm items-center gap-1.5">
          <label sc-label for="email">Email</label>
          <input sc-input type="email" id="email" placeholder="Email" />
        </div>
      </div>

      <!-- Different Types -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Input Types</h3>
        <div class="grid w-full max-w-sm gap-4">
          <div class="grid gap-1.5">
            <label sc-label for="text">Text</label>
            <input sc-input type="text" id="text" placeholder="Text input" />
          </div>
          <div class="grid gap-1.5">
            <label sc-label for="password">Password</label>
            <input
              sc-input
              type="password"
              id="password"
              placeholder="Password"
            />
          </div>
          <div class="grid gap-1.5">
            <label sc-label for="number">Number</label>
            <input sc-input type="number" id="number" placeholder="0" />
          </div>
          <div class="grid gap-1.5">
            <label sc-label for="date">Date</label>
            <input sc-input type="date" id="date" />
          </div>
          <div class="grid gap-1.5">
            <label sc-label for="time">Time</label>
            <input sc-input type="time" id="time" />
          </div>
          <div class="grid gap-1.5">
            <label sc-label for="search">Search</label>
            <input sc-input type="search" id="search" placeholder="Search..." />
          </div>
        </div>
      </div>

      <!-- File Input -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">File Input</h3>
        <div class="grid w-full max-w-sm items-center gap-1.5">
          <label sc-label for="file">Upload file</label>
          <input sc-input type="file" id="file" />
        </div>
      </div>

      <!-- Disabled -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Disabled</h3>
        <input sc-input type="text" placeholder="Disabled input" disabled />
      </div>

      <!-- With Button -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">With Button</h3>
        <div class="flex w-full max-w-sm items-center space-x-2">
          <input sc-input type="email" placeholder="Email" />
          <button
            class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
          >
            Subscribe
          </button>
        </div>
      </div>

      <!-- Form Example -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Form Example</h3>
        <div class="rounded-lg border p-6 max-w-md">
          <div class="space-y-4">
            <h4 class="font-semibold">Create Account</h4>
            <div class="grid gap-4">
              <div class="grid grid-cols-2 gap-4">
                <div class="grid gap-1.5">
                  <label sc-label for="first-name">First name</label>
                  <input
                    sc-input
                    type="text"
                    id="first-name"
                    placeholder="John"
                  />
                </div>
                <div class="grid gap-1.5">
                  <label sc-label for="last-name">Last name</label>
                  <input
                    sc-input
                    type="text"
                    id="last-name"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div class="grid gap-1.5">
                <label sc-label for="signup-email">Email</label>
                <input
                  sc-input
                  type="email"
                  id="signup-email"
                  placeholder="john&#64;example.com"
                />
              </div>
              <div class="grid gap-1.5">
                <label sc-label for="signup-password">Password</label>
                <input sc-input type="password" id="signup-password" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScInputDemo {}
