import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit {

  @Input() valor: number;
  constructor() { 
    this.log("constructor");
  }

  ngOnInit() {
    this.log("ngOnInit");
  }

  ngOnChanges() {
    this.log("ngOnChanges");
  }

  ngOnDestroy() {
    this.log("ngOnDestroy")
  }

  log(message: string) {
    console.log(message)
  }

}
