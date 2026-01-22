import { Route } from '@angular/router';
import { componentsRoutes } from './routes/components.routes';
import { StackedLayout } from './components/stacked-layout/stacked-layout';

export const appRoutes: Route[] = [
  // Component documentation routes under /docs/components
  ...componentsRoutes,
  {
    path: '',
    component: StackedLayout,
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/home/home'),
      },
    ],
  },
];
