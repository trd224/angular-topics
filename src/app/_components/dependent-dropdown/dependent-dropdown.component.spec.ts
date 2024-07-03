import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependentDropdownComponent } from './dependent-dropdown.component';

describe('DependentDropdownComponent', () => {
  let component: DependentDropdownComponent;
  let fixture: ComponentFixture<DependentDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DependentDropdownComponent]
    });
    fixture = TestBed.createComponent(DependentDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
