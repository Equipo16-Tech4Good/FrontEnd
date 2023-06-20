import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pato',
  templateUrl: './pato.component.html',
  styleUrls: ['./pato.component.css']
})
export class PatoComponent implements OnInit {
  
  altura1 : number = 0;
  altura2 : number = 0; 
  altura3 : number = 0;


  constructor() { }

  ngOnInit(): void {
    this.altura1 = 50;
    this.altura2 = 200;
    this.altura3 = 375;
  }
  

}
