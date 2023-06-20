import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalConstants } from '../../shared/globar_constants';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  password = true;
  confirmPassword = true;
  signupFrom:any = FormGroup;
  responseMessage:any;

  //falta importar el service y añadirlo en el constructor

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.signupFrom = this.formBuilder.group({
      name: [null, [Validators.required, Validators.pattern(GlobalConstants.nameRegex)]],
      email: [null, [Validators.required, Validators.pattern(GlobalConstants.emailRegex)]],
      password: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      confirmPassword: [null, [Validators.required]]
    });
  }

  validateSubmit(){
    if(this.signupFrom.controls['password'].value != this.signupFrom.controls['confirmPassword'].value)
      return true;
    else
      return false;
  }
}
