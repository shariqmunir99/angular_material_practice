import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StreamTableComponent } from './table-component/table-component';

// Angular Material modules
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [StreamTableComponent],
  imports: [CommonModule, MatTableModule, MatPaginatorModule, MatProgressBarModule],
  exports: [StreamTableComponent],
})
export class TableModule {}
