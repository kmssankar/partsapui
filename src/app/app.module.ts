import { ApphttpInterceptorService } from './services/http/apphttp-interceptor.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';
import { ReportsComponent } from './reports/reports.component';
import { LogoutComponent } from './logout/logout.component';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    SearchComponent,
    HeaderComponent,
    FooterComponent,
    ErrorComponent,
    ReportsComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule, 
    NgxChartsModule, 
    BrowserAnimationsModule,
  ],
  providers: [{provide:HTTP_INTERCEPTORS ,useClass:ApphttpInterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
