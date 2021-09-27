import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ChangepwdComponent } from './changepwd.component';

describe('ChangepwdComponent', () => {
  let component: ChangepwdComponent;
  let fixture: ComponentFixture<ChangepwdComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangepwdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangepwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
