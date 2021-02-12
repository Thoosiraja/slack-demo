import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { DataService } from '../data.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  theme:boolean=true;

  constructor(private location:Location,private serviceState:DataService) { }

  ngOnInit(): void {
    this.serviceState.isDark.subscribe(val =>{
      this.theme = val
    })
  }
  routerForward(){
    this.location.forward();
  }
  routerBack(){
    this.location.back();
  }
  changeTheme =()=>{
    this.serviceState.isDark.next(!this.serviceState.isDark.value)
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
