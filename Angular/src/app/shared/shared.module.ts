import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {MeterialModule} from '../meterial/meterial.module';
import {DialogModule} from 'primeng/dialog';
import { ChildComponent } from '../comman/child/child.component';
import { DndModule } from 'ngx-drag-drop';
import { DynamicdatatablesComponent } from '../comman/dynamicdatatables/dynamicdatatables.component';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { MatTabsModule } from '@angular/material/tabs';



@NgModule({
 
  imports: [
    CommonModule,
    ButtonModule,
    ButtonModule,
    MeterialModule,
    DialogModule,
    ReactiveFormsModule,
    FormsModule,
    DndModule,
    Ng2FilterPipeModule,
    MatTabsModule
    
  ],
  declarations: [
    ChildComponent,
    DynamicdatatablesComponent,
  ],
  exports:[
    CommonModule,
    ButtonModule,
    ButtonModule,
    MeterialModule,
    DialogModule,
    ReactiveFormsModule,
    FormsModule,
    DndModule,
    Ng2FilterPipeModule ,
    MatTabsModule,

    ChildComponent,
    DynamicdatatablesComponent,


  ]
})
export class SharedModule { }
