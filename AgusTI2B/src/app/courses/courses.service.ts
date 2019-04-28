import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  

  constructor() { }
  getCourses(){
    return ['author1', 'author2', 'author3'];
  }
}
