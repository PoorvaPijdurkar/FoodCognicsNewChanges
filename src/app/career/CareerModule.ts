import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CareerComponent } from './career.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CareerComponent
  ],

  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: 'career',
        component: CareerComponent,
      },

    ]),
  ],
})
export class CareerModule {}
