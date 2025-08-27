import { NgModule } from '@angular/core';

import { Mod1RoutingModule } from './mod-1-routing-module';
import { Comp1 } from './components/comp-1/comp-1';
import { CommonMod } from '../common/common-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [Comp1],
  imports: [
    Mod1RoutingModule,
    CommonMod,
    ReactiveFormsModule,
    MatDividerModule,
    MatRadioModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonToggleModule,
    FormsModule,
    MatTooltipModule,
  ],
  exports: [Comp1],
})
export class Mod1Module {}
