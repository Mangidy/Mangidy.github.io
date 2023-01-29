import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillingComponent } from 'src/app/components/client/billing/billing.component';
import { CarRecoveryComponent } from 'src/app/components/client/car-recovery/car-recovery.component';
import { ClientHomeComponent } from 'src/app/components/client/client-home/client-home.component';
import { ClientNotificationComponent } from 'src/app/components/client/client-notification/client-notification.component';
import { DepositComponent } from 'src/app/components/client/deposit/deposit.component';
import { DescriptionComponent } from 'src/app/components/client/description/description.component';
import { HomepageComponent } from 'src/app/components/client/homepage/homepage.component';
import { RepairHistoryComponent } from 'src/app/components/client/repair-history/repair-history.component';
import { RepairProgressComponent } from 'src/app/components/client/repair-progress/repair-progress.component';
import { SearchComponent } from 'src/app/components/client/search/search.component';

const routes: Routes = [
  { path:'',component:ClientHomeComponent,children:
[
  {path:'home',component: HomepageComponent},
  { path:'deposit', component: DepositComponent}, 
  { path:'progress', component: RepairProgressComponent}, 
  { path:'billing', component: BillingComponent}, 
  { path:'recovery', component: CarRecoveryComponent}, 
  { path:'history', component: RepairHistoryComponent}, 
  { path:'search', component: SearchComponent}, 
  { path:'search/:msg', component: SearchComponent},
  { path:'notification', component: ClientNotificationComponent}, 
  { path:'description', component: DescriptionComponent}, 
  {path:'',redirectTo:'client/home',pathMatch:'full'}
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
