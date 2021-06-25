import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FunctionsComponent } from '../functions/functions.component';



const routes: Routes = [

  {path:'fun',component:FunctionsComponent},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RouterFunModuleModule { }
