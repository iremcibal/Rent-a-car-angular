import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListImageResponse } from '../models/image/listImageResponse';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  apiUrl = 'https://localhost:7206/api/';


  constructor(private httpClient: HttpClient) { }

  getImages():Observable<ListResponseModel<ListImageResponse>>{
    let newPath = this.apiUrl + "CarImages/GetAll";
    return this.httpClient.get<ListResponseModel<ListImageResponse>>(newPath);
  }
}
