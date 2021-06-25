import { Injectable } from '@angular/core';
import { HttpClient ,HttpErrorResponse,HttpHeaders} from "@angular/common/http";
import { CrudModel } from '../crud/model/model';
import { environment } from '../../environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class CrudService {
  noAuthHeader = {
    headers: new HttpHeaders({
      'Accept': 'text/plain',
      'Content-Type': 'text/plain'
    })
  };

  constructor(private http: HttpClient) { }
  getEmp() {
    // const url='/g';
    const url = environment.URL+ '/g';
    return this.http.get(url);
  }
  postEmp(model: CrudModel) {
    // const url='/p';
    const url = environment.URL+ '/p';
    return this.http.post(url,model );
  }

  putEmp(model: CrudModel) {
    // const url='/'+model._id;
    const url = environment.URL + '/' + model._id;
    return this.http.put(url, model);
  }

  deleteEmp(_id: String) {
    // const url='/'+_id;
    const url = environment.URL + '/' + _id;
    return this.http.delete(url)
    .pipe(
      catchError(this.handleError)
    );
  }


  private handleError(err:HttpErrorResponse){
    let errMessage="";
    if(err instanceof Error){
      errMessage=err.error.message;
    }
    else{
      errMessage=err.error.message;
    }
    return errMessage;
  }
}
