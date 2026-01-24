import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScCodeEditor } from '@semantic-components/ui';

@Component({
  selector: 'app-html-code-editor-demo',
  imports: [ScCodeEditor],
  template: `
    <sc-code-editor
      [(value)]="htmlCode"
      [language]="'html'"
      [filename]="'index.html'"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HtmlCodeEditorDemo {
  htmlCode = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Page</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header class="header">
    <nav>
      <a href="/">Home</a>
      <a href="/about">About</a>
    </nav>
  </header>
  <main id="content">
    <h1>Welcome</h1>
    <p>This is a sample HTML document.</p>
  </main>
  <script src="app.js"></script>
</body>
</html>`;
}
