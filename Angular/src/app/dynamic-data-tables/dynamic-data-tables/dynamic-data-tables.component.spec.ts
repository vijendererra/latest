import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DynamicDataTablesComponent } from './dynamic-data-tables.component';

describe('DynamicDataTablesComponent', () => {
  let component: DynamicDataTablesComponent;
  let fixture: ComponentFixture<DynamicDataTablesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicDataTablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicDataTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
