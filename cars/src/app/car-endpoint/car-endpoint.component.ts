import { Component, OnInit } from '@angular/core';
import { Observable, combineLatest, map } from 'rxjs';
import { CarService } from './car.service';
import { Car } from './models/car';
import { CarReport } from './models/carReport';
import { Router } from '@angular/router';


@Component({
  selector: 'app-car-endpoint',
  templateUrl: './car-endpoint.component.html',
  styleUrls: ['./car-endpoint.component.css']
})
export class CarEndpointComponent implements OnInit {
  pageTitle: string = "Car Endpoint"
  showSortedCars: boolean = false;

  cars!: Car[];
  carsToDisplay!: Car[];
  sortedCars!: Car[];
  
  reports$: Observable<CarReport[]> = this.carService.reports$;

  constructor(private carService: CarService, private router: Router) {}


  onDeleteCar(carId: number): void {
    this.carService.deleteCar(carId).subscribe({
      next: () => {
        console.log(`Car with ID ${carId} has been deleted`);
        this.carsToDisplay = this.carsToDisplay.filter(car => car.id !== carId);
        // window.alert(`Car with ID ${carId} has been deleted`);
      },
      error: (e) => {
        console.log(e);
        window.alert(`Delete failed!`);
      }
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

  onAdd(): void {
    this.router.navigateByUrl("/add-car");
  }

  fetchData(): void {
    this.carService.cars$.subscribe(cars => {
      this.cars = cars;
      this.carsToDisplay = cars;
      this.sortedCars = this.cars.slice().sort((a, b) => b.fabricationYear - a.fabricationYear);
    });
  }

  ngOnInit(): void {
    this.fetchData()
  }
}
