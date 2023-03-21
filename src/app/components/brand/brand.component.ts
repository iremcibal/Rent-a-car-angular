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
  currentBrand:GetBrandResponse;
  constructor(private brandService:BrandService){ }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response => {
      this.brands = response.data;
    })
  }

  setCurrentBrand(brand:GetBrandResponse){
    this.currentBrand =brand;
  }

  getCurrentBrandClass(brand:GetBrandResponse){
    if(brand==this.currentBrand){
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }
  }
}
