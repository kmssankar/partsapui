import { TestBed } from '@angular/core/testing';

import { ApphttpInterceptorService } from './apphttp-interceptor.service';

describe('ApphttpInterceptorService', () => {
  let service: ApphttpInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApphttpInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
