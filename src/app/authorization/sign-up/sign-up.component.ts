import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalConstants } from '../../shared/globar_constants';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/interfaces/user.interface';

import { tap, catchError } from 'rxjs/operators';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signupFrom:any = FormGroup;
  responseMessage:any;

  //falta importar el service y añadirlo en el constructor

  constructor(private formBuilder:FormBuilder, private router:Router, private userServ:UserService) { }

  ngOnInit(): void {  
    this.signupFrom = this.formBuilder.group({
      name: [null, [Validators.required, Validators.pattern(GlobalConstants.nameRegex)]],
      email: [null, [Validators.required, Validators.pattern(GlobalConstants.emailRegex)]],
      password: [null, [Validators.required]],
      confirmPassword: [null, [Validators.required]]
    });
  }

  returnLandigPage(){
    this.router.navigate(['/']);
  }

  validateSubmit(){
    if(this.signupFrom.controls['password'].value != this.signupFrom.controls['confirmPassword'].value)
      return true;
    else
      return false;
  }
  message:string=''
  logStatus:boolean=this.userServ.loggedIn


  authenticate(){
    const userFull=this.signupFrom.value
    const user = {
      name:userFull.name,
      email:userFull.email,
      password:userFull.password
    }

    this.userServ.signup(user).subscribe(resp=>{
      this.message=resp?.message
      if(resp?.http != 200){
        this.message = "algo ha ido mal";
      }
      })
       
  }; 

  handleSuauthenticatebmit(){
    var formData = this.signupFrom.value;
    var data = {
      name:formData.name,
      email:formData.email,
      password:formData.password
    }

    
    this.userServ.signup(data).pipe(
      tap((response: any) => {
        this.responseMessage = response?.message;
        this.router.navigate(['/']);
      }),
      catchError((error) => {
        if (error.error?.message)
          this.responseMessage = error.error?.message;
        else
          this.responseMessage = GlobalConstants.gerericError;
        throw error; // Rethrow the error to propagate it further
      })
    ).subscribe();

    

     

  }
}



