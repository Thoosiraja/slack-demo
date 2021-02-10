import { Component, Input, OnInit } from '@angular/core';
​
@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
​
  constructor() { 
    this.name = ''
  }
​
  ngOnInit(): void {
    console.log(this.name)
  }
  ngOnChange():void{
    this.name
  }
​
  @Input() name : String;
​
}