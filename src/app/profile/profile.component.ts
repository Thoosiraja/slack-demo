import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  name:String=''

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.data.subscribe(val =>{
      this.name = val.profile.name
    })
  }

}
