import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestapiComponent } from './testapi/testapi.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CarEndpointComponent } from './car-endpoint/car-endpoint.component';
import { UpdateCarComponent } from './car-endpoint/update-car/update-car.component';
import { AddCarComponent } from './car-endpoint/add-car/add-car.component';
import { LoaderComponent } from './loader/loader.component';
import { AuthorEndpointComponent } from './author-endpoint/author-endpoint.component';
import { ReviewEndpointComponent } from './review-endpoint/review-endpoint.component';
import { AddAuthorComponent } from './author-endpoint/add-author/add-author.component';
import { UpdateAuthorComponent } from './author-endpoint/update-author/update-author.component';
import { AddReviewComponent } from './review-endpoint/add-review/add-review.component';
import { RaceEndpointComponent } from './race-endpoint/race-endpoint.component';
import { ViewCarComponent } from './car-endpoint/view-car/view-car.component';
import { AddRaceComponent } from './car-endpoint/add-race/add-race.component';
import { AuthorsReportComponent } from './authors-report/authors-report.component';
import { ReviewsReportComponent } from './reviews-report/reviews-report.component';
import { ViewAuthorComponent } from './author-endpoint/view-author/view-author.component';
import { AddReviewAuthorComponent } from './author-endpoint/add-review-author/add-review-author.component';

const routes: Routes = [
  {path: 'testapi', component: TestapiComponent},
  {path: 'update-car/:id', component: UpdateCarComponent},
  {path: 'add-race-to-car/:id', component: AddRaceComponent},
  {path: 'add-review/:id', component: AddReviewAuthorComponent},
  {path: 'view-car/:id', component: ViewCarComponent},
  {path: 'view-author/:id', component: ViewAuthorComponent},
  {path: 'update-author/:id', component: UpdateAuthorComponent},
  {path: 'cars', component: CarEndpointComponent},
  {path: 'authors', component: AuthorEndpointComponent},
  {path: 'authors-report', component: AuthorsReportComponent},
  {path: 'reviews-report', component: ReviewsReportComponent},
  {path: 'reviews', component: ReviewEndpointComponent},
  {path: 'races', component: RaceEndpointComponent},
  {path: 'add-car', component: AddCarComponent},
  {path: 'add-author', component: AddAuthorComponent},
  {path: 'add-review', component: AddReviewComponent},
  {path: 'loader', component: LoaderComponent},
  {path: '', component: WelcomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
