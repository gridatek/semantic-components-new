import { Route } from '@angular/router';

export const demosRoutes: Route[] = [
  {
    path: 'demos/table',
    children: [
      {
        path: 'basic-table-demo',
        loadComponent: () =>
          import('../pages/docs/table/demos/basic-table-demo').then(
            (m) => m.BasicTableDemo,
          ),
      },
      {
        path: 'caption-table-demo',
        loadComponent: () =>
          import('../pages/docs/table/demos/caption-table-demo').then(
            (m) => m.CaptionTableDemo,
          ),
      },
      {
        path: 'footer-table-demo',
        loadComponent: () =>
          import('../pages/docs/table/demos/footer-table-demo').then(
            (m) => m.FooterTableDemo,
          ),
      },
      {
        path: 'users-table-demo',
        loadComponent: () =>
          import('../pages/docs/table/demos/users-table-demo').then(
            (m) => m.UsersTableDemo,
          ),
      },
    ],
  },
];
