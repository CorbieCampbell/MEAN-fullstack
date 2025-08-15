import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { TripData } from '../services/trip-data';
import { Authentication } from '../services/authentication';

@Component({
  selector: 'app-delete-trip',
  standalone: true,
  templateUrl: './delete-trip.html',
  styleUrl: './delete-trip.css',
})

export class DeleteTrip implements OnInit {
  tripCode: string | null = null;

  constructor(
    private router: Router,
    private tripService: TripData,
    private authenticationService : Authentication
  ) {}

  public isLoggedIn() {
    return this.authenticationService.isLoggedIn();
  }

  ngOnInit(): void {
    this.tripCode = localStorage.getItem('tripCode'); // ✅ retrieve it

    if (this.tripCode) {
      this.tripService.deleteTrip(this.tripCode).subscribe({
        next: () => {
          console.log(`Trip ${this.tripCode} deleted successfully.`);
          this.router.navigate(['/']); // or wherever you want to go
        },
        error: (err) => {
          console.error('Error deleting trip:', err);
        }
      });
    } else {
      console.warn('No trip code found in localStorage.');
      this.router.navigate(['/']);
    }
  }
}