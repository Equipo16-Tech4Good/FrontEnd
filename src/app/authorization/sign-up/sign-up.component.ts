import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalConstants } from '../../shared/globar_constants';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signupFrom:any = FormGroup;
  responseMessage:any;

  //falta importar el service y añadirlo en el constructor

  constructor(private formBuilder:FormBuilder, private router:Router) { }

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
}
