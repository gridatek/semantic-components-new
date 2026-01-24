import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScCodeEditor } from '@semantic-components/ui';

@Component({
  selector: 'app-python-code-editor-demo',
  imports: [ScCodeEditor],
  template: `
    <sc-code-editor
      [(value)]="pythonCode"
      [language]="'python'"
      [filename]="'script.py'"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PythonCodeEditorDemo {
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
}
