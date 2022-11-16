import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { HourlyData } from 'src/app/models/forecastModel';
import { serviceHandeling } from 'src/app/services/service-handeling';
import { timer } from 'rxjs'
@Component({
  selector: 'app-history-table',
  templateUrl: './history-table.component.html',
  styleUrls: ['./history-table.component.scss']
})

export class HistoryTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<HourlyData>;

  dataSource: MatTableDataSource<HourlyData>;
  post: any;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['time', 'temperature_2m', 'relativehumidity_2m', 'weathercode', 'surface_pressure', 'windspeed_10m'];

  constructor(private data: serviceHandeling) {
    this.post = this.data.hourlyDataHistory;
    this.dataSource = new MatTableDataSource(this.post);
  }
  ngAfterViewInit(): void {
    timer(100).subscribe(functino => {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;
    })
  }
  // searching bar logic
  applyFilter(event: Event) {
    console.log('ahoj');
    
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
