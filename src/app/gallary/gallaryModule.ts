import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GallaryComponent } from '../gallary/gallary.component';
import { YouTubePlayerModule } from '@angular/youtube-player';

@NgModule({
  declarations: [
    GallaryComponent
  ],

  imports: [
    CommonModule,
    YouTubePlayerModule,
    RouterModule.forChild([
      {
        path: 'gallery',
        component: GallaryComponent,
      },

    ]),
  ],
})
export class GallaryModule {}
