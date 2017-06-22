import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  courseURI: string;
  courses: string[];

  constructor(private service: CourseService) {
    this.courseURI = 'loiane.com.br';
  }

  ngOnInit() {
    this.courses = this.service.getCourses();
  }ß
}
