import { Component, Input, OnInit } from '@angular/core';
import { IMessages } from 'src/interfaces/data.interfaces';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input() message:IMessages;
  constructor() { 
    this.message = new Object as IMessages;
  }

  ngOnInit(): void {
  }

}
