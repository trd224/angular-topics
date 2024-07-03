import { TestBed } from '@angular/core/testing';

import { DependentDropdownService } from './dependent-dropdown.service';

describe('DependentDropdownService', () => {
  let service: DependentDropdownService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DependentDropdownService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
