import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  ScCodeEditor,
  THEMES,
  Language,
  CodeEditorLanguage,
} from '@semantic-components/ui';

@Component({
  selector: 'app-code-editor-demo',
  imports: [ScCodeEditor, FormsModule],
  template: `
    <div class="space-y-8">
      <!-- Basic Example -->
      <section>
        <h3 class="text-lg font-semibold mb-4">Basic Editor</h3>
        <sc-code-editor
          [(value)]="javascriptCode"
          [language]="'javascript'"
          [filename]="'example.js'"
        />
      </section>

      <!-- TypeScript Example -->
      <section>
        <h3 class="text-lg font-semibold mb-4">TypeScript</h3>
        <sc-code-editor
          [(value)]="typescriptCode"
          [language]="'typescript'"
          [filename]="'component.ts'"
        />
      </section>

      <!-- HTML Example -->
      <section>
        <h3 class="text-lg font-semibold mb-4">HTML</h3>
        <sc-code-editor
          [(value)]="htmlCode"
          [language]="'html'"
          [filename]="'index.html'"
        />
      </section>

      <!-- CSS Example -->
      <section>
        <h3 class="text-lg font-semibold mb-4">CSS</h3>
        <sc-code-editor
          [(value)]="cssCode"
          [language]="'css'"
          [filename]="'styles.css'"
          [maxHeight]="'250px'"
        />
      </section>

      <!-- JSON Example -->
      <section>
        <h3 class="text-lg font-semibold mb-4">JSON</h3>
        <sc-code-editor
          [(value)]="jsonCode"
          [language]="'json'"
          [filename]="'config.json'"
          [maxHeight]="'250px'"
        />
      </section>

      <!-- Python Example -->
      <section>
        <h3 class="text-lg font-semibold mb-4">Python</h3>
        <sc-code-editor
          [(value)]="pythonCode"
          [language]="'python'"
          [filename]="'script.py'"
        />
      </section>

      <!-- SQL Example -->
      <section>
        <h3 class="text-lg font-semibold mb-4">SQL</h3>
        <sc-code-editor
          [(value)]="sqlCode"
          [language]="'sql'"
          [filename]="'query.sql'"
          [maxHeight]="'200px'"
        />
      </section>

      <!-- Light Theme -->
      <section>
        <h3 class="text-lg font-semibold mb-4">Light Theme</h3>
        <sc-code-editor
          [(value)]="lightThemeCode"
          [language]="'javascript'"
          [theme]="lightTheme"
          [filename]="'light-example.js'"
        />
      </section>

      <!-- Readonly Mode -->
      <section>
        <h3 class="text-lg font-semibold mb-4">Readonly Mode</h3>
        <sc-code-editor
          [value]="readonlyCode"
          [language]="'typescript'"
          [readonly]="true"
          [filename]="'readonly.ts'"
          [maxHeight]="'200px'"
        />
      </section>

      <!-- Minimal (No Header/Footer) -->
      <section>
        <h3 class="text-lg font-semibold mb-4">Minimal (No Header/Footer)</h3>
        <sc-code-editor
          [(value)]="minimalCode"
          [language]="'javascript'"
          [showHeader]="false"
          [showFooter]="false"
          [maxHeight]="'150px'"
        />
      </section>

      <!-- Word Wrap -->
      <section>
        <h3 class="text-lg font-semibold mb-4">Word Wrap Enabled</h3>
        <sc-code-editor
          [(value)]="longLineCode"
          [language]="'markdown'"
          [filename]="'README.md'"
          [wordWrap]="true"
          [maxHeight]="'200px'"
        />
      </section>

      <!-- Interactive Controls -->
      <section>
        <h3 class="text-lg font-semibold mb-4">Interactive Editor</h3>
        <div class="flex flex-wrap gap-4 mb-4">
          <div>
            <label class="block text-sm font-medium mb-1">Language</label>
            <select
              [ngModel]="selectedLanguage()"
              (ngModelChange)="selectedLanguage.set($event)"
              class="px-3 py-1.5 border rounded-md bg-background"
            >
              <option value="javascript">JavaScript</option>
              <option value="typescript">TypeScript</option>
              <option value="html">HTML</option>
              <option value="css">CSS</option>
              <option value="json">JSON</option>
              <option value="python">Python</option>
              <option value="sql">SQL</option>
              <option value="markdown">Markdown</option>
              <option value="plaintext">Plain Text</option>
            </select>
          </div>
          <div class="flex items-end gap-4">
            <label class="flex items-center gap-2">
              <input
                type="checkbox"
                [ngModel]="showLineNumbers()"
                (ngModelChange)="showLineNumbers.set($event)"
                class="rounded"
              />
              <span class="text-sm">Line Numbers</span>
            </label>
            <label class="flex items-center gap-2">
              <input
                type="checkbox"
                [ngModel]="wordWrapEnabled()"
                (ngModelChange)="wordWrapEnabled.set($event)"
                class="rounded"
              />
              <span class="text-sm">Word Wrap</span>
            </label>
          </div>
        </div>
        <sc-code-editor
          [(value)]="interactiveCode"
          [language]="selectedLanguage()"
          [showLineNumbers]="showLineNumbers()"
          [wordWrap]="wordWrapEnabled()"
          [filename]="'interactive.' + getExtension(selectedLanguage())"
          (cursorChange)="onCursorChange($event)"
        />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeEditorDemo {
  readonly lightTheme = THEMES['light'];

  readonly selectedLanguage = signal<CodeEditorLanguage>('javascript');
  readonly showLineNumbers = signal(true);
  readonly wordWrapEnabled = signal(false);

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

  typescriptCode = `// TypeScript Example
interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

class UserService {
  private users: User[] = [];

  async getUser(id: number): Promise<User | undefined> {
    return this.users.find(user => user.id === id);
  }

  addUser(user: Omit<User, 'id'>): User {
    const newUser: User = {
      ...user,
      id: this.users.length + 1,
    };
    this.users.push(newUser);
    return newUser;
  }
}

const service = new UserService();`;

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

  jsonCode = `{
  "name": "my-project",
  "version": "1.0.0",
  "scripts": {
    "start": "node server.js",
    "build": "webpack --mode production",
    "test": "jest"
  },
  "dependencies": {
    "express": "^4.18.0",
    "lodash": "^4.17.21"
  },
  "devDependencies": {
    "typescript": "^5.0.0"
  }
}`;

  pythonCode = `# Python Example
from typing import List, Optional
import asyncio

class DataProcessor:
    """Process data with various transformations."""

    def __init__(self, data: List[dict]):
        self.data = data
        self._cache = {}

    async def process(self) -> List[dict]:
        results = []
        for item in self.data:
            processed = await self._transform(item)
            results.append(processed)
        return results

    async def _transform(self, item: dict) -> dict:
        # Simulate async processing
        await asyncio.sleep(0.1)
        return {**item, 'processed': True}

# Usage
if __name__ == '__main__':
    data = [{'id': 1}, {'id': 2}, {'id': 3}]
    processor = DataProcessor(data)
    result = asyncio.run(processor.process())
    print(result)`;

  sqlCode = `-- SQL Example
SELECT
    u.id,
    u.name,
    u.email,
    COUNT(o.id) AS order_count,
    SUM(o.total) AS total_spent
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE u.created_at >= '2024-01-01'
    AND u.is_active = true
GROUP BY u.id, u.name, u.email
HAVING COUNT(o.id) > 0
ORDER BY total_spent DESC
LIMIT 10;`;

  lightThemeCode = `// Light theme example
const calculateSum = (numbers) => {
  return numbers.reduce((acc, num) => acc + num, 0);
};

const numbers = [1, 2, 3, 4, 5];
console.log('Sum:', calculateSum(numbers));`;

  readonlyCode = `// This code is readonly
export const CONFIG = {
  apiUrl: 'https://api.example.com',
  timeout: 5000,
  retries: 3,
} as const;`;

  minimalCode = `const hello = "world";
console.log(hello);`;

  longLineCode = `# Long Line Example

This is a very long line that demonstrates word wrapping in the code editor. When word wrap is enabled, long lines like this one will automatically wrap to the next line instead of requiring horizontal scrolling.

## Features
- Syntax highlighting
- Line numbers
- Word wrap support`;

  interactiveCode = `// Try changing the language!
function example() {
  return "Hello, World!";
}`;

  onCursorChange(position: { line: number; column: number }): void {
    console.log('Cursor position:', position);
  }

  getExtension(lang: CodeEditorLanguage): string {
    const extensions: Record<CodeEditorLanguage, string> = {
      javascript: 'js',
      typescript: 'ts',
      html: 'html',
      css: 'css',
      json: 'json',
      python: 'py',
      sql: 'sql',
      markdown: 'md',
      plaintext: 'txt',
    };
    return extensions[lang] || 'txt';
  }
}
