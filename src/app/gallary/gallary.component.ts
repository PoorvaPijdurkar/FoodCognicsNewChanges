import { Component } from '@angular/core';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.scss']
})
export class GallaryComponent {

  apiLoaded = false; 

  videoId='chb3ZY8YrFo';
  videoId1='UnOUEePeVfM';
  videoId2='M6bJDyLI7hg';
  videoId3='XIvKM9em1cw';
  videoId4='JVS89DC5LLY';

  gallery: any[] = [
    {
      imageUrl: 'assets/portfolio/img1.jpg',
    },
    {
      imageUrl: 'assets/portfolio/img2.jpg',
    },
    {
      imageUrl: 'assets/portfolio/img3.jpg',
    },
    {
      imageUrl: 'assets/portfolio/img4.jpg',
    },
    {
      imageUrl: 'assets/portfolio/img5.jpg',
    },
    {
      imageUrl: 'assets/portfolio/img6.jpg',
    },
    {
      imageUrl: 'assets/portfolio/img9.jpg',
    },
    {
      imageUrl: 'assets/portfolio/img10.jpg',
    },
    {
      imageUrl: 'assets/portfolio/img8.jpg',
    },
    {
      imageUrl: 'assets/portfolio/img11.jpg',
    },
    // {
    //   imageUrl: 'assets/portfolio/img7.jpg',
    // },
    {
      imageUrl: 'assets/portfolio/img12.jpg',
    },
    {
      imageUrl: 'assets/portfolio/img13.jpg',
    },
  ];


  
  // videos: any[] = [
  // {
  //   type: 'video',
  //   source: 'https://www.youtube.com/watch?v=chb3ZY8YrFo',
  // },
  // {
  //   type: 'video',
  //   source: 'https://www.youtube.com/watch?v=UnOUEePeVfM',
  // },
  // {
  //   type: 'video',
  //   source: 'https://www.youtube.com/watch?v=M6bJDyLI7hg',
  // },
  // ]

  ngOnInit() {
    if (!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
  }


}

