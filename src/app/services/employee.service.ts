import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmployee } from '../employess';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private  _url : string = "/assets/data/employess.json";

  constructor(private http:HttpClient) { }

  getEmpolyees() : Observable<IEmployee[]>{
   
    
    return this.http.get<IEmployee[]>(this._url);
  }
}
