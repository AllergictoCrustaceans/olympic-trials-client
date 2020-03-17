import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AthleteListComponent} from './athlete-list/athlete-list.component';
import {CreateAthleteComponent} from './create-athlete/create-athlete.component';
import {UpdateAthleteComponent} from './update-athlete/update-athlete.component';
import {AthleteDetailsComponent} from './athlete-details/athlete-details.component';


const routes: Routes = [
  {path: '', redirectTo: 'athlete', pathMatch: 'full'},
  {path: 'athletes', component: AthleteListComponent},
  {path: 'add', component: CreateAthleteComponent},
  {path: 'update/:id', component: UpdateAthleteComponent},
  {path: 'details/:id', component: AthleteDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
