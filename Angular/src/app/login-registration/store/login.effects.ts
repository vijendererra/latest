import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect,  ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { LoginandregistrationService } from "src/app/services/loginandregistration.service";
import { addUser, loggedIn } from "./login.actions";

@Injectable()
export class LoggedInServce {

    constructor(
        private actions$: Actions,
        private loginSrc: LoginandregistrationService,
        private _router:Router
    ) { }

    loggedIn$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loggedIn), mergeMap((actin) => {
                return this.loginSrc.logedin().pipe(map((user) => {
                    if(user==null){
                        this._router.navigateByUrl('/'); 
                        localStorage.removeItem('token'); 
                    }
                    else{
                    this._router.navigateByUrl('/curd');
                    }
                    return addUser({ user });
                }),
                   catchError((err)=>{
                       console.log(err);
                       return of();
                   })
                )
            })
        )
    })
    // @Effect()
    // loggedIn= this.actions$.pipe(
    //         ofType(loggedIn), mergeMap((actin) => {
    //             return this.loginSrc.logedin().pipe(map((user) => {
    //                 if(user==null){
    //                     this._router.navigateByUrl('/'); 
    //                     localStorage.removeItem('token'); 
    //                 }
    //                 else{
    //                 this._router.navigateByUrl('/curd');
    //                 }
    //                 return addUser({ user });
    //             }),
    //                catchError((err)=>{
    //                    console.log(err);
    //                    localStorage.removeItem('token'); 
    //                    this._router.navigateByUrl('/');
    //                    return of();
    //                })
    //             )
    //         })
    //     )


    //   redirect$=createEffect(()=>{
    //       return this.actions$.pipe(
    //           ofType(addUser),map((action)=>{
    //             this._router.navigateByUrl('/curd');
    //           })
    //       )
    //   },{dispatch:false})  
}