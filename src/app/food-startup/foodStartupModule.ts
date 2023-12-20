import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FoodStartupComponent } from './food-startup.component';


@NgModule({
  declarations: [
    FoodStartupComponent
  ],

  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'Food-Startup-Program',
        component: FoodStartupComponent,
      },
    ]),
  ],
})
export class FoodstartupModule {}