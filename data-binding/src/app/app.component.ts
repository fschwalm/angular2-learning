import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  valorInicial: number = 25;
  isDestroyed: boolean = false;

  increment() {
    this.valorInicial++;
  }

  destroy() {
    this.isDestroyed = !this.isDestroyed;
  }
}
