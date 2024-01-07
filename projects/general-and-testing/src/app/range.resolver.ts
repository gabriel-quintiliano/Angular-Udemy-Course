import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { inject } from "@angular/core"
import { RangeValidatorService } from './range-validator.service';
import { RangeData } from './range-data.model';

export const rangeResolver: ResolveFn<RangeData> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const rangeValServ = inject(RangeValidatorService);
    const inputedRange = Number(route.params['range']);

    const lastPath = rangeValServ.latestPathRun;
    const curPath = route.parent!.routeConfig!.path!;

    // as this resolver uses a "global" service, each time it runs for a diffent "main" route,
    // the stats of the service are reset.
    if (lastPath != curPath) {
        rangeValServ.resetStats()
        rangeValServ.latestPathRun = curPath;
    }

    return {
        isValid: rangeValServ.isValid(inputedRange),
        timesRan: rangeValServ.timesRan,
        lastRunTimestamp: rangeValServ.lastRunTimestamp,
        range: inputedRange,
    };
};