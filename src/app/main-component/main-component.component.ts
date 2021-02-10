import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {

  constructor(public route: ActivatedRoute) { 
    this.name = ''
  }

  sub:any;
  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.name = params['name'];
      });
  }
  ngOnChange():void{
    this.name
  }

  @Input() name : String;

}
