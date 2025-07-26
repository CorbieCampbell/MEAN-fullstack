import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TripListing } from './trip-listing/trip-listing';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, TripListing],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  title = 'Travlr Getaways Admin!';
}