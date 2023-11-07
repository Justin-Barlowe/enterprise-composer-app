// Name: Justin Barlowe
// File: composer-list.component.ts
// Description: TypeScript file for the composer list component
// Date: 10/30/2023


// Imports
import { Component } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Observable } from 'rxjs';

// Component decorator
@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})

// Export the ComposerListComponent class
export class ComposerListComponent {
  composers: Observable<IComposer[]>;
  txtSearchControl = new FormControl('');

  // Constructor with instance of composers
  constructor( private composerService: ComposerService) {
    this.composers = this.composerService.getComposers();

    // Subscribe to the valueChanges observable
    this.txtSearchControl.valueChanges.pipe(debounceTime(500)).subscribe(val => this.filterCompoers(val!));
  }

  filterCompoers(name: string) {
    this.composers = this.composerService.filterComposers(name);
  }
}
