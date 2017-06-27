import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'loiane.com';
  urlImagem: string = 'http://lorempixel.com/400/200/nature';

  constructor() { }

  getValor() {
    return 1;
  }

  setWidth(width: number) {
    return width;
  }

  setHeight(height: number) {
    return height;
  }

  ngOnInit() {
  }

}
