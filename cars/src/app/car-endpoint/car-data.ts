import { Car } from "./car";
import { CarReport } from "./carReport";

export class CarData {
    static cars: Car[] = [
        {
            id: 1,
            model: "M4",
            manufacturer: "BMW",
            color: "Blue",
            fabricationYear: 2020
          },
          {
            id: 2,
            model: "RS6",
            manufacturer: "Audi",
            color: "Grey",
            fabricationYear: 2018
          },
          {
            id: 3,
            model: "Golf GTI",
            manufacturer: "Volkswagen",
            color: "Black",
            fabricationYear: 2021
          }
    ];

    static carReports: CarReport[] = [
      {
        id: 2,
        model: "RS6",
        manufacturer: "Audi",
        color: "Grey",
        fabricationYear: 2018,
        averageReviewScore: 4
      },
      {
        id: 3,
        model: "Golf GTI",
        manufacturer: "Volkswagen",
        color: "Black",
        fabricationYear: 2021,
        averageReviewScore: 4
      },
    ] 
}