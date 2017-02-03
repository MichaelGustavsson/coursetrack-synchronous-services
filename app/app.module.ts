import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { CourseDetailComponent } from './course/course-detail.component';
import { CourseListComponent } from './course/course-list.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [
    AppComponent,
    CourseDetailComponent,
    CourseListComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
