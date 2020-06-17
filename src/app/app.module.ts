import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TreeComponent } from './tree/tree.component';
import { PersonComponent } from './tree/person/person.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TreeComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
