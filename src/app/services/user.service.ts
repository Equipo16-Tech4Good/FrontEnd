import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }


  logIn(body: User): Observable<any> {
    return this.http.post<any>('/api/login', body);
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
