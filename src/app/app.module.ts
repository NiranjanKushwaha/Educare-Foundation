import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { GallaryModule } from './modules/gallaryModule/gallary.module';
import { ReusableModule } from './modules/reUsableModule/reusable.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DonateComponent } from './components/donate/donate.component';
import { ChildEducationComponent } from './components/child-education/child-education.component';
import { OldPeopleComponent } from './components/old-people/old-people.component';
import { WomenEmpowermentComponent } from './components/women-empowerment/women-empowerment.component';
import { HomeComponent } from './components/home/home.component';
import { VolunteersCardComponent } from './components/volunteers-card/volunteers-card.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    PageNotFoundComponent,
    DonateComponent,
    ChildEducationComponent,
    OldPeopleComponent,
    WomenEmpowermentComponent,
    HomeComponent,
    VolunteersCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    GallaryModule,
    ReusableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
