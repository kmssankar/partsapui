import { RegisterComponent } from './register/register.component';
import { RoutegaurdService } from './services/routegaurd.service';
import { LogoutComponent } from './logout/logout.component';
import { ReportsComponent } from './reports/reports.component';
import { ErrorComponent } from './error/error.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//order of the routes is important always add ** at last as it will match all urls
const routes: Routes = [
  { path: 'home/:name', component: HomeComponent ,canActivate:[RoutegaurdService]},
  { path: 'login', component: LoginComponent },
  { path: 'search', component: SearchComponent ,canActivate:[RoutegaurdService]},
  { path: 'reports', component: ReportsComponent,canActivate:[RoutegaurdService] },
  { path: 'logout', component: LogoutComponent },
  { path:'register',component: RegisterComponent},
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
