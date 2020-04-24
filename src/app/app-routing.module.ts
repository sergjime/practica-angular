import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PulsationsComponent } from './components/pulsations/pulsations.component';
import { GeneralComponent } from './components/general/general.component';


const routes: Routes = [
  {path: '', redirectTo: '/general', pathMatch: 'full'},
  {path: 'general', component: GeneralComponent},
  {path: 'pulsaciones', component: PulsationsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
