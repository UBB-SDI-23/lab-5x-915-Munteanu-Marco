import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CarService } from './car.service';
import { Car } from './models/car';
import { CarReport } from './models/carReport';

@Component({
  selector: 'app-car-endpoint',
  templateUrl: './car-endpoint.component.html',
  styleUrls: ['./car-endpoint.component.css']
})
export class CarEndpointComponent {
  pageTitle: string = "Car Endpoint"
  showCars: boolean = false;
  showReports: boolean = false;
  showDeleteCars: boolean = false;

  cars$: Observable<Car[]> = this.carService.cars$;
  reports$: Observable<CarReport[]> = this.carService.reports$;

  constructor(private carService: CarService) {}

  getCars(): void {
    this.showCars = !this.showCars;
  }

  getReport(): void {
    this.showReports = !this.showReports;
  }

  deleteCarMain(): void {
    this.showDeleteCars = !this.showDeleteCars;
  }

  onDeleteCar(carId: number): void {
    this.carService.deleteCar(carId).subscribe({
      next: () => {
        console.log(`Car with ID ${carId} has been deleted`);
        location.reload();
      },
      error: (e) => console.log(e)
    });
  }
}
