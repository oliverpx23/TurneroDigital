import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { environment } from 'src/environments/environment';
import { TurneroComponent } from './pages/turnero/turnero.component';
import { LoginComponent } from './pages/login/login.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { BoxTurnoComponent } from './components/box-turno/box-turno.component';

const config: SocketIoConfig = { 
  url: environment.wsUrl, 
  options: {} 
};
 


@NgModule({
  declarations: [
    AppComponent,
    TurneroComponent,
    LoginComponent,
    FooterComponent,
    NavbarComponent,
    BoxTurnoComponent
  ],
  imports: [
    NgbModule,
    SocketIoModule.forRoot(config),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
