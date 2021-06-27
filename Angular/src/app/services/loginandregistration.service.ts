import { Injectable } from '@angular/core';
import { LoginAndRedistration } from '../login-registration/model/loginandregistration'
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { environment } from '../../environments/environment';
import { Observable, throwError, BehaviorSubject, Subject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class LoginandregistrationService {
  noAuthHeader = {
    headers: new HttpHeaders({
      'NoAuth': 'True',
    })
  };

  private data1: {};
  private content = new BehaviorSubject<string>("");
  public share = this.content.asObservable();
  constructor(private http: HttpClient) { }

  private _refresh$ = new Subject<void>();

  get refresh$() {
    return this._refresh$;
  }

  img(path) {
    // console.log(path)
    this.content.next(path);
  }

  postEmp(model: LoginAndRedistration) {
    console.log("src", model)
    // const url = '/reg';
    const url = environment.URL + '/reg';
    return this.http.post(url, model, this.noAuthHeader).pipe(
      catchError(this.handleError)
    );
  }

  loginUser(log: LoginAndRedistration) {
    // const url = '/login';
    const url = environment.URL + '/login';
    return this.http.post(url, log, this.noAuthHeader,)
      .pipe(
        catchError(this.handleError)
      );
  }

  logedin() {
    // const url = '/logedin';
    const url = environment.URL + '/logedin';
    return this.http.get(url).pipe(
      catchError(this.handleError)
    );
  }

  setToken(token: string) {
    // console.log("set")
    localStorage.setItem('token', token);
  }
  isLoggedIn(): boolean {
    let token = localStorage.getItem('name');
    if (token) {
      return true
    }
    else {
      return false
    }
  }
  upDateProfile(formdada) {
    const url = environment.URL + '/updateprofile';
    return this.http.post(url, formdada, this.noAuthHeader).pipe(
      tap(() => {
        this._refresh$.next();
      }),
      catchError(this.handleError)
    )
  }

  forGotPwd(email: LoginAndRedistration) {
    // const url = '/forgotpwd';
    const url = environment.URL + '/forgotpwd';
    return this.http.post(url, email, this.noAuthHeader).pipe(
      catchError(this.handleError)
    );
  }
  valiDateOtp(data){
    const url = environment.URL + '/validateOTP';
    return this.http.post(url, data, this.noAuthHeader).pipe(
      catchError(this.handleError)
    );
  }

  tokenTimeVerify(){
    const url = environment.URL + '/tokenexpires';
    return this.http.get(url, this.noAuthHeader).pipe(
      catchError(this.handleError)
    );
  }

  resetPwd(pwd: LoginAndRedistration, token: String) {
    // const url = '/resetpwd/' + token;
    const url = environment.URL + '/resetpwd/' + token;
    return this.http.post(url, pwd, this.noAuthHeader).pipe(
      catchError(this.handleError)
    );
  }

  changePwd(data) {
    const url = environment.URL + '/changepwd';
    console.log(url);
    return this.http.post(url, data, this.noAuthHeader).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error:HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // console.log(error);
      errorMessage = `Error Code: ${error.status}\nmessage: ${error.error.message}`;
    }
    return throwError(error.error);
  }

  sharing(data) {
    this.data1 = data;
    this.content.next(data);
  }

  get() {
    // console.log(this.data1)
    return this.data1;
  }
}
