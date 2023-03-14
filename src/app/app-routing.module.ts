import { CarComponent } from './components/car/car.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"", pathMatch:"full", component:CarComponent},
  {path:"car", component:CarComponent},
  //{path:"panel", component:ApplicationComponent},
  //{path:"blacklist", component:BlacklistComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
