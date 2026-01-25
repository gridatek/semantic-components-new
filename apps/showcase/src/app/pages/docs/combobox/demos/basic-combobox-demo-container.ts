import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { BasicComboboxDemo } from './basic-combobox-demo';

@Component({
  selector: 'app-basic-combobox-demo-container',
  imports: [DemoContainer, BasicComboboxDemo],
  template: `
    <app-demo-container title="Basic" [code]="code">
      <app-basic-combobox-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicComboboxDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ComboboxOption, ScCombobox } from '@semantic-components/ui';

@Component({
  selector: 'app-basic-combobox-demo',
  imports: [ScCombobox],
  template: \`
    <div class="space-y-4">
      <sc-combobox
        [(value)]="selectedFramework"
        [options]="frameworks"
        placeholder="Select framework..."
        searchPlaceholder="Search framework..."
      />
      @if (selectedFramework()) {
        <p class="text-sm text-muted-foreground">
          Selected: {{ selectedFramework() }}
        </p>
      }
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicComboboxDemo {
  readonly selectedFramework = signal<string>('');

  readonly frameworks: ComboboxOption[] = [
    { value: 'next', label: 'Next.js' },
    { value: 'sveltekit', label: 'SvelteKit' },
    { value: 'nuxt', label: 'Nuxt.js' },
    { value: 'remix', label: 'Remix' },
    { value: 'astro', label: 'Astro' },
    { value: 'angular', label: 'Angular' },
  ];
}`;
}
