import { Component, OnInit } from '@angular/core';
import { IChannels, IData, IDirectDM } from 'src/interfaces/data.interfaces';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  data:IData;
  constructor(private dataService:DataService){
    this.data = new Object as IData;
  }
  ngOnInit() {
    this.dataService.data.subscribe(value => {
      this.data = value as IData;
    });
  }
  updateChannel(value:any){
    this.data.channels = value as IChannels[];
    this.dataService.pushData(this.data);
  }
  updateDM(value:any){
    this.data.directMessages = value as IDirectDM[];
    this.dataService.pushData(this.data);
  }
}
