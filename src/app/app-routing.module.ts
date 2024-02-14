import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { TargetComponent } from './target/target.component';

const routes: Routes = [
  {path:'target',component:TargetComponent}

=======
import { SearchTicketsComponent } from './search-tickets/search-tickets.component';
import { UpdateComponent } from './update/update.component';
import { UpdateSuccessDialogComponent } from './update-success-dialog/update-success-dialog.component';

const routes: Routes = [
  { path: 'search-tickets', component: SearchTicketsComponent },
  { path: 'update/:id', component: UpdateComponent },
  { path: 'update-success-dialog', component: UpdateSuccessDialogComponent }
>>>>>>> search
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
<<<<<<< HEAD

=======
>>>>>>> search
