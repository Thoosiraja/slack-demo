import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isProfile = false

  changeProfile=()=>{
    if(this.isProfile)
    {
      this.isProfile = false
      console.log(this.isProfile)
    }
    else{
      this.isProfile = true
    }
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
