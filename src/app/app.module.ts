import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { SearchComponent } from './search/search.component';
import { SuccessComponent } from './success/success.component';



@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    SearchComponent,
    SuccessComponent,
  

  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
