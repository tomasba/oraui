import {Component, OnInit} from '@angular/core';
import {PaymentService} from "../payment.service";
import {InvoicePaymentSummary} from "../../models/invoice-payment-summary";

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.css']
})
export class PaymentListComponent implements OnInit {

  unpaidPayments: InvoicePaymentSummary[] = [];

  constructor(private paymentService: PaymentService) { }

  ngOnInit(): void {
    this.paymentService.getNotFullyPaidInvoices().subscribe(invoices => {
      this.unpaidPayments = invoices;
      console.log(invoices);
    });
  }

}
