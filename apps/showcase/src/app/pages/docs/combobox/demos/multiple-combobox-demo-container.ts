import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { MultipleComboboxDemo } from './multiple-combobox-demo';

@Component({
  selector: 'app-multiple-combobox-demo-container',
  imports: [DemoContainer, MultipleComboboxDemo],
  template: `
    <app-demo-container title="Multiple Selection" [code]="code">
      <app-multiple-combobox-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultipleComboboxDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ComboboxOption, ScCombobox } from '@semantic-components/ui';

@Component({
  selector: 'app-multiple-combobox-demo',
  imports: [ScCombobox],
  template: \`
    <div class="space-y-4">
      <sc-combobox
        [multiple]="true"
        [(values)]="selectedLanguages"
        [options]="languages"
        placeholder="Select languages..."
        searchPlaceholder="Search language..."
      />
      @if (selectedLanguages().length > 0) {
        <p class="text-sm text-muted-foreground">
          Selected: {{ selectedLanguages().join(', ') }}
        </p>
      }
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultipleComboboxDemo {
  readonly selectedLanguages = signal<string[]>([]);

  readonly languages: ComboboxOption[] = [
    { value: 'en', label: 'English' },
    { value: 'fr', label: 'French' },
    { value: 'de', label: 'German' },
    { value: 'es', label: 'Spanish' },
    { value: 'pt', label: 'Portuguese' },
    { value: 'ja', label: 'Japanese' },
    { value: 'zh', label: 'Chinese' },
  ];
}`;
}
