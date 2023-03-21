import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListColorResponse } from '../models/color/listColorResponse';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiUrl = 'https://localhost:7206/api/';


  constructor(private httpClient: HttpClient) { }

  getColors():Observable<ListResponseModel<ListColorResponse>>{
    let newPath = this.apiUrl + "Colors/GetAll";
    return this.httpClient.get<ListResponseModel<ListColorResponse>>(newPath);
  }
}
