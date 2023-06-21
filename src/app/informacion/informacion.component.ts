import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {

  constructor() { }

  displayInfo: any = [];

  information = [
    {text: "Octubre es el mes en el que cae la mayor cantidad de lluvia."},
    {text: "Después de octubre, los meses con mucha lluvia son septiembre y noviembre"},
    {text: "Julio es el mes en el que llueve menos, seguido de junio y febrero."},
    {text: "En enero, caen aproximadamente 38 litros de agua. Eso es como llenar una pequeña piscina inflable para que puedas chapotear y jugar."},
    {text: "En febrero, caen alrededor de 35 litros de agua. Eso sería como llenar un cubo gigante de agua para hacer burbujas y juegos acuáticos."},
    {text: "En marzo, caen aproximadamente 49 litros de agua. Eso es como tener un día de lluvia perfecto para saltar en los charcos con botas de agua."},
    {text: "En abril, caen alrededor de 54 litros de agua. Eso sería como llenar una cubeta grande para regar muchas plantas y hacer que crezcan sanas"},
    {text: "En mayo, caen aproximadamente 54 litros de agua. Eso es como llenar una piscina pequeña donde puedas nadar y disfrutar del agua fresca."},
    {text: "En junio, caen alrededor de 37 litros de agua. Eso sería como tener una divertida lluvia de verano para correr y reír bajo ella."},
    {text: "En julio, caen aproximadamente 26 litros de agua. Eso es como llenar un cubo con agua para refrescarte y mojarte en un día caluroso."},
    {text: "En agosto, caen alrededor de 39 litros de agua. Eso sería como llenar una regadera grande para regar un jardín y ver cómo las flores crecen hermosas."},
    {text: "En septiembre, caen aproximadamente 79 litros de agua. Eso es como tener un día de lluvia muy especial para saltar en los charcos y hacer barquitos de papel."},
    {text: "En octubre, caen alrededor de 79 litros de agua. Eso sería como llenar un depósito de agua portátil para acampar o ir de excursión."},
    {text: "En noviembre, caen aproximadamente 58 litros de agua. Eso es como llenar una  bañera grande."}
  ]

  ngOnInit(): void {
    for(let i = 0; i <= 4; i++) {
      this.displayInfo.push(this.information[Math.floor(Math.random() * 14)])
    }
  }

}
