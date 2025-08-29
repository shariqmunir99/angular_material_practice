import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'mod-2/comp-2', pathMatch: 'full' },

  {
    path: 'mod-2',
    loadChildren: () => import('./mod-2/mod-2-module').then((m) => m.Mod2Module),
  },
];
