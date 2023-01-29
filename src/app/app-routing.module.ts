import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AtelierGuard } from './guard/atelier.guard';
import { ClientGuard } from './guard/client.guard';
import {  FinancierGuard } from './guard/financier.guard';

const routes: Routes = [
  { path:'home', component: HomeComponent},
  { path:'login', component: LoginComponent},
  { path:'adminlogin', component: AdminLoginComponent},
  { path:'signup', component: SignUpComponent}, 
   { path:'', redirectTo:'home', pathMatch:'full'},
   {
    path:'client',canActivate: [ClientGuard],loadChildren: ()=>import('./modules/client/client.module').then((m)=>m.ClientModule)
   },
   {
    path:'atelier',canActivate: [AtelierGuard],loadChildren: ()=>import('./modules/atelier/atelier.module').then((m)=>m.AtelierModule)
   },
   {
    path:'financier',canActivate:[FinancierGuard],loadChildren:()=>import('./modules/financier/financier.module').then((m)=>m.FinancierModule)
   },
  { path:'**', component: NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
