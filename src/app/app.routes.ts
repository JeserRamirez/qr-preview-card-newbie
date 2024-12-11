import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'qr-code',
    loadComponent: () => import('./qr-preview/qr-preview.component'),
  },
  {
    path: '',
    redirectTo: 'qr-code',
    pathMatch: 'full',
  },
];
