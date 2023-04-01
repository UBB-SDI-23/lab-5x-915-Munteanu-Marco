import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CarService } from './car.service';
import { Car } from './car';
import { CarReport } from './carReport';

@Component({
  selector: 'app-car-endpoint',
  templateUrl: './car-endpoint.component.html',
  styleUrls: ['./car-endpoint.component.css']
})
export class CarEndpointComponent {
  pageTitle: string = "Car Endpoint"
  showCars: boolean = false;
  showReports: boolean = false;

  cars$: Observable<Car[]> = this.carService.cars$;
  reports$: Observable<CarReport[]> = this.carService.reports$;

  constructor(private carService: CarService) {}

  getCars(): void {
    this.showCars = !this.showCars;
  }

  getReport(): void {
    this.showReports = !this.showReports;
  }
}
