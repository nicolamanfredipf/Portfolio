import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainBackgroundComponent } from './components/main-background/main-background.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavCardsComponent } from './components/nav-cards/nav-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    MainBackgroundComponent,
    NavbarComponent,
    NavCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
