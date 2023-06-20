import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  loggedIn:boolean=false
  url = environment.apiURL

  signup(body: any): Observable<any> {
    return this.http.post<any>(this.url + '/prueba/signUp', body,{
      headers:new HttpHeaders().set('Content-Type', 'application/json')
    });

  }

  login(body: any): Observable<any> {
    return this.http.post<any>('/api/login', body);
  }

  randomTip(): Observable<any> {
    return this.http.get<any>('/api/random');
  }

  getUserData(): Observable<any> {
    const headers = {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
  };
  
    return this.http.get<any>('/api/data',{headers});
  }

  getAchievements(): Observable<any> {
    const headers = {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
  };
  
    return this.http.get<any>('/api/achiviement',{headers});
  }

  getMedals(): Observable<any> {
    const headers = {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
  };
  
    return this.http.get<any>('/api/medals',{headers});
  }
  }