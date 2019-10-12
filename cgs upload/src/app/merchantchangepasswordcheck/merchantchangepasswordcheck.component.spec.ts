import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantchangepasswordcheckComponent } from './merchantchangepasswordcheck.component';

describe('MerchantchangepasswordcheckComponent', () => {
  let component: MerchantchangepasswordcheckComponent;
  let fixture: ComponentFixture<MerchantchangepasswordcheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantchangepasswordcheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantchangepasswordcheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
