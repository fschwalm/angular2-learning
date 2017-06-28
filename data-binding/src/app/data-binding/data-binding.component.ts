import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'loiane.com';
  urlImagem: string = 'http://lorempixel.com/400/200/nature';
  currentValue: string;
  storedValue: string;
  isMouseOver: boolean = false;
  nome: string = "";
  pessoa: any = {
    nome: "",
    idade: ""
  }

  constructor() {
    this.currentValue = "";
  }

  click() {
    alert("Botão clicado");
  }

  onKeyup(e: KeyboardEvent) {
    this.currentValue = (<HTMLInputElement>e.target).value;
  }

  onMouseOver() {
    this.isMouseOver = !this.isMouseOver;
  }

  persistValue(value: string) {
    this.storedValue = value;
  }

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
