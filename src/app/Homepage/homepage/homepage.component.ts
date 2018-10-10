import { Component, OnInit } from '@angular/core';
import { GetImageService } from '../../getImage/get-image.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {


  ranColor: string;
  infoImages: any;
  arrayTags: string[] = [];
  arrayColor: any = [];
  imageModal: string;
  userModal: string;

  constructor(private imageService: GetImageService) { }

  ngOnInit() {
    this.randomColor();
    this.getInfoImage();
  }

  getInfoImage() {
    this.imageService.getImage().subscribe(
      images => {
        this.infoImages = images.hits;
        console.log(this.infoImages);

        this.arrayTagsImage(images.hits)
      }
    )
  }

  arrayTagsImage(images) {
    this.arrayTags = images.map(img => { return { tag: img.tags.split(',')[0], color: this.randomColor() || ('#a31212') } });
  }

  randomColor() {
    return this.ranColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

  viewModal(i) {
    this.imageModal = this.infoImages[i].webformatURL;
    this.userModal = this.infoImages[i].user;
  }

}
