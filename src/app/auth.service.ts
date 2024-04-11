import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
Observable
@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private _HttpClient:HttpClient) { }

  contactUs(userData:object):Observable<any>{
    return this._HttpClient.post('http://upskilling-egypt.com:3001/contact',userData);
  }

  getRecipes():Observable<any>{
    return this._HttpClient.get(' https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast');
  }
}
