import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetBrandResponse } from '../models/brand/getBrandResponse';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl = 'https://localhost:7206/api/';


  constructor(private httpClient: HttpClient) { }

  getBrands():Observable<ListResponseModel<GetBrandResponse>>{
    let newPath = this.apiUrl + "Brands";
    return this.httpClient.get<ListResponseModel<GetBrandResponse>>(newPath);
  }
}
