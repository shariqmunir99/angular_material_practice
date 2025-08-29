import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Mod2RoutingModule } from './mod-2-routing-module';
import { Comp2 } from './components/comp-2/comp-2';
import { Comp1 } from '../mod-1/components/comp-1/comp-1';
import { Mod1Module } from '../mod-1/mod-1-module';
import { CommonMod } from '../common/common-module';
import { TableModule } from '../table-module/table-module-module';

@NgModule({
  declarations: [Comp2],
  imports: [Mod2RoutingModule, Mod1Module, TableModule, CommonMod],
})
export class Mod2Module {}
