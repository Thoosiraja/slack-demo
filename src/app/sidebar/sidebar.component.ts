import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  Channels=[{id:1,name:"Channel 1",type:"private"},
  {id:2,name:"Channel 2",type:"public"},
  {id:3,name:"Channel 3",type:"public"},
  {id:4,name:"Channel 4",type:"public"},
  {id:5,name:"Channel 5",type:"public"},
  {id:6,name:"Channel 6",type:"public"}];

  Direct=[{id:1,name:"Person 1"},{id:2,name:"Person 2"},{id:2,name:"Person 2"},{id:2,name:"Person 2"},{id:2,name:"Person 2"},{id:2,name:"Person 2"}];
  channelsd=[]
  Directd=[]
  value:boolean=false;
  value1:boolean=false;
​
  constructor() { }
​
  ngOnInit(): void {
  }
  showchannel(){
  if(this.value){
  this.value=false;
  //this.Channels=this.Channels
  }
  else{
  document.getElementById("channel")?.style.display;
  //this.Direct=this.Direct;
  //this.Channels=[];
  this.value=true;
  }
  }
  showmessage(){
  if(this.value1){
  this.value1=false;}
  else{
  this.value1=true;
  }
  }
  ​
}