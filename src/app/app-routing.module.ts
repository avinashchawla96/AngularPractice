import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { AppComponent } from './app.component'
import { HeaderComponent } from './header/header.component'
import { RegisterComponent } from './register/register.component'
import { LoginComponent } from './login/login.component';
import { HeroComponent } from './hero/hero.component';
import { HerocountComponent } from './herocount/herocount.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'details', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'hero', component: HeroComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
