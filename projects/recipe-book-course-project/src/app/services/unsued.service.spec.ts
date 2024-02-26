import { TestBed } from '@angular/core/testing';

import { UnsuedService } from './unsued.service';

describe('UnsuedService', () => {
  let service: UnsuedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnsuedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
