import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantchangepasswordresetComponent } from './merchantchangepasswordreset.component';

describe('MerchantchangepasswordresetComponent', () => {
  let component: MerchantchangepasswordresetComponent;
  let fixture: ComponentFixture<MerchantchangepasswordresetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantchangepasswordresetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantchangepasswordresetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
