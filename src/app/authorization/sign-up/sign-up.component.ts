import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalConstants } from '../../shared/globar_constants';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/interfaces/user.interface';


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
    const user:User={
      name:userFull.name,
      email:userFull.email,
      password:userFull.password
    }

    this.userServ.signup(user)
    .subscribe(resp=>{alert(JSON.stringify(resp.message,null,4))
      this.message=resp.message
      if(resp.status===200) {
          this.userServ.loggedIn=true
          this.router.navigate(['login'])
           }
                    })
       
      };
  


  }



