import {Component, OnInit, signal} from '@angular/core';
import {AgeService} from "../age.service";
import {AgeCategoryResult} from "../../models/age-category-result";
import {HttpErrorResponse} from "@angular/common/http";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-age',
  templateUrl: './age.component.html',
  styleUrls: ['./age.component.css']
})
export class AgeComponent implements OnInit {

  ageValue: number = 0;

  constructor(private ageService: AgeService) {
  }

  ngOnInit(): void {
    this.ageService
    }

  readonly age = new FormControl<number | null>(null, {
    validators: [
      Validators.required,
      Validators.min(0),
      Validators.max(150),
      Validators.pattern(/^\d+$/), // integers
    ],
  });

  result = signal<AgeCategoryResult | null>(null);
  error = signal<string | null>(null);

  submit(): void {

    if (this.age.invalid) {
      this.age.markAsTouched();
      return;
    }

    this.error.set(null);
    this.ageService.getCategoryByAge(this.age.value!).subscribe({
      next: (res) => this.result.set(res),
      error: (err: HttpErrorResponse) => {
        this.result.set(null);
        this.error.set(err.error?.message ?? `Request failed (${err.status})`);
      },
    });
  }

}
