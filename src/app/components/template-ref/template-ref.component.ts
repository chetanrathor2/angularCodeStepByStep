import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-ref',
  templateUrl: './template-ref.component.html',
  styleUrls: ['./template-ref.component.css']
})
export class TemplateRefComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClick(data:HTMLInputElement){
    console.warn(data);
    console.log(typeof(data.tagName));
    
    
  }
}
