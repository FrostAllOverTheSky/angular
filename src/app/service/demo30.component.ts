import { Component, OnInit } from '@angular/core';
import { UpService } from './up.setvice';
@Component({
    selector: 'demo30',
    templateUrl: 'demo31.component.html',
    styleUrls:["demos32.component.css"]
})

export class Demo30Component implements OnInit {
    constructor(private myup:UpService) { }

    ngOnInit() { }
    startBeat(){
        this.myup.start();
    }
    stopBeat(){
        this.myup.stop();
        
    }
}