import { ResolveFn } from '@angular/router';

export const rangeValidityResolver: ResolveFn<boolean> = (route, state) => {
  return true;
};
