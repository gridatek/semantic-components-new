import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScSeparator } from '@semantic-components/ui';

@Component({
  selector: 'app-separator-demo',
  imports: [ScSeparator],
  template: `
    <div class="space-y-8">
      <!-- Horizontal Separator -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Horizontal Separator</h3>
        <div>
          <div class="space-y-1">
            <h4 class="text-sm font-medium leading-none">Radix Primitives</h4>
            <p class="text-sm text-muted-foreground">
              An open-source UI component library.
            </p>
          </div>
          <div sc-separator class="my-4"></div>
          <div class="flex h-5 items-center space-x-4 text-sm">
            <div>Blog</div>
            <div sc-separator orientation="vertical"></div>
            <div>Docs</div>
            <div sc-separator orientation="vertical"></div>
            <div>Source</div>
          </div>
        </div>
      </div>

      <!-- Vertical Separator -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Vertical Separator</h3>
        <div class="flex h-5 items-center space-x-4 text-sm">
          <div>Home</div>
          <div sc-separator orientation="vertical"></div>
          <div>Products</div>
          <div sc-separator orientation="vertical"></div>
          <div>About</div>
          <div sc-separator orientation="vertical"></div>
          <div>Contact</div>
        </div>
      </div>

      <!-- In a Card -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">In a Card</h3>
        <div class="w-[350px] rounded-lg border p-4">
          <div class="flex items-center justify-between">
            <span class="text-sm font-medium">Account Settings</span>
            <span class="text-xs text-muted-foreground">v1.0.0</span>
          </div>
          <div sc-separator class="my-4"></div>
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <span class="text-sm">Email notifications</span>
              <span class="text-sm text-muted-foreground">On</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-sm">Push notifications</span>
              <span class="text-sm text-muted-foreground">Off</span>
            </div>
          </div>
          <div sc-separator class="my-4"></div>
          <div class="flex items-center justify-between">
            <span class="text-sm text-muted-foreground">
              Last updated: 2 hours ago
            </span>
          </div>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScSeparatorDemo {}
