import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoalComponent } from './goal/goal.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';

// define path here

const routes: Routes = [
  { path: 'goals', component: GoalComponent},
  { path: 'about', component: AboutComponent},
  { path:'**', component:NotFoundComponent},
];


// Ng import Array
@NgModule({
  imports: [RouterModule.forRoot(routes)],//the forRoot()method makes the router configurabvle at root level and supplies providers && directives needed for routing
  exports: [RouterModule]
})

export class AppRoutingModule { }
