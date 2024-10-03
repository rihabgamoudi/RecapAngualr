import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ClarityModule } from '@clr/angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,CoreModule,
    AppRoutingModule, ClarityModule,             // Import ClarityModule here
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
