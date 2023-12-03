// Though this service works and can be normally used (thus injected elsewhere) without the
// usage of the decorator @Injectable, it's already recommended by official doc that you
// always use @Injectable to mark this class. Meanwhile, it's really only mandatory if
// we need to use an injectable in this service (as happens in AccountsService for example)
export class LoggingService {
	logStatusChange(status: string) {
		console.log("A new status changed, new status: ", status);
	}
}