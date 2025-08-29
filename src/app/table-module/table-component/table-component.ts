import {
  Component,
  ViewChild,
  OnInit,
  AfterViewInit,
  signal,
  ChangeDetectorRef,
} from '@angular/core';
import { merge, startWith, switchMap, map, catchError, of, flatMap, Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { skip } from 'node:test';

interface row {
  id: string;
  title: string;
  price: number;
}

const url = 'https://dummyjson.com/products';

@Component({
  selector: 'app-table',
  templateUrl: './table-component.html',
  standalone: false,
})
export class StreamTableComponent {
  // Define which columns to display
  displayedColumns: string[] = ['id', 'title'];
  dataSource = new MatTableDataSource<row>();
  isLoading = signal(false);
  tableLength = signal(40);
  d: row[] = Array.from({ length: 40 }, (_, i) => ({
    id: (i + 1).toString(),
    title: `Product ${i + 1}`,
    price: Math.floor(Math.random() * 1000) + 1, // random price between 1–1000
  }));
  dummyData = new MatTableDataSource<row>(this.d);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private http: HttpClient, private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.paginator.page
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoading.set(true);
          return this.http.get<any>(url, {
            params: {
              limit: this.paginator.pageSize,
              skip: this.paginator.pageIndex * this.paginator.pageSize,
            },
          });
        }),
        map((data: any): row[] => {
          console.log('Fetched Data', data);
          this.isLoading.set(false);
          this.tableLength.set(data.total);
          this.paginator.length = data.total;
          return data.products.map(
            (d: { id: any; title: any; price: any }): row => ({
              id: d.id,
              title: d.title,
              price: d.price,
            })
          );
        })
      )
      .subscribe((rows) => {
        this.dataSource = new MatTableDataSource(rows);
      });
  }
}
