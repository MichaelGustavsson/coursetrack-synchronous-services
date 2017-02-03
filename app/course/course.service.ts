import { Injectable } from '@angular/core';

import { Course } from './course';
import { COURSES } from './../data/mock-data';

@Injectable()
export class CourseService{
  getCourses(): Course[]{
    return COURSES;
  }
}
