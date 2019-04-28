import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  title = 'Belajar Angular';
  binding = 'property-binding';
  imageUrl = 'http://lorempixel.com/400/200';
  colSpan = 2;
  isActive = false;
  nama = "Roberto";
  onSave($event){
    $event.stopPropagation();
    console.log("button sudah diklik")
  }
  onDivClick($event){
    console.log("ini method div,$event")
  }
  onKeyUp(){
    console.log("enter was pressed")
  }
  Courses;
  constructor(private service:CoursesService) { 
    // this.Courses = service.getCourses();
  }
  ngOnInit() {
  }

}
