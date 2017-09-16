import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondPageComponent } from './second-page.component';
import { SecondSubOneComponent } from './second-sub-one/second-sub-one.component';
import { SecondSubTwoComponent} from './second-sub-two/second-sub-two.component';

const APP_ROUTES=
[
{path:"./subone",  component:SecondSubOneComponent},
{path:"./subtwo",  component:SecondSubTwoComponent}

];
@NgModule({
  declarations: [
    SecondPageComponent,
    SecondSubOneComponent,
    SecondSubTwoComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(APP_ROUTES) //common module allows ngIf and ngFor
  ],
  providers: [],
  exports:[SecondPageComponent, SecondSubOneComponent,SecondSubTwoComponent] //Must export it in order to work, don't need to export
  //the childs from the SecondPageComponent because they only depend on this page not the main module

})
export class SecondModule { }
