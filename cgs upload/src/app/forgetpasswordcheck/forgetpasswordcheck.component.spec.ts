import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetpasswordcheckComponent } from './forgetpasswordcheck.component';

describe('ForgetpasswordcheckComponent', () => {
  let component: ForgetpasswordcheckComponent;
  let fixture: ComponentFixture<ForgetpasswordcheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgetpasswordcheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetpasswordcheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
