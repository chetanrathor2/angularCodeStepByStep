import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {
  show : boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  showE(){
   if(this.show == true){

    this.show = false
   }
   else
   {
    this.show = true
   }
  }

}
