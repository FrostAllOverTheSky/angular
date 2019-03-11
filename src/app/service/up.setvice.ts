//服务练习
import { Injectable } from '@angular/core';

@Injectable()
export class UpService {
    myTimer:any= null;

    constructor() { }
    start(){
        if(this.myTimer){
            return
        }
        this.myTimer=setInterval(()=>{
            console.log('开始心跳');
        },500);
    }
    stop(){
        //记得优化
        if(this.myTimer){
            console.log('停止心跳');
        clearInterval(this.myTimer);
        this.myTimer=null;
        }
        
    }
}