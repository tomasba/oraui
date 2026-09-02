import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PiComponent } from './pi/pi.component';
import {MatTableModule} from "@angular/material/table";



@NgModule({
  declarations: [
    PiComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ]
})
export class PiModule { }
