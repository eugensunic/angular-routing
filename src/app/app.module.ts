import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SecondModule } from './second-page/second-page.module'
//import { ThirdModule } from './third-page/third-page.module'
import { APP_ROUTES } from './app-routing';
import { ThirdModule } from './third-page/third-page.module';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    //we have successfully deleted the components from the declarations
    //example: we have put the components from the second page inside a routing ts file
    //to avoid import population in this file

  ],
  imports: [
    BrowserModule, SecondModule, ThirdModule, RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
