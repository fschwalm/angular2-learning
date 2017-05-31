import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-first-with-cli',
  templateUrl: './my-first-with-cli.component.html',
  styleUrls: ['./my-first-with-cli.component.css']
})
export class MyFirstWithCliComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('cool...')
  }

}
