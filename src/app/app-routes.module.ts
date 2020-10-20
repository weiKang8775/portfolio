import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';

const appRoutes: Routes = [

  // Root Route
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  // Home
  { path: 'home', component: HomeComponent, data: { animation: 'HomePage' } },

  // About
  { path: 'about', component: AboutComponent, data: { animation: "AboutPage" } },

  // Skills
  { path: 'skills', component: SkillsComponent, data: { animation: "SkillsPage" } },

  // Contact
  { path: 'contact', component: ContactComponent, data: { animation: "ContactPage" }}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class appRoutesModule { }