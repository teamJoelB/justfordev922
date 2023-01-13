import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemoComponent } from './memo/memo.component';
import { MemoRecuComponent } from './memo-recu/memo-recu.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MemoComponent,
    MemoRecuComponent,
    ConnexionComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
