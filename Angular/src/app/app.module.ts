import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { CrudService } from './services/crud.service';
import { LoginandregistrationService } from './services/loginandregistration.service';

import { AuthInterceptor } from './aouth/intersepter';
import { AouthGuard } from './aouth/aouth.guard';

import { SharedModule } from './shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NavbarComponent } from './navbar/navbar.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { initializeKeycloak } from './uitility/app.init';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './store/app.state';
import { LoadingSpinnerComponent } from './comman/loading-spinner/loading-spinner.component';
import { EffectsModule } from '@ngrx/effects';
import { LoggedInServce } from './login-registration/store/login.effects';



@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
    NavbarComponent,
    LoadingSpinnerComponent,

  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    SharedModule,
    HttpClientModule,
    KeycloakAngularModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot(),
    EffectsModule.forRoot([LoggedInServce]),
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }, CrudService,
    LoginandregistrationService,
    AouthGuard,
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: initializeKeycloak,
    //   multi: true,
    //   deps: [KeycloakService],
    // },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
