// Name: Justin Barlowe
// File: app.component.ts
// Description: Component file for the app component
// Date: 10/30/2023


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Exports the AppComponent class
export class AppComponent {
  title = 'barlowe-composer-app';
  assignment: string = 'Exercise 4.4 - Async Pipe';
}
