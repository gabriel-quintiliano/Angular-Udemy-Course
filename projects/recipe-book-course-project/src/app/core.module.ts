import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AuthInterceptor } from "./modules/auth/interceptors/auth.interceptor";

/* We can use "core modules" to outsource services that were previously
 * directly provided in AppModule providers array to make it leaner.
 * Services are "special" so we don't need to export those, just by
 * importing the module, all service providers will be injected into
 * that module's injector tree.
 * In this case, as AppModule imports this CoreModule, its like the
 * HTTP_INTERCEPTORS service bellow was provided directly in AppModule
 * providers array. */

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class CoreModule {}