import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Demo01Component } from './demo01/demo01.component';
import { Demo04Component } from './demo02/demo04.component';
import { Demo07Component } from './demo03/demo07.component';
import { Demo10Component } from './demo04/demo10.component';
import { Demo13Component } from './demo05/demo13.component';
import { Demo16Component } from './demo06/demo16.component';
import { TestDirective } from './demo06/test.directive';
import { TestPipe } from './demo06/test.pipe';
import { Demo20Component } from './demo07/demo20.component';
import { LogService } from './demo07/log.service';
import { UpService } from './service/up.setvice';
import { Demo30Component } from './service/demo30.component';
import { Demo40Component } from './demo12_http/demo40.component';
import { HttpClientModule } from '@angular/common/http';
import { MyhttpService } from './demo12_http/myhttp.service';
import { sonComponent } from './demo14_communication/demo_son.component';
import { parentComponent } from './demo14_communication/demo_parent.component';
import { ChangeColorDirective } from './service/changecolor.directive';
import { DparentComponent } from './demo15_component.ts/Dparent.component';
import { registerComponent } from './demo15_component.ts/register.component.2';
import { loginComponent } from './demo15_component.ts/login.component.1';
import { appRoutingModule } from './app.router';

@NgModule({
  //自定义组件 管道 过滤登记处
  declarations: [
    AppComponent,
    TestDirective,
    TestPipe,
   ChangeColorDirective,
    Demo01Component,
    Demo04Component,
    Demo07Component,
    Demo10Component,
    Demo13Component,
    Demo16Component,
    Demo20Component,
    Demo30Component,
    Demo40Component,
    parentComponent,
    sonComponent,
    DparentComponent,
    registerComponent,
    loginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    appRoutingModule
  ],
  providers: [
    //服务登记处
    LogService,
     MyhttpService,
    UpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
