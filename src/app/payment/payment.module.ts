import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentListComponent } from './payment-list/payment-list.component';
import {MatTableModule} from "@angular/material/table";



@NgModule({
  declarations: [
    PaymentListComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ]
})
export class PaymentModule { }
