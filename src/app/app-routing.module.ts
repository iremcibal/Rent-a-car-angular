import { CarComponent } from './components/car/car.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageComponent } from './components/image/image.component';

const routes: Routes = [
  {path:"", pathMatch:"full", component:CarComponent},
  {path:"Cars", component:CarComponent},
  {path:"Image",component:ImageComponent},
  {path:"Cars/GetByBrandId/:brandId", component:CarComponent}
  //{path:"panel", component:ApplicationComponent},
  //{path:"blacklist", component:BlacklistComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }