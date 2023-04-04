import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable, catchError, of, shareReplay, tap, throwError } from "rxjs";
import { Car } from "./models/car";
import { CarReport } from "./models/carReport";
import { CarWithDetails } from "./models/carWithDetails";
import { CarUpdate } from "./models/carUpdate";
import { CarAdd } from "./models/carAdd";


@Injectable({
    providedIn: "root"
})
export class CarService {
    carsUrl = "https://carsinfoapi.azurewebsites.net/api/cars/";
    reportsUrl = "https://carsinfoapi.azurewebsites.net/api/cars/stats-cars/";

    cars$: Observable<Car[]> = this.http.get<Car[]>(this.carsUrl).pipe(
        shareReplay(1)
    );
    reports$: Observable<CarReport[]> = this.http.get<CarReport[]>(this.reportsUrl).pipe(
        shareReplay(1)
    );

    deleteCar(carId: number): Observable<any> {
        return this.http.delete(this.carsUrl + carId).pipe(
            catchError(error => {
                console.log("error deleteing a car:", error);
                 return error
            })
        );
    }

    getCars(): void {
        this.cars$ = this.http.get<Car[]>(this.carsUrl).pipe(
            shareReplay(1)
        );
    }

    getCar(carId: number): Observable<CarWithDetails> {
        const getUrl = `${this.carsUrl}${carId}`;
        return this.http.get<CarWithDetails>(getUrl).pipe(
            tap(data => console.log("Targeted car:", JSON.stringify(data)))
        );
    }

    updateCar(carId: number, updatedCar: CarUpdate): Observable<any> {
        const updateUrl = `${this.carsUrl}${carId}`;
        return this.http.put(updateUrl, updatedCar).pipe(
            catchError(error => {
                console.log("error while updating a car:", error);
                 return error
            })
        );
    }

    addCar(addedCar: CarAdd): Observable<any> {
        return this.http.post(this.carsUrl, addedCar).pipe(
            tap(data => console.log("add data " + data)),
            catchError(error => {
                console.log("error while adding a car:", error);
                 return error
            })
        );
    }

    constructor(private http: HttpClient) {}
}