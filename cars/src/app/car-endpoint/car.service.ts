import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable, of, shareReplay, tap } from "rxjs";
import { Car } from "./models/car";
import { CarReport } from "./models/carReport";


@Injectable({
    providedIn: "root"
})
export class CarService {
    carsUrl = "https://carsinfoapi.azurewebsites.net/api/cars/";
    reportsUrl = "https://carsinfoapi.azurewebsites.net/api/cars/stats-cars/";
    cars$: Observable<Car[]> = this.http.get<Car[]>(this.carsUrl).pipe(
        tap(data => console.log("cars : ", JSON.stringify(data))),
        shareReplay(1)
    );
    reports$: Observable<CarReport[]> = this.http.get<CarReport[]>(this.reportsUrl).pipe(
        tap(data => console.log("reports: ", JSON.stringify(data))),
        shareReplay(1)
    );

    deleteCar(carId: number): Observable<any> {
        return this.http.delete(this.carsUrl + carId);
    }

    constructor(private http: HttpClient) {}
}