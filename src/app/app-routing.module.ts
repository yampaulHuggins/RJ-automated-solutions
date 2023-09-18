import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './main/contact/contact/contact.component';
import { HomeComponent } from './main/home/home/home.component';
import { ServicesComponent } from './main/services/services/services.component';

const routes: Routes = [
  {path: 'contact', component: ContactComponent},
  {path: 'home', component: HomeComponent},
  {path: 'services', component: ServicesComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
