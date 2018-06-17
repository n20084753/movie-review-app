import { Component } from '@angular/core';
import {MatDialogRef } from '@angular/material';

/**
 * Generated class for the AddReviewComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'add-review',
  templateUrl: 'add-review.html'
})
export class AddReviewComponent {

  text: string;

  constructor(public dialogRef: MatDialogRef<AddReviewComponent>) {
    console.log('Hello AddReviewComponent Component');
    console.log(this.data);
    this.text = 'Hello World';
  }

}
