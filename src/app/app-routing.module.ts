import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { AppComponent } from './app.component'
import { HeaderComponent } from './header/header.component'
import { RegisterComponent } from './register/register.component'
import { LoginComponent } from './login/login.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { HeroComponent } from './hero/hero.component';
import { HerocountComponent } from './herocount/herocount.component';
import { HeroFormComponent } from './hero-form/hero-form.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'details', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationFormComponent },
  { path: 'hero', component: HeroComponent },
  { path: 'heroform', component: HeroFormComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
