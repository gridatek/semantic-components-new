import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScDiffViewer } from '@semantic-components/ui';

@Component({
  selector: 'app-diff-viewer-demo',
  imports: [ScDiffViewer],
  template: `
    <div class="space-y-8">
      <!-- Basic Code Diff -->
      <section>
        <h3 class="text-lg font-semibold mb-4">Code Changes</h3>
        <sc-diff-viewer
          [oldText]="oldCode"
          [newText]="newCode"
          [oldTitle]="'main.ts (original)'"
          [newTitle]="'main.ts (modified)'"
        />
      </section>

      <!-- Text Diff -->
      <section>
        <h3 class="text-lg font-semibold mb-4">Text Comparison</h3>
        <sc-diff-viewer
          [oldText]="oldText"
          [newText]="newText"
          [oldTitle]="'Draft v1'"
          [newTitle]="'Draft v2'"
          [defaultViewMode]="'unified'"
        />
      </section>

      <!-- JSON Diff -->
      <section>
        <h3 class="text-lg font-semibold mb-4">JSON Configuration</h3>
        <sc-diff-viewer
          [oldText]="oldJson"
          [newText]="newJson"
          [oldTitle]="'config.json (before)'"
          [newTitle]="'config.json (after)'"
        />
      </section>

      <!-- Minimal (No Headers) -->
      <section>
        <h3 class="text-lg font-semibold mb-4">Minimal View</h3>
        <sc-diff-viewer
          [oldText]="oldMinimal"
          [newText]="newMinimal"
          [showHeader]="false"
          [showFooter]="false"
          [showSideHeaders]="false"
          [maxHeight]="'200px'"
        />
      </section>

      <!-- Ignore Whitespace -->
      <section>
        <h3 class="text-lg font-semibold mb-4">Ignore Whitespace</h3>
        <p class="text-sm text-muted-foreground mb-4">
          The following texts differ only in whitespace but are shown as
          identical.
        </p>
        <sc-diff-viewer
          [oldText]="'hello   world'"
          [newText]="'hello world'"
          [ignoreWhitespace]="true"
          [showFooter]="false"
        />
      </section>

      <!-- Large Diff -->
      <section>
        <h3 class="text-lg font-semibold mb-4">Large File Comparison</h3>
        <sc-diff-viewer
          [oldText]="oldLarge"
          [newText]="newLarge"
          [oldTitle]="'data.ts'"
          [newTitle]="'data.ts'"
          [maxHeight]="'400px'"
        />
      </section>

      <!-- No Differences -->
      <section>
        <h3 class="text-lg font-semibold mb-4">Identical Files</h3>
        <sc-diff-viewer
          [oldText]="'const x = 1;
const y = 2;'"
          [newText]="'const x = 1;
const y = 2;'"
          [oldTitle]="'file.ts'"
          [newTitle]="'file.ts'"
        />
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DiffViewerDemoComponent {
  oldCode = `import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<h1>Hello World</h1>',
})
export class AppComponent {
  title = 'my-app';

  ngOnInit() {
    console.log('App initialized');
  }
}`;

  newCode = `import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  template: '<h1>{{ title }}</h1>',
  imports: [CommonModule],
})
export class AppComponent implements OnInit {
  title = 'My Application';

  ngOnInit(): void {
    console.log('App initialized');
    this.loadData();
  }

  private loadData(): void {
    // Load initial data
  }
}`;

  oldText = `The quick brown fox jumps over the lazy dog.

This is the first paragraph of our document.
It contains some important information.

The second paragraph discusses other topics.`;

  newText = `The quick brown fox leaps over the lazy dog.

This is the first paragraph of our revised document.
It contains some important and updated information.

The second paragraph discusses additional topics.

A new third paragraph has been added.`;

  oldJson = `{
  "name": "my-project",
  "version": "1.0.0",
  "description": "A sample project",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "jest"
  },
  "dependencies": {
    "express": "^4.17.0"
  }
}`;

  newJson = `{
  "name": "my-project",
  "version": "1.1.0",
  "description": "A sample project with updates",
  "main": "dist/index.js",
  "scripts": {
    "start": "node dist/index.js",
    "build": "tsc",
    "test": "jest --coverage"
  },
  "dependencies": {
    "express": "^4.18.0",
    "cors": "^2.8.5"
  },
  "devDependencies": {
    "typescript": "^5.0.0"
  }
}`;

  oldMinimal = `Line 1
Line 2
Line 3`;

  newMinimal = `Line 1
Modified Line 2
Line 3
New Line 4`;

  oldLarge = `// User Service
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = '/api/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(\`\${this.apiUrl}/\${id}\`);
  }

  createUser(user: Omit<User, 'id'>): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  updateUser(id: number, user: Partial<User>): Observable<User> {
    return this.http.put<User>(\`\${this.apiUrl}/\${id}\`, user);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(\`\${this.apiUrl}/\${id}\`);
  }
}`;

  newLarge = `// User Service - Updated
import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, catchError, retry } from 'rxjs';
import { environment } from '../environments/environment';

export interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user';
  createdAt: Date;
}

export interface UserFilters {
  role?: string;
  search?: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl + '/users';

  getUsers(filters?: UserFilters): Observable<User[]> {
    let params = new HttpParams();
    if (filters?.role) {
      params = params.set('role', filters.role);
    }
    if (filters?.search) {
      params = params.set('search', filters.search);
    }
    return this.http.get<User[]>(this.apiUrl, { params }).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(\`\${this.apiUrl}/\${id}\`).pipe(
      catchError(this.handleError)
    );
  }

  createUser(user: Omit<User, 'id' | 'createdAt'>): Observable<User> {
    return this.http.post<User>(this.apiUrl, user).pipe(
      catchError(this.handleError)
    );
  }

  updateUser(id: number, user: Partial<User>): Observable<User> {
    return this.http.patch<User>(\`\${this.apiUrl}/\${id}\`, user).pipe(
      catchError(this.handleError)
    );
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(\`\${this.apiUrl}/\${id}\`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<never> {
    console.error('UserService error:', error);
    throw error;
  }
}`;
}
