import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { TargetComponent } from './target/target.component';
import{HttpClientModule} from '@angular/common/http'
=======
import { SearchTicketsComponent } from './search-tickets/search-tickets.component';
import { UpdateComponent } from './update/update.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateSuccessDialogComponent } from './update-success-dialog/update-success-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
>>>>>>> search
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    HomeComponent,
    NavComponent,
    TargetComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
=======
    SearchTicketsComponent,
    UpdateComponent,
    UpdateSuccessDialogComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    // Declare any entry components here if needed
    UpdateSuccessDialogComponent
  ]
>>>>>>> search
})
export class AppModule { }
