import { ColorService } from './../../services/color.service';
import { ListColorResponse } from './../../models/color/listColorResponse';
import { Component } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent {
  colors:ListColorResponse[] = [];
  currentColor:ListColorResponse;
  constructor(private colorService:ColorService){ }

  ngOnInit(): void {
    this.getColors();
  }

  getColors(){
    this.colorService.getColors().subscribe(response => {
      this.colors = response.data;
    })
  }

  setCurrentColor(color:ListColorResponse){
    this.currentColor =color;
  }

  getCurrentColorClass(color:ListColorResponse){
    if(color==this.currentColor){
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }
  }
}
