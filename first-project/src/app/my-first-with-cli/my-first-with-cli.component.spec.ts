import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFirstWithCliComponent } from './my-first-with-cli.component';

describe('MyFirstWithCliComponent', () => {
  let component: MyFirstWithCliComponent;
  let fixture: ComponentFixture<MyFirstWithCliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFirstWithCliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFirstWithCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
