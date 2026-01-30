import { Route } from '@angular/router';
import { MainLayout } from './layouts/main-layout/main-layout';

export const appRoutes: Route[] = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/home/home'),
      },
      {
        path: 'sidebar-demo',
        loadChildren: () => import('./pages/sidebar-demo/sidebar-demo.routes'),
      },
    ],
  },
];
