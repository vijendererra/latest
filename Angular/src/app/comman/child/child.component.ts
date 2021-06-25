import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor() { }

  private _viewchild: boolean;

  get viewchild() {
    return this._viewchild;
  }
  @Input()
  set viewchild(val: boolean) {
    // console.log(val);
      this._viewchild = val;
  }


  ngOnInit() {
  }

}
