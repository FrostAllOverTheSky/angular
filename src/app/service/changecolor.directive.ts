// 自定义指令传值和操作
import { Directive, ElementRef, Input, OnInit } from '@angular/core';

// tslint:disable-next-line:directive-selector
@Directive({  selector: '[changecolor]' })
export class ChangeColorDirective implements OnInit {
    // 在指令类被调用是 会读取changecolor的值。
    @Input() changecolor = '';
    constructor( private myER: ElementRef ) {
        console.log('我被调用了');
        console.log(myER.nativeElement);
    }
    ngOnInit() {
        console.log('初始化成功' + this.changecolor);
        this.myER.nativeElement.style.color = this.changecolor;
    }
}
