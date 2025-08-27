import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    { path: '', redirectTo: 'mod-1/comp-1', pathMatch: 'full' },
    {
        path: 'mod-1',
        loadChildren: () => import('./mod-1/mod-1-module').then(m => m.Mod1Module)
    }
    ,
    {
        path: 'mod-2',
        loadChildren: () => import('./mod-2/mod-2-module').then(m => m.Mod2Module)
    }
];
