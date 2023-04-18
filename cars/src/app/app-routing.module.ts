import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestapiComponent } from './testapi/testapi.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CarEndpointComponent } from './car-endpoint/car-endpoint.component';
import { UpdateCarComponent } from './car-endpoint/update-car/update-car.component';
import { AddCarComponent } from './car-endpoint/add-car/add-car.component';
import { LoaderComponent } from './loader/loader.component';

const routes: Routes = [
  {path: 'testapi', component: TestapiComponent},
  {path: 'update-car/:id', component: UpdateCarComponent},
  {path: 'carendpoint', component: CarEndpointComponent},
  {path: 'add-car', component: AddCarComponent},
  {path: 'loader', component: LoaderComponent},
  {path: '', component: WelcomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
