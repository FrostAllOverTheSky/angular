//异步请求服务
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class MyhttpService {
    constructor(private httpClient: HttpClient) { 
        
    }
    sendRequest( url:string){
        //加上withCredentials:true打开session
        //设置完withCredentials后在后端请求文件的请求头把星号换成http://localhost:3000
        return this.httpClient.get(url,{withCredentials:true});
    }
}