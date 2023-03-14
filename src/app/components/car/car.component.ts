import { CarService } from './../../services/car.service';
import { ListCarResponse } from './../../models/car/listCarResponse';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit{
  cars:ListCarResponse[] = [];
  constructor(private carService:CarService){ }

  ngOnInit(): void {
    this.getCars();
  }

  getCars(){
    this.carService.getCars().subscribe(response => {
      this.cars = response.data;
    })
  }

}
