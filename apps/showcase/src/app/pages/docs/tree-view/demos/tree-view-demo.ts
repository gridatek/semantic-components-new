import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScTree,
  ScTreeItem,
  ScTreeItemTrigger,
  ScTreeItemContent,
  ScTreeItemIcon,
} from '@semantic-components/ui';

@Component({
  selector: 'app-sc-tree-view-demo',
  imports: [
    ScTree,
    ScTreeItem,
    ScTreeItemTrigger,
    ScTreeItemContent,
    ScTreeItemIcon,
  ],
  template: `
    <div class="space-y-8">
      <!-- File Explorer -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">File Explorer</h3>
        <div class="max-w-sm rounded-lg border p-4">
          <div sc-tree>
            <div sc-tree-item [hasChildren]="true" [expanded]="true">
              <div sc-tree-item-trigger>
                <svg
                  sc-tree-item-icon
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="text-blue-500"
                >
                  <path
                    d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
                  />
                </svg>
                <span>src</span>
              </div>
              <div sc-tree-item-content>
                <div sc-tree-item [hasChildren]="true" [expanded]="true">
                  <div sc-tree-item-trigger>
                    <svg
                      sc-tree-item-icon
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="text-blue-500"
                    >
                      <path
                        d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
                      />
                    </svg>
                    <span>app</span>
                  </div>
                  <div sc-tree-item-content>
                    <div sc-tree-item [hasChildren]="true">
                      <div sc-tree-item-trigger>
                        <svg
                          sc-tree-item-icon
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="text-blue-500"
                        >
                          <path
                            d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
                          />
                        </svg>
                        <span>components</span>
                      </div>
                      <div sc-tree-item-content>
                        <div sc-tree-item>
                          <div sc-tree-item-trigger>
                            <svg
                              sc-tree-item-icon
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="text-green-500"
                            >
                              <path
                                d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                              />
                              <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                            </svg>
                            <span>button.ts</span>
                          </div>
                        </div>
                        <div sc-tree-item>
                          <div sc-tree-item-trigger>
                            <svg
                              sc-tree-item-icon
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="text-green-500"
                            >
                              <path
                                d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                              />
                              <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                            </svg>
                            <span>input.ts</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div sc-tree-item>
                      <div sc-tree-item-trigger>
                        <svg
                          sc-tree-item-icon
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="text-green-500"
                        >
                          <path
                            d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                          />
                          <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                        </svg>
                        <span>app.ts</span>
                      </div>
                    </div>
                    <div sc-tree-item>
                      <div sc-tree-item-trigger>
                        <svg
                          sc-tree-item-icon
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="text-green-500"
                        >
                          <path
                            d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                          />
                          <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                        </svg>
                        <span>app.routes.ts</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div sc-tree-item [hasChildren]="true">
                  <div sc-tree-item-trigger>
                    <svg
                      sc-tree-item-icon
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="text-blue-500"
                    >
                      <path
                        d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
                      />
                    </svg>
                    <span>assets</span>
                  </div>
                  <div sc-tree-item-content>
                    <div sc-tree-item>
                      <div sc-tree-item-trigger>
                        <svg
                          sc-tree-item-icon
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="text-purple-500"
                        >
                          <rect
                            width="18"
                            height="18"
                            x="3"
                            y="3"
                            rx="2"
                            ry="2"
                          />
                          <circle cx="9" cy="9" r="2" />
                          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                        </svg>
                        <span>logo.png</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div sc-tree-item>
                  <div sc-tree-item-trigger>
                    <svg
                      sc-tree-item-icon
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="text-green-500"
                    >
                      <path
                        d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                      />
                      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                    </svg>
                    <span>main.ts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Navigation Tree -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Navigation Tree</h3>
        <div class="max-w-sm rounded-lg border p-4">
          <div sc-tree>
            <div sc-tree-item [hasChildren]="true" [expanded]="true">
              <div sc-tree-item-trigger>
                <svg
                  sc-tree-item-icon
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                <span>Getting Started</span>
              </div>
              <div sc-tree-item-content>
                <div sc-tree-item>
                  <div sc-tree-item-trigger>Introduction</div>
                </div>
                <div sc-tree-item>
                  <div sc-tree-item-trigger>Installation</div>
                </div>
                <div sc-tree-item>
                  <div sc-tree-item-trigger>Configuration</div>
                </div>
              </div>
            </div>
            <div sc-tree-item [hasChildren]="true">
              <div sc-tree-item-trigger>
                <svg
                  sc-tree-item-icon
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
                  />
                </svg>
                <span>Components</span>
              </div>
              <div sc-tree-item-content>
                <div sc-tree-item>
                  <div sc-tree-item-trigger>Button</div>
                </div>
                <div sc-tree-item>
                  <div sc-tree-item-trigger>Input</div>
                </div>
                <div sc-tree-item>
                  <div sc-tree-item-trigger>Select</div>
                </div>
              </div>
            </div>
            <div sc-tree-item [hasChildren]="true">
              <div sc-tree-item-trigger>
                <svg
                  sc-tree-item-icon
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="3" />
                  <path
                    d="M12 1v6m0 6v6m11-7h-6m-6 0H1m15.5-6.5-4.24 4.24m-6.52 6.52L1.5 19.5m17-1-4.24-4.24m-6.52-6.52L1.5 3.5"
                  />
                </svg>
                <span>API Reference</span>
              </div>
              <div sc-tree-item-content>
                <div sc-tree-item>
                  <div sc-tree-item-trigger>Overview</div>
                </div>
                <div sc-tree-item>
                  <div sc-tree-item-trigger>Hooks</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Simple List -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Simple List</h3>
        <div class="max-w-sm rounded-lg border p-4">
          <div sc-tree>
            <div sc-tree-item [hasChildren]="true" [expanded]="true">
              <div sc-tree-item-trigger>Fruits</div>
              <div sc-tree-item-content>
                <div sc-tree-item>
                  <div sc-tree-item-trigger>Apple</div>
                </div>
                <div sc-tree-item>
                  <div sc-tree-item-trigger>Banana</div>
                </div>
                <div sc-tree-item>
                  <div sc-tree-item-trigger>Orange</div>
                </div>
              </div>
            </div>
            <div sc-tree-item [hasChildren]="true">
              <div sc-tree-item-trigger>Vegetables</div>
              <div sc-tree-item-content>
                <div sc-tree-item>
                  <div sc-tree-item-trigger>Carrot</div>
                </div>
                <div sc-tree-item>
                  <div sc-tree-item-trigger>Broccoli</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScTreeViewDemo {}
