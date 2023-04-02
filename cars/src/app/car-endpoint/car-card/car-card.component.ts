import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Car } from '../models/car';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.css']
})
export class CarCardComponent {
  @Input() car!: Car;
  @Output() deleteCar = new EventEmitter<number>();

  onDelete(): void {
    this.deleteCar.emit(this.car.id);
  }
}
