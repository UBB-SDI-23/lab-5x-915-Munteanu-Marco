import { Component, OnInit } from '@angular/core';
import { Subject, Observable, catchError, combineLatest, concatMap, map, of, switchMap, filter, EMPTY, zip, BehaviorSubject, tap } from 'rxjs';
import { CarService } from './car.service';
import { Car } from './models/car';
import { CarReport } from './models/carReport';
import { Router } from '@angular/router';
import { Page } from './models/page';
import { CarWithDetails } from './models/carWithDetails';


@Component({
  selector: 'app-car-endpoint',
  templateUrl: './car-endpoint.component.html',
  styleUrls: ['./car-endpoint.component.css']
})
export class CarEndpointComponent implements OnInit {
  pageTitle: string = "Car Endpoint"
  showSortedCars: boolean = false;

  reports$: Observable<CarReport[]> = this.carService.reports$;

  currentPageNumber: number = 1;
  carPage$!: Observable<Page<Car>>;
  sortedCarPage$!: Observable<Page<Car>>;
  mainCarPage$!: Observable<Page<Car>>;

  idInputValue!: number;
  foundCar$!: Observable<CarWithDetails>;

  searchErrorSubject = new Subject<string>();
  searchError$ = this.searchErrorSubject.asObservable();

  searchToggle$ = new BehaviorSubject<boolean>(false);


  constructor(private carService: CarService, private router: Router) {}

  onDeleteCar(carId: number): void {
    this.carPage$ = this.carPage$.pipe(
      concatMap((page: Page<Car>) => {
        return this.carService.deleteCar(carId).pipe(
          switchMap(() => {
            console.log(`Car with ID ${carId} has been deleted`);
            page.content = page.content.filter((car: Car) => car.id !== carId);
            return of(page);
          }),
          catchError((error) => {
            console.log(error);
            window.alert(`Delete failed!`);
            return of(page);
          })
        );
      })
    );
  }

  onSearch() {
    this.foundCar$ = this.carService.getCar(this.idInputValue).pipe(
      tap(() => {
        this.searchErrorSubject.next("");
      }),
      catchError(err => {
        this.searchErrorSubject.next(err);
        return EMPTY;
      },
    ));
  }

  sortCars(): void {
    this.searchToggle$.next(!this.searchToggle$.value);
    console.log(this.searchToggle$.value);
  }

  onAdd(): void {
    this.router.navigateByUrl("/add-car");
  }

  ngOnInit(): void {
    this.carPage$ = this.carService.getCarPage(this.currentPageNumber);

    this.sortedCarPage$ = this.carService.getCarPage(this.currentPageNumber).pipe(
      map((carPage: Page<Car>) => {
        carPage.content = carPage.content.slice().sort((a, b) => b.fabricationYear- a.fabricationYear);
        return carPage;
      })
    );

    this.mainCarPage$ = combineLatest([
      this.carPage$,
      this.sortedCarPage$,
      this.searchToggle$
    ]).pipe(
      tap(() => console.log("trigered combine")),
      map(([carPage, sortedCarPage, toggle])=> {
        return toggle ? sortedCarPage : carPage;
      })
    )
  }

  changePage(page: number): void {
    this.currentPageNumber = page;
    console.log("Should trigger combine! " + page);
    this.carPage$ = this.carService.getCarPage(page);
    this.searchToggle$.next(false);
  }
}
