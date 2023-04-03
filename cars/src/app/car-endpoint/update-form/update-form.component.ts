import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent {

  constructor(private router: Router) {}

  onSubmit(): void {
    this.router.navigateByUrl("/carendpoint");
  }
}
