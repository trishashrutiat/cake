import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ExploreComponent } from './explore/explore.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DeleteComponent } from './delete/delete.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { RegistrationComponent } from './registration/registration.component';
import { ViewComponent } from './view/view.component';
import { HeaderComponent } from './header/header.component';


const routes: Routes = [

  {path:"",redirectTo:'home',pathMatch:'full'},
  {path:"",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"explore",component:ExploreComponent},
  {path:"welcome",component:WelcomeComponent},
  {path:"delete",component:DeleteComponent},
  {path:"forgetpass",component:ForgetpassComponent},
  {path:"register",component:RegistrationComponent},
  {path:"view",component:ViewComponent},
  {path:"header",component:HeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
