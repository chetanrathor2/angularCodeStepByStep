import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ang-pipes',
  templateUrl: './ang-pipes.component.html',
  styleUrls: ['./ang-pipes.component.css']
})
export class AngPipesComponent implements OnInit {
  name:string = "Chetan Rathor"
  datea  = new Date()
  phn : number = 8821889586;
  fullDetails : {name:string,age:number}= {name:"chetan",age:10}
  constructor() { }

  ngOnInit(): void {
  }

}
