import { Route } from '@angular/router';
import { StackedLayout } from './components/stacked-layout/stacked-layout';
import { ComponentsLayout } from './layouts/components-layout/components-layout';

export const appRoutes: Route[] = [
  {
    path: '',
    component: StackedLayout,
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/home/home'),
      },
      {
        path: 'docs/components',
        component: ComponentsLayout,
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./pages/docs/components/components-page'),
          },
          {
            path: 'button',
            loadComponent: () => import('./pages/docs/button/button.page'),
          },
        ],
      },
    ],
  },
];
