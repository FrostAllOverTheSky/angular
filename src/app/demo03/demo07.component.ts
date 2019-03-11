import { Component } from '@angular/core';

//angular指令


@Component({
    selector:'demo07',
    templateUrl:'./demo08.component.html',
    styleUrls:['./demo09.component.css']
})

export class Demo07Component {
    stulist = [
        {score:80,age:21,name:'dinidn'},
        {score:70,age:30,name:'inging'},
        {score:40,age:10,name:'xingxing'},
        {score:90,age:22,name:'lala'},
        {score:60,age:25,name:'feifei'}
    ]
}