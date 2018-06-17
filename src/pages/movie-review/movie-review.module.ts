import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MovieReviewPage } from './movie-review';
import { DirectivesModule } from "../../directives/directives.module";
import { ComponentsModule } from "../../components/components.module";
import { AddReviewComponent } from "../../components/add-review/add-review";
import { MatDialogModule } from '@angular/material';

@NgModule({
  declarations: [
    MovieReviewPage,
  ],
  imports: [
    IonicPageModule.forChild(MovieReviewPage),
    DirectivesModule,
    ComponentsModule,
    MatDialogModule
  ],
  entryComponents: [AddReviewComponent],
})
export class MovieReviewPageModule {}
