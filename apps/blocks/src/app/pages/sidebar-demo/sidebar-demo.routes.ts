import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('./sidebar-demo.page'),
  },
] satisfies Routes;
