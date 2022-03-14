import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { Observable ,BehaviorSubject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData = new BehaviorSubject(null);

  constructor(private _HttpClient:HttpClient ,private _Router:Router) { }

  setUserData():void{
    let encodedToken = JSON.stringify(localStorage.getItem('userToken'));
    let decodedToken:any  = jwtDecode(encodedToken);
    // console.log(decodedToken);
    this.userData.next(decodedToken);


  }

  register(userData: object):Observable<any>
  {
    return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signup',userData);
  }

  login(userData: object):Observable<any>
  {
    return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signin',userData);
  }

  logout():void
  {
    localStorage.removeItem('userToken');
    this.userData.next(null);
    this._Router.navigate(['/login']);

  }
}
