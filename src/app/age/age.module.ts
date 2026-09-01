import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgeComponent } from './age/age.component';
import { MatInputModule } from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AgeComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule
  ]
})
export class AgeModule { }
