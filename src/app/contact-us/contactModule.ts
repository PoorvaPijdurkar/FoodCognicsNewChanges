import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactUsComponent } from './contact-us.component';

@NgModule({
  declarations: [

  ],

  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'contact',
        component: ContactUsComponent,
      },

    ]),
  ],
})
export class ContactModule {}
