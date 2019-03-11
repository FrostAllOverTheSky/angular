//组建间的通信
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'demoParent',
    templateUrl: 'parent.component.html',
    styleUrls:['parent.component.css']
})

export class parentComponent implements OnInit {
    //父传子
    sonMsg:string = " 儿子 你赶紧回家 吃饭";
    constructor() { }

    ngOnInit() { }
    //子传父
    rcvMsg(msg:string){
        console.log("父亲接收到了儿子的信:"+msg)
    }
}