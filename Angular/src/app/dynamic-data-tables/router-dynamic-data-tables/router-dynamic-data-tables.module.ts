import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicDataTablesComponent } from '../dynamic-data-tables/dynamic-data-tables.component';

const routes: Routes = [

  {path:'',component:DynamicDataTablesComponent},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouterDynamicDataTablesModule { }
