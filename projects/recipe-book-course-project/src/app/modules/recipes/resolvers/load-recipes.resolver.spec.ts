import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { loadRecipesResolver } from './load-recipes.resolver';

describe('loadRecipesResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => loadRecipesResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
