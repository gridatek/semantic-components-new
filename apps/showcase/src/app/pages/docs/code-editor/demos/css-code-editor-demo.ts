import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScCodeEditor } from '@semantic-components/ui';

@Component({
  selector: 'app-css-code-editor-demo',
  imports: [ScCodeEditor],
  template: `
    <sc-code-editor
      [(value)]="cssCode"
      [language]="'css'"
      [filename]="'styles.css'"
      [maxHeight]="'250px'"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CssCodeEditorDemo {
  cssCode = `/* CSS Example */
:root {
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}

.button {
  background-color: var(--primary-color);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.button:hover {
  background-color: var(--secondary-color);
  transform: translateY(-2px);
}`;
}
