import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateAthleteComponent } from './create-athlete/create-athlete.component';
import { AthleteListComponent } from './athlete-list/athlete-list.component';
import { AthleteDetailsComponent } from './athlete-details/athlete-details.component';
import { UpdateAthleteComponent } from './update-athlete/update-athlete.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CreateAthleteComponent,
    AthleteListComponent,
    AthleteDetailsComponent,
    UpdateAthleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
