import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // These are used to give the application routing capability

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

/* Configure the routes available in the application here
    A typical route will have two properties:
      path: A string matching the url in the browser address bar
      component: The component created when navigating this route
 */
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // set a default route to the dashboard with full url '/dashboard'
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'detail/:id', component: HeroDetailComponent } // using a parameterised route, :id is a placeholder for a specific id
];

@NgModule({ // metadata initialises router and listens for browser location changes
  imports: [RouterModule.forRoot(routes)], // adds the module to the class and configure with your routes
  exports: [RouterModule] // lets the module be available throughout the application
})
export class AppRoutingModule { }
