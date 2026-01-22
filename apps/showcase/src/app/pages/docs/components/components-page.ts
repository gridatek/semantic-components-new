import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { COMPONENTS } from '../../../data/components';

@Component({
  selector: 'app-components-page',
  imports: [RouterLink],
  template: `
    <div class="space-y-8">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold tracking-tight">Components</h1>
        <p class="text-muted-foreground">
          Beautifully designed components built with Angular ARIA and Tailwind
          CSS.
        </p>
      </div>

      <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        @for (item of components; track item.path) {
          <a
            [routerLink]="'/docs/components/' + item.path"
            class="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
          >
            <h3 class="font-semibold leading-none tracking-tight">
              {{ item.name }}
            </h3>
            <p class="text-sm text-muted-foreground mt-2">
              {{ item.description }}
            </p>
          </a>
        }
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ComponentsPage {
  readonly components = COMPONENTS;
}
