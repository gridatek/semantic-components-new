import { Injectable, signal } from '@angular/core';
import { ToastConfig, ToastData } from './toast.types';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private readonly _toasts = signal<ToastData[]>([]);
  readonly toasts = this._toasts.asReadonly();

  private readonly defaultDuration = 5000;
  private toastCounter = 0;
  private timeouts = new Map<string, ReturnType<typeof setTimeout>>();

  /**
   * Show a new toast notification
   */
  show(config: ToastConfig): string {
    const id = `toast-${++this.toastCounter}`;
    const toast: ToastData = {
      id,
      title: config.title,
      description: config.description,
      variant: config.variant ?? 'default',
      action: config.action,
      duration: config.duration ?? this.defaultDuration,
    };

    this._toasts.update((toasts) => [...toasts, toast]);

    // Auto-dismiss after duration (if duration > 0)
    if (toast.duration && toast.duration > 0) {
      const timeout = setTimeout(() => {
        this.dismiss(id);
      }, toast.duration);
      this.timeouts.set(id, timeout);
    }

    return id;
  }

  /**
   * Dismiss a specific toast by ID
   */
  dismiss(id: string): void {
    // Clear timeout if exists
    const timeout = this.timeouts.get(id);
    if (timeout) {
      clearTimeout(timeout);
      this.timeouts.delete(id);
    }

    this._toasts.update((toasts) => toasts.filter((t) => t.id !== id));
  }

  /**
   * Dismiss all toasts
   */
  dismissAll(): void {
    this.timeouts.forEach((timeout) => clearTimeout(timeout));
    this.timeouts.clear();
    this._toasts.set([]);
  }
}
