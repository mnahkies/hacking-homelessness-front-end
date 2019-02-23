import { NgModule } from "@angular/core";
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatToolbarModule,
  MatProgressBarModule,
  MatGridListModule
} from "@angular/material";

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatGridListModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatMenuModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatGridListModule
  ],
  providers: []
})
export class MaterialModule {}
