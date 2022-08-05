import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  items :any[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  onClick(data:string){

    this.items.push({id:this.items.length,name:data});
    console.log(this.items);
    
  }
  onRemove(id:number){
    this.items = this.items.filter(ele=>ele.id!==id)
    console.log(this.items);
    
  }
}
