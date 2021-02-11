import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchpopup',
  templateUrl: './searchpopup.component.html',
  styleUrls: ['./searchpopup.component.css']
})
export class SearchpopupComponent implements OnInit {

  constructor() { }
  recentsearches=[{name:"pavan"},{name:"kishore"},{name:"kadhir"}];
  ngOnInit(): void {
  }
  togglesearchpopup(){
    var a = document.getElementById("searchpopup");
    if(a!==null){
    if(a?.style.display==="none"){
      a.style.display="block";
    }
    else{a.style.display="none";}
  }
 }
}
