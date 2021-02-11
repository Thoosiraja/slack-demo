import { Injectable } from '@angular/core';
import { IData } from 'src/interfaces/data.interfaces';
import {BehaviorSubject, Observable} from 'rxjs';
​
@Injectable({
  providedIn: 'root'
})
export class DataService {
  data = new BehaviorSubject(new Object as IData);
  constructor() { 
    fetch("https://6023da1b6bf3e6001766b98e.mockapi.io/api/data/slackDemo")
      .then(res => res.json())
      .then(data => {this.data.next(data[data.length-1] as IData)})
      .catch(err => console.log(err));
  }

  pushData =(data:IData) =>{
    fetch("https://6023da1b6bf3e6001766b98e.mockapi.io/api/data/slackDemo", {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
  }
}