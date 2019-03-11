import { Component } from '@angular/core';

//数据绑定


@Component({
    selector:'demo10',
    templateUrl:'./demo11.component.html',
    styleUrls:['./demo12.component.css']
})

export class Demo10Component {
    answer = "a";
    imgUrl ="../../img/po.jpg";
    uname="zhang";
    headClick(){
        console.log("啊啊啊啊啊啊啊啊啊啊啊啊");
    }

}