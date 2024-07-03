import { TestBed } from '@angular/core/testing';

import { ActiveInactiveUserService } from './active-inactive-user.service';

describe('ActiveInactiveUserService', () => {
  let service: ActiveInactiveUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActiveInactiveUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
