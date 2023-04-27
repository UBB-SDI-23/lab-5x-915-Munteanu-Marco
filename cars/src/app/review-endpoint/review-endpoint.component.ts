import { Component } from '@angular/core';
import { Review } from './models/review';
import { Observable, tap } from 'rxjs';
import { Page } from '../car-endpoint/models/page';
import { ReviewService } from './review.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review-endpoint',
  templateUrl: './review-endpoint.component.html',
  styleUrls: ['./review-endpoint.component.css']
})
export class ReviewEndpointComponent {
  pageTitle: string = "Review Endpoint"

  currentPageNumber: number = 1;
  reviewPage$: Observable<Page<Review>> = this.reviewService.getReviewPage(this.currentPageNumber);

  constructor(private reviewService: ReviewService, private router: Router) {}

  onDeleteReview(id: number) {

  }

  onAdd(): void {
    this.router.navigateByUrl("/add-review");
  }

  ngOnInit(): void {
    console.log(this.currentPageNumber);
  }

  changePage(page: number): void {
    this.currentPageNumber = page;
    this.reviewPage$ = this.reviewService.getReviewPage(page);
  }
}
