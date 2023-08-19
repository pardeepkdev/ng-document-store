import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import {
  HTTP_INTERCEPTORS,
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { map, catchError, finalize } from "rxjs/operators";


@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router) { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error instanceof HttpErrorResponse) {
          
          if (error.status === 401) {
            this.router.navigate(["/"]);
          }
        }
        return throwError(() => error);
      })
    );
  }
  
}

export const HttpErrorInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: HttpErrorInterceptor,
  multi: true,
};
