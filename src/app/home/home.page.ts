import { Component } from '@angular/core';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private streamingMedia: StreamingMedia) {}

  playStreaming(url){
  	let options: StreamingVideoOptions = {
	  successCallback: () => { console.log('Video played') },
	  errorCallback: (e) => { console.log(e, 'Error streaming') },
	  orientation: 'potrait',
	  shouldAutoClose: true,
	  controls: true
	};

	this.streamingMedia.playVideo(url, options);
  }

}
