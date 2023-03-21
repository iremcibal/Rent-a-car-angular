import { ListImageResponse } from './../../models/image/listImageResponse';
import { Component } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent {
  images:ListImageResponse[]=[];
  imgUrl:string="https://localhost:7206/Uploads/Images/";
  constructor(private imageService:ImageService){ }

  ngOnInit(): void {
    this.getImages();
  }

  getImages(){
    this.imageService.getImages().subscribe(response => {
      this.images = response.data;
    })
  }

}
