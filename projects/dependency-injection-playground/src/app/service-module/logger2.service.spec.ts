import { TestBed } from '@angular/core/testing';

import { Logger2Service } from './logger2.service';

describe('Logger2Service', () => {
  let service: Logger2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Logger2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
