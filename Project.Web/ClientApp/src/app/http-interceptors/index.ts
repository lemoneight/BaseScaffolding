/* "Barrel" of Http Interceptors */
import { HTTP_INTERCEPTORS } from '@angular/common/http';

//import { NoopInterceptor } from './noop-interceptor';
import { AuthInterceptor } from './auth-interceptor';

//If we have more interceptors, add here
// import { ErrorInterceptor } from './error-interceptor';

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
//   { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
];