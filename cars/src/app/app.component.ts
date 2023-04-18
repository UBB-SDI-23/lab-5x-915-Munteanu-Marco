import { Component } from '@angular/core';
import { LoadingService } from './loader/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CarsInfoAPI';
  constructor(public loadingService: LoadingService) {}
}
