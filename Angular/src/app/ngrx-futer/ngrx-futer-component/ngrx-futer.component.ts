import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { getCount, getName } from '../state/ngrx-selecter';

@Component({
  selector: 'app-ngrx-futer',
  templateUrl: './ngrx-futer.component.html',
  styleUrls: ['./ngrx-futer.component.scss']
})
export class NgrxFuterComponent implements OnInit {

  counter$:Observable<number>;
  name$:Observable<string>;
  data: any;
  constructor(private store:Store<AppState>,private formBuilder: UntypedFormBuilder, ) { }
  
  arr=[{opt:true,name:"vijju"},{opt:false,name:"Raja"},{opt:true,name:"Venky"}]
  
  ngOnInit(): void {
    this.counter$=this.store.select(getCount)
    // console.log(this.counter$)
    this.name$=this.store.select(getName)
    this.store.select(getName).subscribe(data=>{
      // console.log(data);
      this.data=data;
    })

    let group={};
    this.arr.forEach(d=>{
      
    })
    
  }

 

}
