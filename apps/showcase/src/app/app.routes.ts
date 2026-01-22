import { Route } from '@angular/router';
import { StackedLayout } from './components/stacked-layout/stacked-layout';
import { componentsRoutes } from './routes/components.routes';

export const appRoutes: Route[] = [
  {
    path: '',
    component: StackedLayout,
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/home/home'),
      },
      ...componentsRoutes,
    ],
  },
];
