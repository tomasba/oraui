import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import { Observable } from "rxjs";
import { InvoicePaymentSummary } from "../models/invoice-payment-summary";
import {AgeCategoryResult} from "../models/age-category-result";

@Injectable({
  providedIn: 'root'
})
export class AgeService {

  private apiUrl = environment.apiUrl + '/api/age-category';

  private ageDefaultValue: number = 0;

  constructor(private http: HttpClient) { }

  getCategoryByAge(age: number): Observable<AgeCategoryResult> {
    const params = new HttpParams().set('age', age);
    return this.http.get<AgeCategoryResult>(this.apiUrl, { params });
  }

}
