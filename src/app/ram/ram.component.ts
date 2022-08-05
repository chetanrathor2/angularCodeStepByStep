import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ram',
  templateUrl: './ram.component.html',
  styleUrls: ['./ram.component.css']
})
export class RamComponent implements OnInit {
  counter : number = 0;
  name:string = 'chetan';
  disable = false;
  check = true;
  color:string = "green";
  fruits = ['apple','banana','grapes','falana','dhikana'];
  persons = [
    {firstName:'chetan',secondName:'rathor',age:18,skills:['html','css','js']},
    {firstName:'ram',secondName:'sharma',age:21},
    {firstName:'prateek',secondName:'paliwal',age:15},
  ]
  constructor() { }

  ngOnInit(): void {
  }

  OnClick(val:string){
   return val == 'inc'?this.counter++:this.counter--;
}
}