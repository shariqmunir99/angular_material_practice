import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Comp2 } from './components/comp-2/comp-2';

const routes: Routes = [
  {
    path: 'comp-2',
    component: Comp2
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Mod2RoutingModule { }
