import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantforgotpasswordresetComponent } from './merchantforgotpasswordreset.component';

describe('MerchantforgotpasswordresetComponent', () => {
  let component: MerchantforgotpasswordresetComponent;
  let fixture: ComponentFixture<MerchantforgotpasswordresetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantforgotpasswordresetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantforgotpasswordresetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
