import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.css']
})
export class TipsComponent implements OnInit {

  tips:string[] = [];
  error:string = "";
  status:string = "";

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    for(var i = 0; i < 4; i++){
      this.getTips();
    }
  }

  getTips(){
    this.userService.randomTip().subscribe(resp =>{
      this.tips.push(resp.data.descripcion);
      this.status = resp.status;
      if(this.status != '200')
        this.error = "An error has occured"
    })
  } 

}
