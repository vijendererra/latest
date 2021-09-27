import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicDataTablesComponent } from './dynamic-data-tables/dynamic-data-tables.component';
import { RouterDynamicDataTablesModule } from './router-dynamic-data-tables/router-dynamic-data-tables.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [DynamicDataTablesComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterDynamicDataTablesModule
  ]
})
export class DynamicDataTablesModule { }
