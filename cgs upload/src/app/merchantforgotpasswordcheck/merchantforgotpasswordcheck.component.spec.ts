import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantforgotpasswordcheckComponent } from './merchantforgotpasswordcheck.component';

describe('MerchantforgotpasswordcheckComponent', () => {
  let component: MerchantforgotpasswordcheckComponent;
  let fixture: ComponentFixture<MerchantforgotpasswordcheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantforgotpasswordcheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantforgotpasswordcheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
