import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveInactiveUserComponent } from './active-inactive-user.component';

describe('ActiveInactiveUserComponent', () => {
  let component: ActiveInactiveUserComponent;
  let fixture: ComponentFixture<ActiveInactiveUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActiveInactiveUserComponent]
    });
    fixture = TestBed.createComponent(ActiveInactiveUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
