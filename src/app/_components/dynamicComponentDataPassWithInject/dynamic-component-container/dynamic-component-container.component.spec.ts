import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicComponentContainerComponent } from './dynamic-component-container.component';

describe('DynamicComponentContainerComponent', () => {
  let component: DynamicComponentContainerComponent;
  let fixture: ComponentFixture<DynamicComponentContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicComponentContainerComponent]
    });
    fixture = TestBed.createComponent(DynamicComponentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
