import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
  private URL = 'http://localhost:3000/users'
  constructor(private http: HttpClient) { }

  login(user:any){
    return this.http.post<any>(this.URL+'/login', user)
  }
  createUser(user:any){
    return this.http.post<any>(this.URL+'/register', user)

  }
  getUserData(){
      return this.http.get<any>(this.URL+'/user',{'headers':new HttpHeaders({'token':localStorage.getItem('token')+""})})
  }
}
