import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicComponent2Component } from './dynamic-component2.component';

describe('DynamicComponentComponent', () => {
  let component: DynamicComponent2Component;
  let fixture: ComponentFixture<DynamicComponent2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicComponent2Component]
    });
    fixture = TestBed.createComponent(DynamicComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
