import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {CursosModule} from './cursos/cursos.module';

import { AppComponent } from './app.component';
import { MyFirstComponent } from './my-first/my-first.component';
import { MyFirstWithCliComponent } from './my-first-with-cli/my-first-with-cli.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponent,
    MyFirstWithCliComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CursosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
