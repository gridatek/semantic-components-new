import { Route } from '@angular/router';
import { componentsRoutes } from './routes/components.routes';

export const appRoutes: Route[] = [
  // Component documentation routes under /docs/components
  ...componentsRoutes,
  {
    path: '',
    loadComponent: () => import('./pages/home/home-page'),
  },
];
