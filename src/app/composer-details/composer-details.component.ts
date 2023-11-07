// Name: Justin Barlowe
// File: composer-details.component.ts
// Description: Component file for the Composer details component
// Date: 10/30/2023

// Import statements
import { Component } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ActivatedRoute } from '@angular/router';
import { ComposerService } from '../composer.service';

// Component declaration
@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css']
})

// Export the ComposerDetailsComponent class
export class ComposerDetailsComponent {

  composerId: number;
  composer: IComposer;

  constructor(private route: ActivatedRoute, private composerService: ComposerService) {
    // Added non-null assertion operator (!) due to typescript flagging a possible null value.
  this.composerId = parseInt(this.route.snapshot.paramMap.get('composerId')!, 10);
    // Added non-null assertion operator (!) due to typescript flagging a possible null value.
  if (this.composerId) {
    this.composer = this.composerService.getComposer(this.composerId)!;
  }
  // Added due to typescript flagging a possible null value.
  else {
    this.composer = {
      composerId: 0,
      fullName: '',
      genre: ''
    }
  }
}
}
