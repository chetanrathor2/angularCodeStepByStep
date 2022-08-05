import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ts-basics',
  templateUrl: './ts-basics.component.html',
  styleUrls: ['./ts-basics.component.css']
})
export class TsBasicsComponent implements OnInit {
  name : string="chetan";
  age:number = 100;
  skills:string[]=["html","css","js"]
  fullDetails:{name:string,age:number,skills:string[]} = {name:'chetan',age:10,skills:['html','css','js']}

  constructor() { }

  ngOnInit(): void {
  }

  announce(){
    console.log(this.name);
    console.log(this.age);
    console.log(this.skills);
    console.log(this.fullDetails);
    
    
  }
}
