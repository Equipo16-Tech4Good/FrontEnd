import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalConstants } from '../../shared/globar_constants';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFrom:any = FormGroup;
  responseMessage:any;
  message:string=''
  logStatus:boolean=this.userServ.loggedIn

  constructor(private formBuilder:FormBuilder, private router:Router, private userServ:UserService) { }

  ngOnInit(): void {
    this.loginFrom = this.formBuilder.group({
      email: [null, [Validators.required, Validators.pattern(GlobalConstants.emailRegex)]],
      password: [null, [Validators.required]]
    });
  }

  returnLandigPage(){
    this.router.navigate(['/']);
  }

  login(){
    const userFull=this.loginFrom.value;
    const user = {
      email:userFull.email,
      password:userFull.password,
    }

    this.userServ.login(user).subscribe(resp=>{
      this.message=resp?.message
    })   
  };

}
