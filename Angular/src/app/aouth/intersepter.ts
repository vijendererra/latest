import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError } from "rxjs/operators";
import { Observable, throwError } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private router: Router) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
        if (req.headers.get('Noauth'))
            return next.handle(req.clone());
        let jwtToken = req.clone({
            setHeaders: {
                Authorization: "bearer " + localStorage.getItem('token')
            }
        });
        return next.handle(jwtToken).pipe(
            catchError(error => {
                console.error("error is intercept", error);
                return throwError(error.message);
              })
        );
    }
}