import { Component, OnInit } from '@angular/core';
import { LogService } from './log.service';

@Component({
    selector: 'demo20',
    templateUrl: './demo21.component.html',
    styleUrls:['./demo22.component.css']
    
})

export class Demo20Component implements OnInit {
    //传入构造函数实例化
    //public private protected限定变量类型范围
    constructor(private myLS:LogService) { }

    ngOnInit() { }
    
    headleClick(){
        //按钮单击时
      this.myLS.LogMsg('it is a msg');
    }
}