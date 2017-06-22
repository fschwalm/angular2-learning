import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  courseURI: string;
  courses: string[];

  constructor() {
    this.courseURI = 'loiane.com.br';
    this.courses = ['Angular', 'React', 'TypeScript'];
  }

  ngOnInit() {
  }

}
