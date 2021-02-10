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
    }
    else{
      this.isProfile = true
    }
  }
}
