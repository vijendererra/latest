import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudComponent } from './crud-compnet/crud.component';
import {SharedModule} from '../shared/shared.module';

import{CrudRoutingModule} from './crud-routing/crud-routing.module'
@NgModule({
  declarations: [CrudComponent ],
  imports: [
    CommonModule,
    SharedModule,
    CrudRoutingModule
  ]
})
export class CrudModule { }
