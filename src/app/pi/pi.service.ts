import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {PiBbpIterationResult} from "../models/pi-bbp-iteration-result";
import {PiBbpIterationRequest} from "../models/pi-bbp-iteration-request";
import {InvoicePaymentSummary} from "../models/invoice-payment-summary";

@Injectable({
  providedIn: 'root'
})
export class PiService {

  private apiUrl = environment.apiUrl + '/api/pi-bbp';

  constructor(private http: HttpClient) { }

  calculatePi(precision: number): Observable<PiBbpIterationResult> {
    const request: PiBbpIterationRequest = { precision };
    return this.http.post<PiBbpIterationResult>(
      `${this.apiUrl}`,
      request,
    );
  }

  findLastPiCalculation(): Observable<PiBbpIterationResult> {
    return this.http.get<PiBbpIterationResult>(this.apiUrl + '/last');
  }

}
