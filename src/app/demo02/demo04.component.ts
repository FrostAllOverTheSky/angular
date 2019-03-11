import { Component } from '@angular/core';

//angular指令


@Component({
    selector:'demo04',
    templateUrl:'./demo05.component.html',
    styleUrls:['./demo06.component.css']
})
export class Demo04Component{
list = ['封装','继承','多态'];
}