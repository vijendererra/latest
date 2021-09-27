import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-dynamicdatatables',
  templateUrl: './dynamicdatatables.component.html',
  styleUrls: ['./dynamicdatatables.component.scss']
})
export class DynamicdatatablesComponent implements OnInit {
  allData = [];
  timer: NodeJS.Timer;
  columnArray = [];


  constructor() { }

  pageSize = 4;
  totalSize = 20;
  currentPage = 0;
  @Output() emitactions: EventEmitter <any>  = new EventEmitter();
  @Input()
  set tableData(val) {
    // console.log()
    this.tableViwe(val)
  }
  displayedColumns: string[]
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  dataTable;
  ngOnInit() {
  }

  tableViwe(data) {
    if (data != undefined) {
      const allData = data;
      this.displayedColumns = allData.displayColumns;
      this.displayedColumns.push("Actions")
      this.allData = allData.tableDta;
      this.dataTable = new MatTableDataSource(allData.tableDta);
      this.dataTable.paginator = this.paginator;
      this.dataTable.sort = this.sort;
      this.iterator();
    }
  }
  handlePage(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    console.log(this.currentPage)
    console.log(this.pageSize)
    this.iterator();
  }

  private iterator() {
    const end = (this.currentPage + 1) * this.pageSize;
    const start = this.currentPage * this.pageSize;
    // console.log(start, end)
    const part = this.allData.slice(start, end);
    // console.log(part)
    this.dataTable.data = part;
  }

  applayDebounce(val, colName) {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.applayFilter(val, colName)
    }, 500);
  }
  applayFilter(filterVal, columnName) {
    const val = filterVal;
    const clName = columnName;
    const obj = {
      columnName: clName,
      filterVal: val
    }
    if (val == "") {
      this.columnArray = []
      this.columnArray.forEach((ele, i) => {
        if (ele.columnName == clName) {
          this.columnArray.splice(i, 1);
        }
      });
    }
    else {
      if (this.columnArray.length > 0) {
        this.columnArray.forEach((ele, i) => {
          if (ele.columnName == clName) {
            this.columnArray.splice(i, 1);
          }
        });
        this.columnArray.push(obj);
      }
      else {
        this.columnArray.push(obj);
      }
    }
    console.log(this.columnArray);
  }


  action(action,row){
    const data={
      action:action,
      data:row,
    }
    this.emitactions.emit(data)
  }
}


