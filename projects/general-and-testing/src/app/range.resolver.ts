import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { inject } from "@angular/core"
import { RangeValidatorService } from './range-validator.service';
import { RangeData } from './range-data.model';

export const rangeResolver: ResolveFn<RangeData> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const rangeValServ = inject(RangeValidatorService);
    const inputedRange = Number(route.params['range']);

    return {
        isValid: rangeValServ.isValid(inputedRange),
        timesRan: rangeValServ.timesRan,
        lastRunTimestamp: rangeValServ.lastRunTimestamp,
        range: inputedRange,
    };
};