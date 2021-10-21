import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WithComponent } from './pages/with/with.component';
import { WithoutComponent } from './pages/without/without.component';

@NgModule({
  declarations: [
    AppComponent,
    WithComponent,
    WithoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
