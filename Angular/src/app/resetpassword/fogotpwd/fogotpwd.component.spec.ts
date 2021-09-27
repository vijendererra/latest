import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FogotpwdComponent } from './fogotpwd.component';

describe('FogotpwdComponent', () => {
  let component: FogotpwdComponent;
  let fixture: ComponentFixture<FogotpwdComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FogotpwdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FogotpwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
