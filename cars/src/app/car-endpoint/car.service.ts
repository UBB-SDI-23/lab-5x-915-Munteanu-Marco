import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpParams } from "@angular/common/http"
import { Observable, catchError, of, shareReplay, tap, throwError } from "rxjs";
import { Car } from "./models/car";
import { CarReport } from "./models/carReport";
import { CarWithDetails } from "./models/carWithDetails";
import { CarUpdate } from "./models/carUpdate";
import { CarAdd } from "./models/carAdd";
import { Page } from "./models/page";


@Injectable({
    providedIn: "root"
})
export class CarService {
    carsUrl = "https://carsinfoapi.azurewebsites.net/api/cars/";
    reportsUrl = "https://carsinfoapi.azurewebsites.net/api/cars/stats-cars/";

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

    getCar(carId: number): Observable<CarWithDetails> {
        const getUrl = `${this.carsUrl}${carId}`;
        return this.http.get<CarWithDetails>(getUrl).pipe(
            tap(data => console.log("Targeted car:", JSON.stringify(data))),
            catchError(this.handleError)
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

    getCarPage(pageNumber: number, pageSize: number = 20): Observable<Page<Car>> {
        let params = new HttpParams()
        .set('pageNumber', pageNumber.toString())
        .set('pageSize', pageSize.toString());
        return this.http.get<Page<Car>>(this.carsUrl, { params });
    }

    private handleError(err: HttpErrorResponse): Observable<never> {
        let errorMessage: string;
        if (err.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          errorMessage = `An error occurred: ${err.error.message}`;
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          errorMessage = `Backend returned code ${err.status}: ${err.message}`;
        }
        console.error(err);
        return throwError(() => errorMessage);
      }

    constructor(private http: HttpClient) {}
}