import { Route } from '@angular/router';

export const componentsRoutes: Route[] = [
  {
    path: 'docs/components',
    loadComponent: () => import('../pages/docs/components/components-page'),
  },
];
