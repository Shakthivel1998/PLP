import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangepasswordcheckComponent } from './changepasswordcheck.component';

describe('ChangepasswordcheckComponent', () => {
  let component: ChangepasswordcheckComponent;
  let fixture: ComponentFixture<ChangepasswordcheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangepasswordcheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangepasswordcheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
