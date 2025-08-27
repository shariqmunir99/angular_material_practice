import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Comp1 } from './components/comp-1/comp-1';

const routes: Routes = [
  { path: 'comp-1', component: Comp1 },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Mod1RoutingModule { }
