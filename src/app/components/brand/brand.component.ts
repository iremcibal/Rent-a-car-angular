import { Component } from '@angular/core';
import { GetBrandResponse } from 'src/app/models/brand/getBrandResponse';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent {
  brands:GetBrandResponse[] = [];
  constructor(private brandService:BrandService){ }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response => {
      this.brands = response.data;
    })
  }

}
