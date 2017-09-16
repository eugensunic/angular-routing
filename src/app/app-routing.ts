
   //THIS IS THE ENTIRE ROUTING FILE, IN IT IS GOOD BECAUSE YOU CAN SEE YOU ENTIRE PROJECT TREE IN ONE PLACE!

//imports are placed here because we don't want to write too many imports
//in the main app file, it looks ugly, this way we can stay organized. Especially if we have big projects
import { RouterModule, Routes } from '@angular/router';

import { SecondPageComponent } from './second-page/second-page.component';
import { SecondSubOneComponent } from './second-page/second-sub-one/second-sub-one.component';
import { SecondSubTwoComponent} from './second-page/second-sub-two/second-sub-two.component';

import { ThirdPageComponent } from './third-page/third-page.component';
import { ThirdSubOneComponent } from './third-page/third-sub-one/third-sub-one.component';

import { ErrorPageComponent } from './error-page/error-page.component';

export const APP_ROUTES:Routes= [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'second', component:  SecondPageComponent,

  children: [
        { path: '', redirectTo: 'second', pathMatch: 'full' },
        { path: 'subone',    component:   SecondSubOneComponent},
        { path: 'subtwo',    component:   SecondSubTwoComponent }
      ]
   },
  { path: 'third',  component:  ThirdPageComponent,
  children: [
        { path: '', redirectTo: 'third', pathMatch: 'full' },
        { path: 'subone',    component:   ThirdSubOneComponent}
      ]},
  { path: '**',  component:  ErrorPageComponent, pathMatch:'full'}
];
//path can be whatever you want, it can be "blabla",
//the value for the path parameter is optional, but keep it as short as possible and more importantly, logical.
