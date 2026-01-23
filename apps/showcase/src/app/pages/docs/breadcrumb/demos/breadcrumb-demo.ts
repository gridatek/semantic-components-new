import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScBreadcrumb,
  ScBreadcrumbEllipsis,
  ScBreadcrumbItem,
  ScBreadcrumbLink,
  ScBreadcrumbList,
  ScBreadcrumbPage,
  ScBreadcrumbSeparator,
} from '@semantic-components/ui';

@Component({
  selector: 'app-sc-breadcrumb-demo',
  imports: [
    ScBreadcrumb,
    ScBreadcrumbEllipsis,
    ScBreadcrumbItem,
    ScBreadcrumbLink,
    ScBreadcrumbList,
    ScBreadcrumbPage,
    ScBreadcrumbSeparator,
  ],
  template: `
    <div class="space-y-8">
      <!-- Basic Breadcrumb -->
      <div class="space-y-2">
        <h3 class="text-sm font-medium">Basic Breadcrumb</h3>
        <nav sc-breadcrumb>
          <ol sc-breadcrumb-list>
            <li sc-breadcrumb-item>
              <a sc-breadcrumb-link href="#">Home</a>
            </li>
            <li sc-breadcrumb-separator></li>
            <li sc-breadcrumb-item>
              <a sc-breadcrumb-link href="#">Components</a>
            </li>
            <li sc-breadcrumb-separator></li>
            <li sc-breadcrumb-item>
              <span sc-breadcrumb-page>Breadcrumb</span>
            </li>
          </ol>
        </nav>
      </div>

      <!-- With Ellipsis -->
      <div class="space-y-2">
        <h3 class="text-sm font-medium">With Ellipsis</h3>
        <nav sc-breadcrumb>
          <ol sc-breadcrumb-list>
            <li sc-breadcrumb-item>
              <a sc-breadcrumb-link href="#">Home</a>
            </li>
            <li sc-breadcrumb-separator></li>
            <li sc-breadcrumb-item>
              <span sc-breadcrumb-ellipsis></span>
            </li>
            <li sc-breadcrumb-separator></li>
            <li sc-breadcrumb-item>
              <a sc-breadcrumb-link href="#">Components</a>
            </li>
            <li sc-breadcrumb-separator></li>
            <li sc-breadcrumb-item>
              <span sc-breadcrumb-page>Breadcrumb</span>
            </li>
          </ol>
        </nav>
      </div>

      <!-- Custom Separator -->
      <div class="space-y-2">
        <h3 class="text-sm font-medium">Custom Separator</h3>
        <nav sc-breadcrumb>
          <ol sc-breadcrumb-list>
            <li sc-breadcrumb-item>
              <a sc-breadcrumb-link href="#">Home</a>
            </li>
            <li sc-breadcrumb-separator>/</li>
            <li sc-breadcrumb-item>
              <a sc-breadcrumb-link href="#">Components</a>
            </li>
            <li sc-breadcrumb-separator>/</li>
            <li sc-breadcrumb-item>
              <span sc-breadcrumb-page>Breadcrumb</span>
            </li>
          </ol>
        </nav>
      </div>

      <!-- Longer Path -->
      <div class="space-y-2">
        <h3 class="text-sm font-medium">Longer Path</h3>
        <nav sc-breadcrumb>
          <ol sc-breadcrumb-list>
            <li sc-breadcrumb-item>
              <a sc-breadcrumb-link href="#">Home</a>
            </li>
            <li sc-breadcrumb-separator></li>
            <li sc-breadcrumb-item>
              <a sc-breadcrumb-link href="#">Dashboard</a>
            </li>
            <li sc-breadcrumb-separator></li>
            <li sc-breadcrumb-item>
              <a sc-breadcrumb-link href="#">Settings</a>
            </li>
            <li sc-breadcrumb-separator></li>
            <li sc-breadcrumb-item>
              <a sc-breadcrumb-link href="#">Profile</a>
            </li>
            <li sc-breadcrumb-separator></li>
            <li sc-breadcrumb-item>
              <span sc-breadcrumb-page>Edit</span>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScBreadcrumbDemo {}
