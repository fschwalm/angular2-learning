import { Component } from '@angular/core';

@Component({
  selector: 'my-first-component',
  template: `
    <h1>My first component with Angular 2!</h1>
  `
})
export class MyFirstComponent {
  foo = 'bar';
}
