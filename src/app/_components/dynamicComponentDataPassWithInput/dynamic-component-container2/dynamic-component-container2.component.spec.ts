import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicComponentContainer2Component } from './dynamic-component-container2.component';

describe('DynamicComponentContainerComponent', () => {
  let component: DynamicComponentContainer2Component;
  let fixture: ComponentFixture<DynamicComponentContainer2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicComponentContainer2Component]
    });
    fixture = TestBed.createComponent(DynamicComponentContainer2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
