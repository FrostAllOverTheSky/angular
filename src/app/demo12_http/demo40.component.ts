//异步请求
import { Component, OnInit } from '@angular/core';
import { MyhttpService } from './myhttp.service';

@Component({
    selector: 'demo40',
    template: `
    <h2> tis my service</h2>
    <button (click) = 'handleClick()'>家在数据</button>
    `
})

export class Demo40Component implements OnInit {
    constructor(private myHS:MyhttpService) { }

    ngOnInit() { }
    handleClick(){
        this.myHS.sendRequest('http://jsonplaceholder.typicode.com/posts')
        .subscribe((result:any)=>{
            console.log(result);
        })
        
    }
}