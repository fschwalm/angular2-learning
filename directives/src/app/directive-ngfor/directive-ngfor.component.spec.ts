import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveNgforComponent } from './directive-ngfor.component';

describe('DirectiveNgforComponent', () => {
  let component: DirectiveNgforComponent;
  let fixture: ComponentFixture<DirectiveNgforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveNgforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveNgforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
