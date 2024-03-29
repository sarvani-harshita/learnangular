import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomechildComponent } from './home/homechild/homechild.component';
import { SimpledirectiveDirective } from './directive/simpledirective.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomechildComponent,
    SimpledirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
