import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtelierAddreparationComponent } from 'src/app/components/atelier/atelier-addreparation/atelier-addreparation.component';
import { AtelierHomeComponent } from 'src/app/components/atelier/atelier-home/atelier-home.component';
import { AtelierLeaveComponent } from 'src/app/components/atelier/atelier-leave/atelier-leave.component';
import { AtelierNotificationComponent } from 'src/app/components/atelier/atelier-notification/atelier-notification.component';
import { AtelierReceptionComponent } from 'src/app/components/atelier/atelier-reception/atelier-reception.component';
import { AtelierRepairComponent } from 'src/app/components/atelier/atelier-repair/atelier-repair.component';

const routes: Routes = [
  { path:'', component : AtelierHomeComponent,
  children:[
    { path:'home', component: AtelierHomeComponent},
    { path:'reception', component: AtelierReceptionComponent},
    { path:'listing', component: AtelierRepairComponent},
    { path:'ticketing', component: AtelierLeaveComponent},
    { path:'notification', component: AtelierNotificationComponent},
    { path:'addreparation', component: AtelierAddreparationComponent},
    {path:'',redirectTo:'/atelier/reception',pathMatch:'full'}

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtelierRoutingModule { }
