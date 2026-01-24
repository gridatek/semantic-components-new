import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScCodeEditor } from '@semantic-components/ui';

@Component({
  selector: 'app-sql-code-editor-demo',
  imports: [ScCodeEditor],
  template: `
    <sc-code-editor
      [(value)]="sqlCode"
      [language]="'sql'"
      [filename]="'query.sql'"
      [maxHeight]="'200px'"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SqlCodeEditorDemo {
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
}
