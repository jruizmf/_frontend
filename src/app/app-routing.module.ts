import { NgModule } from '@angular/core';
import { AppComponent } from './app.component'
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";
import { HomeComponent } from "./pages/home/home.component";
import { AuthGuard } from './middleware/auth.guard';
import { LandingComponent } from './pages/landing/landing.component';
import { ChatComponent } from './pages/chat/chat.component';
import { GroupComponent } from './pages/group/group.component';
import { GeneralComponent } from './pages/general/general.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { RoutesComponent } from './pages/routes/routes.component';

const routes: Routes = [
  { path: "login", component: LoginComponent, pathMatch: "full" },
  { path: "register", component: RegisterComponent, pathMatch: "full" },
  { path: "home", component: HomeComponent, canActivate: [AuthGuard]  },
  { path: "chat", component: ChatComponent, canActivate: [AuthGuard]  },
  { path: "group", component: GroupComponent, canActivate: [AuthGuard]  },
  { path: "route", component: RoutesComponent, canActivate: [AuthGuard]  },
  { path: "general", component: GeneralComponent, canActivate: [AuthGuard]  },
  { path: "calendar", component: CalendarComponent, canActivate: [AuthGuard]  },
  { path: "", component: LandingComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
