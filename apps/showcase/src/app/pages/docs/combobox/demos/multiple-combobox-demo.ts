import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ComboboxOption, ScCombobox } from '@semantic-components/ui';

@Component({
  selector: 'app-multiple-combobox-demo',
  imports: [ScCombobox],
  template: `
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
  `,
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
}
