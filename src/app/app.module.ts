import { SuccessComponent } from './alerts/success/success.component';
import { WarningComponent } from './alerts/warning/warning.component';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import { FooterpanelComponent } from './page/footerpanel/footerpanel.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderpanelComponent } from './page/headerpanel/headerpanel.component';
import { MainpanelComponent } from './page/mainpanel/mainpanel.component';
import { NavbarpanelComponent } from './page/navbarpanel/navbarpanel.component';
import { SidebarpanelComponent } from './page/sidebarpanel/sidebarpanel.component';
import { AccountsComponent } from './features/accounts/accounts.component';
import { ServerComponent } from './server/server.component';
import { FormsModule } from '@angular/forms';
import { Lesson30Component } from './lessons/lesson30/lesson30.component';

export const ROUTES: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    HeaderpanelComponent,
    FooterpanelComponent,
    SidebarpanelComponent,
    MainpanelComponent,
    NavbarpanelComponent,
    AccountsComponent,
    ServerComponent,
    WarningComponent,
    SuccessComponent,
    Lesson30Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
