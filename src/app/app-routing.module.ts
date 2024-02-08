import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
 
  {path:'create', component:CreateComponent},
  {path:'search',component:SearchComponent},
  {path:'success',component:SuccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
