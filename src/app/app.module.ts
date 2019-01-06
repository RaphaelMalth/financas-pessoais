import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import responsaveis por interceptar as requisições HTTP in memory. Necessário retirar para utilização de servidor real.
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'
import { InMemoryDatabase } from './in-memory-database'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDatabase) // Responsavel por interceptar a requisição HTTP in memory. Necessário retirar para utilização de servidor real.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
