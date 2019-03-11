import { Component, OnInit } from '@angular/core';
// -------------------------管道与过滤---------------------------
@Component({
    selector: 'demo16',
    templateUrl: './demo17.component.html',
    styleUrls:['./demo18.component.css']
})

export class Demo16Component implements OnInit {
    stuName:string ="ZhangSan";
    nowDate= new Date();
    price=3.1415926;
    constructor() { }

    ngOnInit() { }

}