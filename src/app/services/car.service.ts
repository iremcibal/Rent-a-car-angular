import { ListCarResponse } from './../models/car/listCarResponse';
import { ListResponseModel } from './../models/listResponseModel';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = 'https://localhost:7206/api/';


  constructor(private httpClient: HttpClient) { }

  getCars():Observable<ListResponseModel<ListCarResponse>>{
    let newPath = this.apiUrl + "Cars/GetAll";
    return this.httpClient.get<ListResponseModel<ListCarResponse>>(newPath);
  }

  getCarsByBrand(brandId:number):Observable<ListResponseModel<ListCarResponse>>{
    let newPath = this.apiUrl + "Cars/GetByBrandId?brandId=" + brandId
    return this.httpClient.get<ListResponseModel<ListCarResponse>>(newPath);
  }

  getCarsByColor(colorId:number):Observable<ListResponseModel<ListCarResponse>>{
    let newPath = this.apiUrl + "Cars/GetByColorId?colorId=" + colorId
    return this.httpClient.get<ListResponseModel<ListCarResponse>>(newPath);
  }
}
