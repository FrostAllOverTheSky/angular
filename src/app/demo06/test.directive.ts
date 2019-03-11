import { Directive,ElementRef } from '@angular/core';
// 创建一个自定义指令
@Directive({ selector: '[test]' })
export class TestDirective {
    constructor(myEL:ElementRef) { 
        console.log('custom derective is called');
        console.log(myEL);
        myEL.nativeElement.style.color = "#ff0000";
    }
}