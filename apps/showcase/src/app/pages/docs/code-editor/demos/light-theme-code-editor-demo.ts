import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScCodeEditor, THEMES } from '@semantic-components/ui';

@Component({
  selector: 'app-light-theme-code-editor-demo',
  imports: [ScCodeEditor],
  template: `
    <sc-code-editor
      [(value)]="lightThemeCode"
      [language]="'javascript'"
      [theme]="lightTheme"
      [filename]="'light-example.js'"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LightThemeCodeEditorDemo {
  readonly lightTheme = THEMES['light'];

  lightThemeCode = `// Light theme example
const calculateSum = (numbers) => {
  return numbers.reduce((acc, num) => acc + num, 0);
};

const numbers = [1, 2, 3, 4, 5];
console.log('Sum:', calculateSum(numbers));`;
}
