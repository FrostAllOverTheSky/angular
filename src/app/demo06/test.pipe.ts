//创建自定义管道
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'myPipe'
})

export class TestPipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        console.log("123135153313" +"---"+ value);
         
         if(args[0] == 1) { return value.toUpperCase(); }
         else{ return value.toLowerCase();}
    }
}