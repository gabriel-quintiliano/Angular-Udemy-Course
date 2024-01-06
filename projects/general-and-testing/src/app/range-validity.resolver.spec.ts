import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { rangeValidityResolver } from './range-validity.resolver';

describe('rangeValidityResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => rangeValidityResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
