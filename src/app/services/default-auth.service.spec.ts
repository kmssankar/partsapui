import { TestBed } from '@angular/core/testing';

import { DefaultAuthService } from './default-auth.service';

describe('DefaultAuthService', () => {
  let service: DefaultAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DefaultAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
