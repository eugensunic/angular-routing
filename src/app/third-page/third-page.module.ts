import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThirdPageComponent } from './third-page.component';
import { ThirdSubOneComponent } from './third-sub-one/third-sub-one.component';

const APP_ROUTES=[
  {path:"./subone", component:ThirdSubOneComponent}
]

@NgModule({
  declarations: [
    ThirdPageComponent,
    ThirdSubOneComponent

  ],
  imports: [
    CommonModule, RouterModule.forChild(APP_ROUTES) //common module allows ngIf and ngFor
  ],
  providers: [],
  exports:[ThirdPageComponent, ThirdSubOneComponent] //Must export it in order to work, don't need to export
  //the childs from the SecondPageComponent because they only depend on this page not the main module

})
export class ThirdModule { }
