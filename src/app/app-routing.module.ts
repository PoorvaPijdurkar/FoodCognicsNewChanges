// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodComponent } from './Sector/food/food.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./home/HomeModule').then((m) => m.HomeModule),
  },
  {
    path: 'services',
    loadChildren: () =>
      import('./services/ServicesModule').then((m) => m.ServiceModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./teams/teamsModule').then((m) => m.TeamsModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./food-startup/foodStartupModule').then((m) => m.FoodstartupModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./about-knowmore/aboutUsModule').then((m) => m.AboutusModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./gallary/gallaryModule').then((m) => m.GallaryModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./career/CareerModule').then((m) => m.CareerModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./contact-us/contactModule').then((m) => m.ContactModule),
  },
  { path: 'food-categories/:category', component: FoodComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
