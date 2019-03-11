//------------------------组建路由---------------------------------------
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'loginParent',
    templateUrl: 'login.component.1.html',
    styleUrls:['login.component.1.css']
})

export class loginComponent implements OnInit {
  
  
    constructor( private myRouter:Router) { }

    ngOnInit() { }
    
    jumpToRegister(){
        this.myRouter.navigateByUrl('register');
   }
}