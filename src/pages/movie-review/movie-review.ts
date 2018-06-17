import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MatDialog, MatDialogRef} from '@angular/material';
import { AddReviewComponent } from "../../components/add-review/add-review";

/**
 * Generated class for the MovieReviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movie-review',
  templateUrl: 'movie-review.html',
})
export class MovieReviewPage {
  imgSrc = "url(https://www.filmibeat.com/img/220x80x275/popcorn/movie_posters/kaala-20180508105947-16070.jpg)";
  imgHeight = "75vh";
  constructor(public navCtrl: NavController, public navParams: NavParams, public dialog: MatDialog) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MovieReviewPage');
  }

  openReviewModal() {
  	// console.log("hi");
  	let dialogRef = this.dialog.open(AddReviewComponent, {
  		data: { name: "Hi" }
  	});
	dialogRef.afterClosed().subscribe(result => {
		console.log('The dialog was closed');
		console.log(result);
	});
  }

}
