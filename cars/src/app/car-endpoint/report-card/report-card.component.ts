import { Component, Input } from '@angular/core';
import { CarReport } from '../models/carReport';

@Component({
  selector: 'app-report-card',
  templateUrl: './report-card.component.html',
  styleUrls: ['./report-card.component.css']
})
export class ReportCardComponent {
  @Input() report!: CarReport;
}
