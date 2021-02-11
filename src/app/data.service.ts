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
      .then(data => {this.data.next(data[0] as IData)})
      .catch(err => console.log(err));
  }
}