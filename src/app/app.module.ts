import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { appRoutingModule } from './app.routing';
import { LoginnComponent } from './loginn/loginn.component';



@NgModule({
 
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    LoginComponent,
    RegisterComponent,
    LoginnComponent,
   
  ],
  imports: [
    BrowserModule,
    appRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
