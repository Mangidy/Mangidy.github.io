import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinancierHomeComponent } from 'src/app/components/financier/financier-home/financier-home.component';
import { FinancierNotificationComponent } from 'src/app/components/financier/financier-notification/financier-notification.component';
import { FinancierPayementComponent } from 'src/app/components/financier/financier-payement/financier-payement.component';
import { FinancierStatistiqueComponent } from 'src/app/components/financier/financier-statistique/financier-statistique.component';

const routes: Routes = [
  {path :'',component: FinancierHomeComponent,
  children:[
  {path:'home',component: FinancierHomeComponent},
  {path:'paying',component: FinancierPayementComponent},
  {path: 'statistics', component : FinancierStatistiqueComponent},
  {path: 'notification', component : FinancierNotificationComponent},
  {path:'',redirectTo:'/financier/paying',pathMatch:'full'}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinancierRoutingModule { }
