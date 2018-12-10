import { Component, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  myVideoList = [];
  title = "SimpleVideoPlayerAngular";
  currentVideo: string = "";
  @ViewChild("player")
  player: any;

  constructor() {}

  ngOnInit(): void {
    this.myVideoList = videoList;
    this.currentVideo = this.myVideoList[0].videoUrl;
  }

  next(e) {
    e.scroll(e.scrollLeft + 100, 0);
  }
  prev(e) {
    e.scroll(e.scrollLeft - 100, 0);
  }
  play(video) {
    this.currentVideo = video.videoUrl;
    this.player.nativeElement.pause();
    this.player.nativeElement.load();
    this.player.nativeElement.play();
  }
}
const angularImg =
  "http://www.sharjbook.com/images/logo/Sharjbook-Logo-small.png?v=oQomg1xuzIJmzwnSk9EfUvJ6RJDNFdtM1KoWlYCHnW8";
const videoList = [
  {
    title: "video #1",
    thumbnail: angularImg,
    videoUrl: "http://www.sharjbook.com/video/sharjbook1.mp4"
  },
  {
    title: "video #2",
    thumbnail: angularImg,
    videoUrl: "http://www.sharjbook.com/video/sharjbook2.mp4"
  },
  {
    title: "video #3",
    thumbnail: angularImg,
    videoUrl: "http://www.sharjbook.com/video/sharjbook3.mp4"
  },
  {
    title: "video #4",
    thumbnail: angularImg,
    videoUrl: "http://www.sharjbook.com/video/sharjbook4.mp4"
  },
  {
    title: "video #5",
    thumbnail: angularImg,
    videoUrl: "http://www.sharjbook.com/video/sharjbook5.mp4"
  },
  {
    title: "video #5",
    thumbnail: angularImg,
    videoUrl: "http://www.sharjbook.com/video/sharjbook5.mp4"
  },
  {
    title: "video #5",
    thumbnail: angularImg,
    videoUrl: "http://www.sharjbook.com/video/sharjbook5.mp4"
  },
  {
    title: "video #5",
    thumbnail: angularImg,
    videoUrl: "http://www.sharjbook.com/video/sharjbook5.mp4"
  },
  {
    title: "video #5",
    thumbnail: angularImg,
    videoUrl: "http://www.sharjbook.com/video/sharjbook5.mp4"
  },
  {
    title: "video #5",
    thumbnail: angularImg,
    videoUrl: "http://www.sharjbook.com/video/sharjbook5.mp4"
  }
];
