import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HowWorkComponent } from './how-work/how-work.component';

const routes: Routes = [
  {path:'' , redirectTo:'home' , pathMatch:'full'},
  {path:'home' , component:HomeComponent} ,
  {path:'howWork' , component:HowWorkComponent} ,
  {path:'contactUs' , component:ContactUsComponent} 
  // {path:'contact-us' , component:ContactUsComponent} ,
  // {path:'about' , component:AboutComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
