import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Comp1 } from '../../../mod-1/components/comp-1/comp-1';
import { max } from 'rxjs';

@Component({
  selector: 'app-comp-2',
  standalone: false,
  templateUrl: './comp-2.html',
  styleUrl: './comp-2.scss'
})
export class Comp2 {

  readonly dialog = inject(MatDialog)
  onClick() {
    const dialogRef = this.dialog.open(Comp1, {
      width: '1000px',
      height: '500px',
      maxWidth: '1310px',
      maxHeight: '680px',
      panelClass: 'custom-dialog'
    })

    dialogRef.afterClosed().subscribe(result => { console.log(result) })

  }
}
