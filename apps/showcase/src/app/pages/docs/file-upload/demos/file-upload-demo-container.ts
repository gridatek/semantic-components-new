import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoContainer } from '../../../../components/demo-container/demo-container';
import { ScFileUploadDemo } from './file-upload-demo';

@Component({
  selector: 'app-file-upload-demo-container',
  imports: [DemoContainer, ScFileUploadDemo],
  template: `
    <app-demo-container title="File" [code]="code">
      <app-sc-file-upload-demo />
    </app-demo-container>
  `,
  host: { class: 'block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScFileUploadDemoContainer {
  readonly code = `import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {
  ScFileUpload,
  ScFileUploadDropzone,
  ScFileUploadTrigger,
  ScFileUploadList,
  ScFileUploadItem,
  ScFileUploadItemPreview,
  ScFileUploadItemName,
  ScFileUploadItemSize,
  ScFileUploadItemDelete,
  ScFileUploadItemProgress,
  FileUploadFile,
} from '@semantic-components/ui';

@Component({
  selector: 'app-sc-file-upload-demo',
  imports: [
    ScFileUpload,
    ScFileUploadDropzone,
    ScFileUploadTrigger,
    ScFileUploadList,
    ScFileUploadItem,
    ScFileUploadItemPreview,
    ScFileUploadItemName,
    ScFileUploadItemSize,
    ScFileUploadItemDelete,
    ScFileUploadItemProgress,
  ],
  template: \`
    <div class="space-y-8">
      <!-- Basic Dropzone -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Dropzone</h3>
        <div class="max-w-lg">
          <div
            sc-file-upload
            [multiple]="true"
            [(files)]="dropzoneFiles"
            (error)="onError($event)"
          >
            <div sc-file-upload-dropzone class="p-8">
              <div class="flex flex-col items-center gap-2 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="size-10 text-muted-foreground"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" x2="12" y1="3" y2="15" />
                </svg>
                <div class="space-y-1">
                  <p class="text-sm font-medium">Drag and drop files here</p>
                  <p class="text-xs text-muted-foreground">
                    or click to browse
                  </p>
                </div>
              </div>
            </div>

            @if (dropzoneFiles().length > 0) {
              <div sc-file-upload-list>
                @for (file of dropzoneFiles(); track file.id) {
                  <div sc-file-upload-item [file]="file">
                    <div sc-file-upload-item-preview [file]="file">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="size-5 text-muted-foreground"
                      >
                        <path
                          d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                        />
                        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                      </svg>
                    </div>
                    <div class="flex-1 min-w-0">
                      <div sc-file-upload-item-name>{{ file.file.name }}</div>
                      <div sc-file-upload-item-size [file]="file"></div>
                    </div>
                    <button
                      sc-file-upload-item-delete
                      [fileId]="file.id"
                    ></button>
                  </div>
                }
              </div>
            }
          </div>
        </div>
      </div>

      <!-- Image Upload with Preview -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Image Upload with Preview</h3>
        <div class="max-w-lg">
          <div
            sc-file-upload
            [multiple]="true"
            accept="image/*"
            [maxSize]="5242880"
            [(files)]="imageFiles"
            (error)="onError($event)"
          >
            <div sc-file-upload-dropzone class="p-8">
              <div class="flex flex-col items-center gap-2 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="size-10 text-muted-foreground"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                  <circle cx="9" cy="9" r="2" />
                  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                </svg>
                <div class="space-y-1">
                  <p class="text-sm font-medium">Upload images</p>
                  <p class="text-xs text-muted-foreground">
                    PNG, JPG up to 5MB
                  </p>
                </div>
              </div>
            </div>

            @if (imageFiles().length > 0) {
              <div sc-file-upload-list>
                @for (file of imageFiles(); track file.id) {
                  <div sc-file-upload-item [file]="file">
                    <div
                      sc-file-upload-item-preview
                      [file]="file"
                      class="size-12 rounded-md"
                    ></div>
                    <div class="flex-1 min-w-0">
                      <div sc-file-upload-item-name>{{ file.file.name }}</div>
                      <div sc-file-upload-item-size [file]="file"></div>
                    </div>
                    <button
                      sc-file-upload-item-delete
                      [fileId]="file.id"
                    ></button>
                  </div>
                }
              </div>
            }
          </div>
        </div>
      </div>

      <!-- Button Trigger -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Button Trigger</h3>
        <div class="max-w-lg">
          <div
            sc-file-upload
            [multiple]="true"
            [(files)]="buttonFiles"
            (error)="onError($event)"
          >
            <button sc-file-upload-trigger>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="size-4"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" x2="12" y1="3" y2="15" />
              </svg>
              Upload Files
            </button>

            @if (buttonFiles().length > 0) {
              <div sc-file-upload-list>
                @for (file of buttonFiles(); track file.id) {
                  <div sc-file-upload-item [file]="file">
                    <div sc-file-upload-item-preview [file]="file">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="size-5 text-muted-foreground"
                      >
                        <path
                          d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                        />
                        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                      </svg>
                    </div>
                    <div class="flex-1 min-w-0">
                      <div sc-file-upload-item-name>{{ file.file.name }}</div>
                      <div sc-file-upload-item-size [file]="file"></div>
                    </div>
                    <button
                      sc-file-upload-item-delete
                      [fileId]="file.id"
                    ></button>
                  </div>
                }
              </div>
            }
          </div>
        </div>
      </div>

      <!-- Single File -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">Single File</h3>
        <div class="max-w-lg">
          <div sc-file-upload [(files)]="singleFile" (error)="onError($event)">
            <div sc-file-upload-dropzone class="p-6">
              <div class="flex flex-col items-center gap-2 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="size-8 text-muted-foreground"
                >
                  <path
                    d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                  />
                  <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                  <path d="M12 12v6" />
                  <path d="m15 15-3-3-3 3" />
                </svg>
                <p class="text-sm text-muted-foreground">
                  {{
                    singleFile().length > 0
                      ? singleFile()[0].file.name
                      : 'Click or drag to upload'
                  }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- With Progress -->
      <div class="space-y-4">
        <h3 class="text-sm font-medium">With Progress Simulation</h3>
        <div class="max-w-lg">
          <div
            sc-file-upload
            [multiple]="true"
            [(files)]="progressFiles"
            (filesSelected)="simulateUpload($event)"
            (error)="onError($event)"
          >
            <div sc-file-upload-dropzone class="p-8">
              <div class="flex flex-col items-center gap-2 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="size-10 text-muted-foreground"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" x2="12" y1="3" y2="15" />
                </svg>
                <div class="space-y-1">
                  <p class="text-sm font-medium">Upload with progress</p>
                  <p class="text-xs text-muted-foreground">
                    Files will show upload progress
                  </p>
                </div>
              </div>
            </div>

            @if (progressFiles().length > 0) {
              <div sc-file-upload-list>
                @for (file of progressFiles(); track file.id) {
                  <div sc-file-upload-item [file]="file">
                    <div sc-file-upload-item-preview [file]="file">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="size-5 text-muted-foreground"
                      >
                        <path
                          d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                        />
                        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                      </svg>
                    </div>
                    <div class="flex-1 min-w-0 space-y-1">
                      <div class="flex items-center justify-between">
                        <div sc-file-upload-item-name>{{ file.file.name }}</div>
                        <div sc-file-upload-item-size [file]="file"></div>
                      </div>
                      @if (file.status === 'uploading') {
                        <div sc-file-upload-item-progress [file]="file"></div>
                      }
                      @if (file.status === 'complete') {
                        <p class="text-xs text-green-600">Upload complete</p>
                      }
                    </div>
                    <button
                      sc-file-upload-item-delete
                      [fileId]="file.id"
                    ></button>
                  </div>
                }
              </div>
            }
          </div>
        </div>
      </div>

      @if (errorMessage()) {
        <div
          class="rounded-lg border border-destructive bg-destructive/10 p-4 text-sm text-destructive"
        >
          {{ errorMessage() }}
        </div>
      }
    </div>
  \`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScFileUploadDemo {
  readonly dropzoneFiles = signal<FileUploadFile[]>([]);
  readonly imageFiles = signal<FileUploadFile[]>([]);
  readonly buttonFiles = signal<FileUploadFile[]>([]);
  readonly singleFile = signal<FileUploadFile[]>([]);
  readonly progressFiles = signal<FileUploadFile[]>([]);
  readonly errorMessage = signal<string>('');

  onError(message: string): void {
    this.errorMessage.set(message);
    setTimeout(() => this.errorMessage.set(''), 3000);
  }

  simulateUpload(_files: File[]): void {
    // Simulate upload progress for newly added files
    const currentFiles = this.progressFiles();
    const pendingFiles = currentFiles.filter((f) => f.status === 'pending');

    for (const file of pendingFiles) {
      let progress = 0;
      const interval = setInterval(() => {
        progress += Math.random() * 20;
        if (progress >= 100) {
          progress = 100;
          clearInterval(interval);
          this.progressFiles.update((files) =>
            files.map((f) =>
              f.id === file.id
                ? { ...f, progress: 100, status: 'complete' as const }
                : f,
            ),
          );
        } else {
          this.progressFiles.update((files) =>
            files.map((f) =>
              f.id === file.id
                ? { ...f, progress, status: 'uploading' as const }
                : f,
            ),
          );
        }
      }, 200);
    }
  }
}`;
}
