import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamePrefixComponent } from './name-prefix.component';

describe('NamePrefixComponent', () => {
  let component: NamePrefixComponent;
  let fixture: ComponentFixture<NamePrefixComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NamePrefixComponent]
    });
    fixture = TestBed.createComponent(NamePrefixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
