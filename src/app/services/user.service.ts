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
    return this.http.post<any>(this.url + '/api/Usuarios/SingUp', body,{
      headers:new HttpHeaders().set('Content-Type', 'application/json')
    });

  }

  login(body: any): Observable<any> {
    return this.http.post<any>(this.url + '/api/Usuarios/Login', body,{
      headers:new HttpHeaders().set('Content-Type', 'application/json')
    });
  }

  randomTip(): Observable<any> {
    return this.http.get<any>(this.url + '/api/Mensajes/RandomTip');
  }

  getUserData(): Observable<any> {
    /* const headers = {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }; */
    return this.http.get<any>(this.url + '/api/Usuarios/GetUsuario/token_' + this.getToken());
  }

  updateUserData(body:any): Observable<any> {
    return this.http.post<any>(this.url + '/api/Usuarios/Update', body, {
      headers:new HttpHeaders().set('Content-Type', 'application/json')
    });
  }

  getAchievements(): Observable<any> {
    /* const headers = {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }; */
    return this.http.get<any>(this.url + '/api/UsuarioLogroes/GetByToken/token_' + this.getToken());
  }

  getMedals(): Observable<any> {
   /*  const headers = {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }; */

    let token = localStorage.getItem('token');
  
    return this.http.get<any>(this.url + '/api/Medallas/GetByToken/token_' + this.getToken());
  }

  setToken(token:string):  void {
    return  localStorage.setItem('token', token );
  }

  getToken():string | null {
    return  localStorage.getItem('token');
  }

}