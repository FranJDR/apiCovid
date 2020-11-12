import { TestBed } from '@angular/core/testing';

import { ApiCountreisService } from './api-countreis.service';

describe('ApiCountreisService', () => {
  let service: ApiCountreisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCountreisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
