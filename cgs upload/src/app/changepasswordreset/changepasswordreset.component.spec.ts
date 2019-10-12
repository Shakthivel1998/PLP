import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangepasswordresetComponent } from './changepasswordreset.component';

describe('ChangepasswordresetComponent', () => {
  let component: ChangepasswordresetComponent;
  let fixture: ComponentFixture<ChangepasswordresetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangepasswordresetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangepasswordresetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
