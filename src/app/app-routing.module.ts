import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './layoust/dashboard/dashboard.component';
import { HeaderComponent } from './layoust/header/header.component';
import { SidebarComponent } from './layoust/sidebar/sidebar.component';
import { PostContentComponent } from './layoust/post-content/post-content.component';
import { UsersComponent } from './authentication/users/users.component';
import { LoginComponent } from './authentication/login/login.component';

const routes: Routes = [

  { path: '', component: HomeComponent,
    children: [
      {
        path: '', component: DashboardComponent
      },
      {
        path: 'header',component: HeaderComponent
      },
      {
        path: 'sidebar', component: SidebarComponent
      },
      {
        path: 'post-content', component: PostContentComponent
      },
      {
        path: 'user-content', component: UsersComponent
      },

    ]
  },
  {
    path: 'login', component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
