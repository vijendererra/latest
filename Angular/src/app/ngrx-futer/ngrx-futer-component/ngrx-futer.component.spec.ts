import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxFuterComponent } from './ngrx-futer.component';

describe('NgrxFuterComponent', () => {
  let component: NgrxFuterComponent;
  let fixture: ComponentFixture<NgrxFuterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgrxFuterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxFuterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
