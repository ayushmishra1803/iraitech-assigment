import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FirstQuestionComponent } from './Components/first-question/first-question.component';
import { SecondQuestionComponent } from './Components/second-question/second-question.component';
import { ThirdQuestionComponent } from './Components/third-question/third-question.component';
import { FourthQuestionComponent } from './Components/fourth-question/fourth-question.component';
import { FirstComponentComponent } from './Components/fourth-question/first-component/first-component.component';
import { SecondComponentComponent } from './Components/fourth-question/second-component/second-component.component';
import { ThirdComponentComponent } from './Components/fourth-question/third-component/third-component.component';
import { FourthComponentComponent } from './Components/fourth-question/fourth-component/fourth-component.component';
import { YComponentComponent } from './Components/second-question/ycomponent/ycomponent.component';
import { XComponentComponent } from './Components/second-question/xcomponent/xcomponent.component';
import { FifthComponentComponent } from './Components/fourth-question/fifth-component/fifth-component.component';
import { MaterialMdoule } from './module/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FirstQuestionComponent,
    SecondQuestionComponent,
    ThirdQuestionComponent,
    FourthQuestionComponent,
    FirstComponentComponent,
    SecondComponentComponent,
    ThirdComponentComponent,
    FourthComponentComponent,
    FifthComponentComponent,
    XComponentComponent,
    YComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialMdoule,
    FormsModule,
    ReactiveFormsModule,

    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
