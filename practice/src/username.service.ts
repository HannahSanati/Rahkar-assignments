import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsernameService {
  constructor(
    private http: HttpClient
  ){}
  private isLogin = new BehaviorSubject(false);
  isLoginObservable = this.isLogin.asObservable();

  Register(data:any):Observable<any> {
    return this.http.post("http://localhost:4000/api/user/register", data)
   
  }
  login(data:any):Observable<any> {
    return this.http.post("http://localhost:4000/api/user/login", data)
   
  }
}
