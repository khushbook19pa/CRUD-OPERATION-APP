import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/models/user';
import { StorageService } from 'src/app/services/storage.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private storageService: StorageService) {}

  dataSource: MatTableDataSource<User> | undefined;
  displayedColumns: string[] = ['name', 'email', 'phone', 'createdAt'];

  ngOnInit(): void {
    const usersData = this.storageService.getUserData();
    this.dataSource = new MatTableDataSource(usersData);
  }

  ngAfterViewInit() {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }
}
