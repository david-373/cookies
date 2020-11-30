import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import {SingInService} from '../../src/app/sing-in.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  formControl:FormGroup;
  first:any;
  second:any
ngOnInit():void{
this.formControl = new FormGroup({
  first:new FormControl(),
  second:new  FormControl()
})
this.formControl.valueChanges.subscribe((value)=>{
 
this.first = value.first
this.second = value.second
})
}

singIn(){
  this.cookieService.set('first',this.first)
  this.cookieService.set('second',this.second)
  this.singInService.creatData(this.first,this.second)
}
getFromCookie(){
 
  console.log( this.cookieService.get('first'),
  this.cookieService.get('second'));
  console.log(this.singInService.creatData(this.first,this.second));
  
  
}
constructor(private cookieService:CookieService,private singInService:SingInService){

}

  title = 'whitCookies';
}
