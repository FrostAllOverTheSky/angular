import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//引入Input
@Component({
    selector: 'demoSon',
    templateUrl: 'son.component.html',
    styleUrls:['son.component.css']
})

export class sonComponent implements OnInit {
    //接收爸爸发送的数据
@Input() msg = "";
//发送信息到父亲
@Output() toFatherEvent = new 
                            EventEmitter();
    constructor() { }

    ngOnInit() { 
        console.log(this.msg);
    }
    //完成子与父通信
    handleClick(){
        this.toFatherEvent.emit('你是不是斗音玩多了');
    }
}