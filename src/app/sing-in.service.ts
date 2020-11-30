import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SingInService {
data:any = []
  constructor() { }
  creatData(f,s){
     this.data.push(new constructor(f,s))
     return this.data
  }
}


function constructor (f,s){
  this.first = f;
  this.second = s
}