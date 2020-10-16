import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [

  // Root Route
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  // Home
  { path: 'home', component: HomeComponent, data: { animation: 'HomePage' } },

  // About
  { path: 'about', component: AboutComponent, data: { animation: "AboutPage" } }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class appRoutesModule { }