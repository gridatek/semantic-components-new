import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScCodeEditor } from '@semantic-components/ui';

@Component({
  selector: 'app-basic-code-editor-demo',
  imports: [ScCodeEditor],
  template: `
    <sc-code-editor
      [(value)]="javascriptCode"
      [language]="'javascript'"
      [filename]="'example.js'"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicCodeEditorDemo {
  javascriptCode = `// JavaScript Example
function greet(name) {
  const greeting = \`Hello, \${name}!\`;
  console.log(greeting);
  return greeting;
}

const users = ['Alice', 'Bob', 'Charlie'];
users.forEach(user => greet(user));

// Arrow function with async/await
const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
};`;
}
