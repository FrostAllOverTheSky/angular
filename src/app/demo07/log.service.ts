//创建一个服务
import { Injectable } from '@angular/core';

@Injectable()
export class LogService {
    isDev:boolean= true;
    constructor() { }
    LogMsg(msg:any){
        if(this.isDev){
            console.log(msg);
        }
    }
}