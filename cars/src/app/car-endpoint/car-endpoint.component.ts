import { Component, OnInit } from '@angular/core';
import { Observable, combineLatest, map } from 'rxjs';
import { CarService } from './car.service';
import { Car } from './models/car';
import { CarReport } from './models/carReport';

@Component({
  selector: 'app-car-endpoint',
  templateUrl: './car-endpoint.component.html',
  styleUrls: ['./car-endpoint.component.css']
})
export class CarEndpointComponent implements OnInit {
  pageTitle: string = "Car Endpoint"
  showCars: boolean = false;
  showReports: boolean = false;
  showDeleteCars: boolean = false;
  showSortedCars: boolean = false;

  cars!: Car[];
  carsToDisplay!: Car[];
  sortedCars!: Car[];
  
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

  sortCars(): void {
    this.showSortedCars = !this.showSortedCars;
    if (this.showSortedCars) {
      this.carsToDisplay = this.sortedCars;
    } else {
      this.carsToDisplay = this.cars;
    }
  }

  ngOnInit(): void {
    this.carService.cars$.subscribe(cars => {
      this.cars = cars;
      this.carsToDisplay = cars;
      this.sortedCars = this.cars.slice().sort((a, b) => b.fabricationYear - a.fabricationYear);
    });
  }
}
