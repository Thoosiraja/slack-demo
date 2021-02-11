import { Component } from '@angular/core';
import { IChannels, IData, IDirectDM } from 'src/interfaces/data.interfaces';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data:IData;
  constructor(private dataService:DataService){
    this.data = dataService.data;
  }
  updateChannel(value:any){
    this.data.channels = value as IChannels[];
  }
  updateDM(value:any){
    this.data.directMessages = value as IDirectDM[];
  }
}
