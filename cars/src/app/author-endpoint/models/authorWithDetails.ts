import { Review } from "src/app/review-endpoint/models/review";

export interface AuthorWithDetails {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    reviews: Review[]
}