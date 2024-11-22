import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './layoust/sidebar/sidebar.component';
import { HeaderComponent } from './layoust/header/header.component';
import { DashboardComponent } from './layoust/dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { PostContentComponent } from './layoust/post-content/post-content.component';
import { UsersComponent } from './authentication/users/users.component';
import { LoginComponent } from './authentication/login/login.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    DashboardComponent,
    HomeComponent,
    PostContentComponent,
    UsersComponent,
    LoginComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
