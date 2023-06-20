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

  login(body: User): Observable<any> {
    return this.http.post<any>('/api/login', body);
  }

  randomTip(parameters: User): Observable<any> {
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









// signUp(userInput: Users) {
//     if (
//       !this._userRepository.find((user) => user.userName === userInput.userName) &&
//       !this._userRepository.find((user) => user.userMail === userInput.userMail)
//     ) {
//       this._userRepository.push(userInput);
//       localStorage.setItem('users', JSON.stringify(this._userRepository));
//       this.route.navigate(['starshipList'])
//       this._logInUser=`Bienvenido ${userInput.userName}`
//       this._loggedIn=true
//      } else alert('el usuario o email ya existen');
//   }
  
//   logIn(name:string,password:string) {
    
//     if (
//       this._userRepository.find((user) => user.userName === name) &&
//       this._userRepository.find((user) => user.userpassword === password)
//     ) {
//       this.route.navigate(['starshipList'])
//       this._logInUser=`Bienvenido ${name}`
//       this._loggedIn=true
//     } else alert('el usuario o contraseña es incorrecto');
//   }
