import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScHoverCardDemo } from './hover-card-demo';

@Component({
  selector: 'app-hover-card-demo-container',
  imports: [DemoContainer, ScHoverCardDemo],
  template: `
    <app-demo-container title="Hover Card" [code]="code">
      <app-sc-hover-card-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScHoverCardDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ScHoverCardProvider,
  ScHoverCardPortal,
  ScHoverCard,
  ScHoverCardTrigger,
} from '@semantic-components/ui';

@Component({
  selector: 'app-sc-hover-card-demo',
  imports: [ScHoverCardProvider, ScHoverCardPortal, ScHoverCard, ScHoverCardTrigger],
  template: \`
    <div sc-hover-card-provider>
      <a
        sc-hover-card-trigger
        href="https://github.com/angular"
        target="_blank"
        rel="noopener noreferrer"
        class="text-sm font-medium underline underline-offset-4"
      >
        &#64;angular
      </a>
      <div sc-hover-card-portal>
        <div sc-hover-card>
          <div class="flex justify-between gap-4">
            <div
              class="flex size-12 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-red-700 text-xl font-bold text-white"
            >
              A
            </div>
            <div class="space-y-1">
              <h4 class="text-sm font-semibold">&#64;angular</h4>
              <p class="text-sm text-muted-foreground">
                The modern web developer's platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScHoverCardDemo {}`;
}
