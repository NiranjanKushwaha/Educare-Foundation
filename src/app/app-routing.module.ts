import { HomeComponent } from './components/home/home.component';
import { WomenEmpowermentComponent } from './components/women-empowerment/women-empowerment.component';
import { OldPeopleComponent } from './components/old-people/old-people.component';
import { ChildEducationComponent } from './components/child-education/child-education.component';
import { DonateComponent } from './components/donate/donate.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'donate', component: DonateComponent },
  { path: 'child-education', component: ChildEducationComponent },
  { path: 'grandPeople', component: OldPeopleComponent },
  { path: 'women', component: WomenEmpowermentComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
