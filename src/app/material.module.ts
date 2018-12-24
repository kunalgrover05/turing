import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatSelectModule,
  MatNativeDateModule,
  MatAutocompleteModule,
  MatCheckboxModule,
  MatSlideToggle,
  MatRadioButton,
  MatSlideToggleModule,
  MatRadioModule,
  MatChipsModule
} from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatSliderModule } from "@angular/material/slider";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatInputModule } from "@angular/material/input";
import { DragDropModule } from '@angular/cdk/drag-drop';
@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatGridListModule,
    MatSelectModule,
    DragDropModule,
    MatInputModule,
  ],
  exports: [
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatGridListModule,
    MatSelectModule,
    DragDropModule,
    MatInputModule,
  ]
})
export class CustomMaterialModule {}
