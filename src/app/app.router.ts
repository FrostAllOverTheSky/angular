//创建一个自定义路由模块
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { registerComponent } from './demo15_component.ts/register.component.2';
import { loginComponent } from './demo15_component.ts/login.component.1';

const routes: Routes = [
    { path: '', component : loginComponent },
    { path: 'register', component : registerComponent }

]

@NgModule({
    //将forChild 改为-->forRout
    imports: [RouterModule.forRoot(routes)],
    exports: [ RouterModule ],
    declarations: [],
})
export class appRoutingModule { }