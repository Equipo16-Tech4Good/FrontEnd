import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medallas',
  templateUrl: './medallas.component.html',
  styleUrls: ['./medallas.component.css']
})
export class MedallasComponent implements OnInit {

  medalBronce:number=4
  medalSilver:number=2
  medalGold:number=0


  constructor() { }

  ngOnInit(): void {
  }

}
