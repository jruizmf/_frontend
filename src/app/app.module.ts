import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderComponent } from './components/loader/loader.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { AlertService } from './services/alert.service';
import { AuthInterceptor } from './helpers/auth.interceptor';
import { LandingComponent } from './pages/landing/landing.component';
import { ChatComponent } from './pages/chat/chat.component';
import { GroupComponent } from './pages/group/group.component';
import { RoutesComponent } from './pages/routes/routes.component';
import { CarditemComponent } from './components/carditem/carditem.component';
import { UseritemComponent } from './components/useritem/useritem.component';
import { GeneralComponent } from './pages/general/general.component';
import { ProfileComponent } from './page/profile/profile.component';

@NgModule({
  declarations: [ 
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavbarComponent,
    SidebarComponent,
    LoaderComponent,
    CarouselComponent,
    ConfirmationComponent,
    LandingComponent,
    ChatComponent,
    GroupComponent,
    RoutesComponent,
    CarditemComponent, 
    UseritemComponent,
    GeneralComponent,
    ProfileComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
