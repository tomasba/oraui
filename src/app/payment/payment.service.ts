import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import {InvoicePaymentSummary} from "../models/invoice-payment-summary";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private apiUrl = environment.apiUrl + '/api/invoices';

  constructor(private http: HttpClient) { }

  getNotFullyPaidInvoices(): Observable<InvoicePaymentSummary[]> {
    return this.http.get<InvoicePaymentSummary[]>(this.apiUrl + '/not-fully-paid');
  }

}
