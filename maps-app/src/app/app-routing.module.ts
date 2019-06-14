import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { SettingsComponent } from './settings/settings.component';
import { AuthGuard } from './auth.guard';
import { IsAuthGuard } from './is-auth.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [


  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    },
    canActivate:[IsAuthGuard]
 
  },

  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
    canActivate:[IsAuthGuard]
   },

   {
    path: 'map',
    component: MapComponent,
    data: {
      title: 'Map Page'
    },
    canActivate: [AuthGuard]
 
  },

  {
    path: 'settings',
    component: SettingsComponent,
    data: {
      title: 'Settings Page'
    },
    canActivate: [AuthGuard]
  },

  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: 'Settings Page'
    },
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
