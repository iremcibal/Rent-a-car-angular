import { CarService } from './../../services/car.service';
import { ListCarResponse } from './../../models/car/listCarResponse';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit{
  cars:ListCarResponse[] = [];
  
  imgUrl:string="https://localhost:7206/Uploads/Images/";


  constructor(private carService:CarService,private activatedRoute:ActivatedRoute){ }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getCarsByBrandId(params["brandId"])
      }
      if(params["colorId"]){
        this.getCarsByColorId(params["colorId"])
      }
      else{
        this.getCars()
      }
    })
  }

  getCars(){
    this.carService.getCars().subscribe(response => {
      this.cars = response.data;
    })
  }

  getCarsByBrandId(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe(response=>{
      this.cars = response.data;
    })
  }

  getCarsByColorId(colorId:number){
    this.carService.getCarsByColor(colorId).subscribe(response=>{
      this.cars = response.data;
    })
  }
  

}
