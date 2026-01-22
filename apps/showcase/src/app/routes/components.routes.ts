import { Route } from '@angular/router';
import { ComponentsLayout } from '../layouts/components-layout/components-layout';

export const componentsRoutes: Route[] = [
  {
    path: 'docs/components',
    component: ComponentsLayout,
    children: [
      {
        path: '',
        loadComponent: () => import('../pages/docs/components/components-page'),
      },
      {
        path: 'button',
        loadComponent: () => import('../pages/docs/button/button.page'),
      },
    ],
  },
];
