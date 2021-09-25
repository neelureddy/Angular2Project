import { FavouriteComponent } from './favourite/favourite.component';
import { SummaryPipe } from './summary.pipe';
import { CoursesService } from './course/courses.service';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './course/courses.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    SummaryPipe,
    FavouriteComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
