import { Component } from '@angular/core';

@Component({
  selector: 'youtube-video',
  template: `
    <div class="embed-container">
      <iframe width="560"
              height="315"
              frameborder="0"
              allowfullscreen
              src="https://www.youtube.com/embed/Pb6B_qpr180?autoplay=1">
      </iframe>
    </div>
  `,
  styles: [`
    .embed-container {
      position: relative;
      padding-bottom: 56.25%;
      height: 0;
      overflow: hidden;
    }
    .embed-container iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 97%;
      height: 97%;
    }
  `]
})
export class YoutubeVideoComponent {
}