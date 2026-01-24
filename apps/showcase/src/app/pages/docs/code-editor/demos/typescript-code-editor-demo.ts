import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScCodeEditor } from '@semantic-components/ui';

@Component({
  selector: 'app-typescript-code-editor-demo',
  imports: [ScCodeEditor],
  template: `
    <sc-code-editor
      [(value)]="typescriptCode"
      [language]="'typescript'"
      [filename]="'component.ts'"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TypescriptCodeEditorDemo {
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
}
