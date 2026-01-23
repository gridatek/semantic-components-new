import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CdkMenuTrigger } from '@angular/cdk/menu';
import {
  ScDropdownMenu,
  ScDropdownMenuTrigger,
  ScDropdownMenuContent,
  ScDropdownMenuGroup,
  ScDropdownMenuLabel,
  ScDropdownMenuItem,
  ScDropdownMenuCheckboxItem,
  ScDropdownMenuRadioGroup,
  ScDropdownMenuRadioItem,
  ScDropdownMenuSeparator,
  ScDropdownMenuShortcut,
  ScDropdownMenuSub,
  ScDropdownMenuSubTrigger,
  ScDropdownMenuSubContent,
} from '@semantic-components/ui';
import { ScButton } from '@semantic-components/ui';

@Component({
  selector: 'app-sc-dropdown-menu-demo',
  imports: [
    CdkMenuTrigger,
    ScDropdownMenu,
    ScDropdownMenuTrigger,
    ScDropdownMenuContent,
    ScDropdownMenuGroup,
    ScDropdownMenuLabel,
    ScDropdownMenuItem,
    ScDropdownMenuCheckboxItem,
    ScDropdownMenuRadioGroup,
    ScDropdownMenuRadioItem,
    ScDropdownMenuSeparator,
    ScDropdownMenuShortcut,
    ScDropdownMenuSub,
    ScDropdownMenuSubTrigger,
    ScDropdownMenuSubContent,
    ScButton,
  ],
  template: `
    <div class="space-y-8">
      <!-- Basic -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Basic</h3>
        <div sc-dropdown-menu>
          <button
            sc-button
            variant="outline"
            sc-dropdown-menu-trigger
            [cdkMenuTriggerFor]="menu1"
          >
            Open Menu
          </button>
          <ng-template #menu1>
            <div sc-dropdown-menu-content>
              <div sc-dropdown-menu-label>My Account</div>
              <div sc-dropdown-menu-separator></div>
              <div sc-dropdown-menu-item>
                Profile
                <span sc-dropdown-menu-shortcut>⇧⌘P</span>
              </div>
              <div sc-dropdown-menu-item>
                Billing
                <span sc-dropdown-menu-shortcut>⌘B</span>
              </div>
              <div sc-dropdown-menu-item>
                Settings
                <span sc-dropdown-menu-shortcut>⌘S</span>
              </div>
              <div sc-dropdown-menu-item>
                Keyboard shortcuts
                <span sc-dropdown-menu-shortcut>⌘K</span>
              </div>
              <div sc-dropdown-menu-separator></div>
              <div sc-dropdown-menu-item>Log out</div>
            </div>
          </ng-template>
        </div>
      </div>

      <!-- With Icons -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">With Icons</h3>
        <div sc-dropdown-menu>
          <button
            sc-button
            variant="outline"
            sc-dropdown-menu-trigger
            [cdkMenuTriggerFor]="menu2"
          >
            Open
          </button>
          <ng-template #menu2>
            <div sc-dropdown-menu-content class="w-56">
              <div sc-dropdown-menu-label>Actions</div>
              <div sc-dropdown-menu-separator></div>
              <div sc-dropdown-menu-group>
                <div sc-dropdown-menu-item>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  Team
                </div>
                <div sc-dropdown-menu-item>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"
                    />
                    <path d="M7 7h.01" />
                  </svg>
                  New Tag
                  <span sc-dropdown-menu-shortcut>⌘T</span>
                </div>
                <div sc-dropdown-menu-item>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M12 3v18" />
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                  </svg>
                  New Board
                  <span sc-dropdown-menu-shortcut>⌘B</span>
                </div>
              </div>
            </div>
          </ng-template>
        </div>
      </div>

      <!-- Checkboxes -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Checkboxes</h3>
        <div sc-dropdown-menu>
          <button
            sc-button
            variant="outline"
            sc-dropdown-menu-trigger
            [cdkMenuTriggerFor]="menu3"
          >
            View Options
          </button>
          <ng-template #menu3>
            <div sc-dropdown-menu-content class="w-56">
              <div sc-dropdown-menu-label>Appearance</div>
              <div sc-dropdown-menu-separator></div>
              <div sc-dropdown-menu-checkbox-item [(checked)]="showStatusBar">
                Status Bar
              </div>
              <div sc-dropdown-menu-checkbox-item [(checked)]="showActivityBar">
                Activity Bar
              </div>
              <div sc-dropdown-menu-checkbox-item [(checked)]="showPanel">
                Panel
              </div>
            </div>
          </ng-template>
        </div>
        <p class="text-xs text-muted-foreground">
          Status: {{ showStatusBar() }}, Activity: {{ showActivityBar() }},
          Panel: {{ showPanel() }}
        </p>
      </div>

      <!-- Radio Group -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Radio Group</h3>
        <div sc-dropdown-menu>
          <button
            sc-button
            variant="outline"
            sc-dropdown-menu-trigger
            [cdkMenuTriggerFor]="menu4"
          >
            Select Position
          </button>
          <ng-template #menu4>
            <div sc-dropdown-menu-content class="w-56">
              <div sc-dropdown-menu-label>Panel Position</div>
              <div sc-dropdown-menu-separator></div>
              <div sc-dropdown-menu-radio-group [(value)]="position">
                <div sc-dropdown-menu-radio-item value="top">Top</div>
                <div sc-dropdown-menu-radio-item value="bottom">Bottom</div>
                <div sc-dropdown-menu-radio-item value="right">Right</div>
              </div>
            </div>
          </ng-template>
        </div>
        <p class="text-xs text-muted-foreground">Position: {{ position() }}</p>
      </div>

      <!-- With Submenu -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">With Submenu</h3>
        <div sc-dropdown-menu>
          <button
            sc-button
            variant="outline"
            sc-dropdown-menu-trigger
            [cdkMenuTriggerFor]="menu5"
          >
            Options
          </button>
          <ng-template #menu5>
            <div sc-dropdown-menu-content class="w-56">
              <div sc-dropdown-menu-item>Back</div>
              <div sc-dropdown-menu-item>Forward</div>
              <div sc-dropdown-menu-item>Reload</div>
              <div sc-dropdown-menu-separator></div>
              <div sc-dropdown-menu-sub>
                <div sc-dropdown-menu-sub-trigger [cdkMenuTriggerFor]="submenu">
                  More Tools
                </div>
                <ng-template #submenu>
                  <div sc-dropdown-menu-sub-content>
                    <div sc-dropdown-menu-item>Save Page As...</div>
                    <div sc-dropdown-menu-item>Create Shortcut...</div>
                    <div sc-dropdown-menu-item>Name Window...</div>
                    <div sc-dropdown-menu-separator></div>
                    <div sc-dropdown-menu-item>Developer Tools</div>
                  </div>
                </ng-template>
              </div>
              <div sc-dropdown-menu-separator></div>
              <div sc-dropdown-menu-item>Show Full URLs</div>
            </div>
          </ng-template>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScDropdownMenuDemo {
  readonly showStatusBar = signal(true);
  readonly showActivityBar = signal(false);
  readonly showPanel = signal(false);
  readonly position = signal('bottom');
}
