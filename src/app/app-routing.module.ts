import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewRaceComponent } from './race/new-race/new-race.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'race/new', component: NewRaceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
