import { Injectable } from "@angular/core";

// Though this service would work and be able to be normally used (thus injected elsewhere) without the
// usage of the decorator @Injectable, it's already recommended by official docs that you
// always use @Injectable to mark this class. Meanwhile, it's really only mandatory if
// we need to use an injectable in this service (as happens in AccountsService for example)

// informing property `providedIn: 'root'` is the same as importing this service in AppModule (aka 'root')
// and declaring it in the providers array, but with this services can be lazy loaded and redundant code cut off
@Injectable({
	providedIn: "root"
})
export class LoggingService {
	logStatusChange(status: string) {
		console.log("A new status changed, new status: ", status);
	}
}