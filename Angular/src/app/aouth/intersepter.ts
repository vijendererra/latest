 import {HttpInterceptor,HttpRequest,HttpHandler,HttpEvent} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {tap} from 'rxjs/operators';

import {Router} from "@angular/router";

// import{CandidateService} from "../service/candidate.service";



@Injectable()
 export class AuthInterceptor implements HttpInterceptor{

    constructor(private router:Router){}

    intercept(req:HttpRequest<any>,next:HttpHandler){

        if(req.headers.get('noauth'))
        return next.handle(req.clone());

        if(localStorage.getItem('token')!=null){
            const clondreq=req.clone({
                headers:req.headers.set("Authorization","Beearer "+ localStorage.getItem('token'))
            });
            return next.handle(clondreq).pipe(
                tap(
                    event=>{},
                    err=>{
                        if(err.error.auth==false){
                          this.router.navigateByUrl('/#')  
                            
                        }
                    }
                )
            )
    
                
            
        }


  
 }
 }