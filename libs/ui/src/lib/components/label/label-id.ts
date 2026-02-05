import { InjectionToken } from '@angular/core';

export interface ScFieldIdContext {
  id: () => string;
}

export const SC_FIELD_ID = new InjectionToken<ScFieldIdContext>('SC_FIELD_ID');
