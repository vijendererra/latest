import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {MeterialModule} from '../meterial/meterial.module';
import {DialogModule} from 'primeng/dialog';
import { ChildComponent } from '../comman/child/child.component';




@NgModule({
 
  imports: [
    CommonModule,
    ButtonModule,
    ButtonModule,
    MeterialModule,
    DialogModule,
    ReactiveFormsModule,
    FormsModule,
    
  ],
  declarations: [
    ChildComponent
  ],
  exports:[
    CommonModule,
    ButtonModule,
    ButtonModule,
    MeterialModule,
    DialogModule,
    ReactiveFormsModule,
    FormsModule,
    ChildComponent
    
  ]
})
export class SharedModule { }
