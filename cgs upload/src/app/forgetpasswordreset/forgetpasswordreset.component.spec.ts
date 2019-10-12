import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetpasswordresetComponent } from './forgetpasswordreset.component';

describe('ForgetpasswordresetComponent', () => {
  let component: ForgetpasswordresetComponent;
  let fixture: ComponentFixture<ForgetpasswordresetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgetpasswordresetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetpasswordresetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
