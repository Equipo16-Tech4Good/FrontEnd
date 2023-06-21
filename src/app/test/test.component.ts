import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  checked:number = 0;
  message:string = "";
  checkArray:any = FormArray;
  testForm:any = FormGroup;

  Data: Array<any> = [
    { name: 'He apagado el agua mientras me cepillaba los dientes.', value: 'check1' },
    { name: 'He regado las plantas con agua recogida de la lluvia', value: 'check2' },
    { name: 'He tomado una ducha en lugar de tomarme un baño', value: 'check3' },
    { name: 'He bajado la cadena del lavabo usando el deposito pequeño', value: 'check4' },
    { name: 'He parado el agua mientras me enjabonaba en la ducha', value: 'check5' },
    { name: 'He parado el agua mientras me enjabonaba las manos', value: 'check6' },
    { name: 'He regado las plantas por la mañana, para que se evapore menos agua', value: 'check7' },
    { name: 'He ayudado a otra persona a ahorrar agua', value: 'check8' },
    { name: 'He jugado con el agua usando cubos en lugar del grifo/manguera', value: 'check9' },
    { name: 'He ayudado a llenar bien la lavadora, para aprovechar el lavado', value: 'check10' }
  ];

  constructor(private formBuilder:FormBuilder, private router:Router, private userServ:UserService) { }

  ngOnInit(): void {
    this.testForm = this.formBuilder.group({
      checkArray: this.formBuilder.array([], [Validators.required]),
    });
  }

  onCheckboxChange(e: any) {
    this.checkArray = this.testForm.get('checkArray') as FormArray;
    if (e.target.checked) {
      this.checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      this.checkArray.controls.forEach((item: any) => {
        if (item.value == e.target.value) {
          this.checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  redirectHome(){
    this.router.navigate(['/home']);
  }

  submit(){
    if(this.checkArray.length > 0)
      this.checked = this.checkArray.length;
      
    const data = {
      token: this.userServ.getToken(),
      checked: this.checked
    }
    this.userServ.updateUserData(data).subscribe(resp=>{
      this.message=resp?.mensaje
      if(resp?.status == 200){
        setTimeout(this.redirectHome, 4000);
      }   
    })   
  }

  
}

