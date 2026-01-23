import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScAlertDialog,
  ScAlertDialogAction,
  ScAlertDialogCancel,
  ScAlertDialogContent,
  ScAlertDialogDescription,
  ScAlertDialogFooter,
  ScAlertDialogHeader,
  ScAlertDialogPortal,
  ScAlertDialogTitle,
  ScAlertDialogTrigger,
} from '@semantic-components/ui';

@Component({
  selector: 'app-sc-alert-dialog-demo',
  imports: [
    ScAlertDialog,
    ScAlertDialogAction,
    ScAlertDialogCancel,
    ScAlertDialogContent,
    ScAlertDialogDescription,
    ScAlertDialogFooter,
    ScAlertDialogHeader,
    ScAlertDialogPortal,
    ScAlertDialogTitle,
    ScAlertDialogTrigger,
  ],
  template: `
    <div class="flex gap-4">
      <!-- Basic Alert Dialog -->
      <div sc-alert-dialog>
        <button
          sc-alert-dialog-trigger
          class="inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          Delete Account
        </button>
        <div sc-alert-dialog-portal>
          <div sc-alert-dialog-content>
            <div sc-alert-dialog-header>
              <h2 sc-alert-dialog-title>Are you absolutely sure?</h2>
              <p sc-alert-dialog-description>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </p>
            </div>
            <div sc-alert-dialog-footer>
              <button sc-alert-dialog-cancel>Cancel</button>
              <button sc-alert-dialog-action>Continue</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Destructive Alert Dialog -->
      <div sc-alert-dialog>
        <button
          sc-alert-dialog-trigger
          class="inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-md bg-destructive px-4 py-2 text-sm font-medium text-destructive-foreground shadow-xs transition-colors hover:bg-destructive/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <svg
            class="size-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M3 6h18" />
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
            <line x1="10" x2="10" y1="11" y2="17" />
            <line x1="14" x2="14" y1="11" y2="17" />
          </svg>
          Delete All
        </button>
        <div sc-alert-dialog-portal>
          <div sc-alert-dialog-content>
            <div sc-alert-dialog-header>
              <h2 sc-alert-dialog-title>Delete all items?</h2>
              <p sc-alert-dialog-description>
                This will permanently delete all items in your collection. This
                action cannot be reversed.
              </p>
            </div>
            <div sc-alert-dialog-footer>
              <button sc-alert-dialog-cancel>Cancel</button>
              <button
                sc-alert-dialog-action
                class="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              >
                Delete All
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScAlertDialogDemo {}
