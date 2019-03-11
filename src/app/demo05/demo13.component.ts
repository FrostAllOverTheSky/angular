import { Component, OnInit } from '@angular/core';
// 双向绑定

@Component({
    selector: 'demo13',
    templateUrl: './demo14.component.html',
    styleUrls:['./demo15.component.css']
})

export class Demo13Component implements OnInit {
    color = "#ff0000";
    uAddress:string="北京";
    constructor() { }

    ngOnInit() { }
    headleChange(){
        console.log(this.uAddress)
    }
}