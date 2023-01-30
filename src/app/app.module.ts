import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Where to find ngModel which allows two-way data binding
import { HttpClientModule} from '@angular/common/http'; // Angular's way of communicating with a remove server over HTTP
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [ // each component must be declared in exactly one ngModule
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [ // external modules needed by the application - these are accessible everywhere in the application
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // This module (v) intercepts HTTP requests and return simulated server responses - used instead of a real server
    // It is configured to the InMemoryDataService
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
