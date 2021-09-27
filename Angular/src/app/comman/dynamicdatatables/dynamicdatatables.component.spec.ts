import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DynamicdatatablesComponent } from './dynamicdatatables.component';

describe('DynamicdatatablesComponent', () => {
  let component: DynamicdatatablesComponent;
  let fixture: ComponentFixture<DynamicdatatablesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicdatatablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicdatatablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
