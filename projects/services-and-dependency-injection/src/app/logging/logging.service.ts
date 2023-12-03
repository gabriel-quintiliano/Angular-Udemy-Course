export class LoggingService {
	logStatusChange(status: string) {
		console.log("A new status changed, new status: ", status);
	}
}