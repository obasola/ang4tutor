import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import { FooterpanelComponent } from './page/footerpanel/footerpanel.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderpanelComponent } from './page/headerpanel/headerpanel.component';
import { MainpanelComponent } from './page/mainpanel/mainpanel.component';
import { NavbarpanelComponent } from './page/navbarpanel/navbarpanel.component';
import { SidebarpanelComponent } from './page/sidebarpanel/sidebarpanel.component';

export const ROUTES: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    HeaderpanelComponent,
    FooterpanelComponent,
    SidebarpanelComponent,
    MainpanelComponent,
    NavbarpanelComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
