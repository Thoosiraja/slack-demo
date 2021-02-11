import { Injectable } from '@angular/core';
import { IData } from 'src/interfaces/data.interfaces';
​
@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: IData;
  constructor() { 
    let temp = new Object;
    fetch("https://6023da1b6bf3e6001766b98e.mockapi.io/api/data/slackDemo")
      .then(res => res.json())
      .then(data => temp = data)
      .catch(err => console.log(err));
    this.data = temp as IData;
    setTimeout(()=>{this.data = temp as IData},1000);
  }
}