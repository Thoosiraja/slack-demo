import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { IChannels, IData, IMessages } from 'src/interfaces/data.interfaces';
import { DataService } from '../data.service';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  data:IData;
  messages :any=[];
  id:number;
  type:String='';
  constructor(public route: ActivatedRoute,private dataService:DataService) { 
    this.name = '',
    this.id = -1;
    this.data = new Object as IData;
  }

  sub:any;
  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.name = params['name'];
      this.type = params['type'];
      debugger;
      this.messages = [];
      this.dataService.data.subscribe(val =>{
        this.data = val;
        if(Object.keys(val).length !== 0 && this.type == 'channel')
        {
          (this.data.channels as Array<IChannels>).forEach((channel)=>{
            if(channel.id == this.id)
            {
              channel.messagesID.forEach((messageId)=>{
                 this.messages.push((this.data.messages[messageId] as IMessages))
              })
            }
          })
        }
        else if(Object.keys(val).length !== 0){
          (this.data.directMessages as Array<IChannels>).forEach((dm)=>{
            if(dm.id == this.id)
            {
              dm.messagesID.forEach((messageId)=>{
                 this.messages.push((this.data.messages[messageId] as IMessages))
              })
            }
          })
        }
      })
      });
  }
  @Input() name : String;

  send = (message:any) =>{
    let messages : IMessages ={
      date:new Date(),
      from: this.data.profile.name,
      time:new Date(),
      messages:message,
      toID:this.id,
      toType:this.type=="channel"?'channels':'directMessages',
    }
    let messageId = Object.keys(this.data.messages).length+1
    this.data.messages[messageId]=messages;
    console.log(this.data.messages)
    if(this.type === 'channel')
    {
      this.data.channels.forEach((channel)=>{
        if(channel.id == this.id)
        {
          channel.messagesID.push(messageId)
        }
      })
    }
    else
    {
      this.data.directMessages.forEach((dm)=>{
        if(dm.id == this.id)
        {
          dm.messagesID.push(messageId)
        }
      })
    }
    this.messages.push(messages)
   this.dataService.pushData(this.data)
  }
}
