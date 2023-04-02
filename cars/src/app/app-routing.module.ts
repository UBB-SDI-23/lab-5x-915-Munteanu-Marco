import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestapiComponent } from './testapi/testapi.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CarEndpointComponent } from './car-endpoint/car-endpoint.component';
import { UpdateFormComponent } from './car-endpoint/update-form/update-form.component';

const routes: Routes = [
  {path: 'testapi', component: TestapiComponent},
  {path: 'update-car/:id', component: UpdateFormComponent},
  {path: 'carendpoint', component: CarEndpointComponent},
  {path: '', component: WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
