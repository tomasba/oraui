import {Component, OnInit, signal} from '@angular/core';
import {PiBbpIterationResult} from "../../models/pi-bbp-iteration-result";
import {PiService} from "../pi.service";
import {FormControl, Validators} from "@angular/forms";
import {HttpErrorResponse} from "@angular/common/http";
import {PiBbpIterationDto} from "../../models/pi-bbp-iteration-dto";

@Component({
  selector: 'app-pi',
  templateUrl: './pi.component.html',
  styleUrls: ['./pi.component.css']
})
export class PiComponent implements OnInit {

  result = signal<PiBbpIterationResult | null>(null);
  error = signal<string | null>(null);

  displayedColumns: string[] = ['iteration', 'termValue', 'scaledTerm', 'runningSum', 'isFinal'];

  constructor(private piService: PiService) {
  }

  ngOnInit(): void {
    this.piService.findLastPiCalculation().subscribe(piResult => {
      this.result.set(piResult);

    });
  }

  readonly pi = new FormControl<number | null>(null, {
    validators: [
      Validators.required,
      Validators.min(1),
      Validators.max(30),
      Validators.pattern(/^\d+$/),
    ],
  });


  onCalculate(): void {
    this.error.set(null);
    this.piService.calculatePi(this.pi.value!).subscribe({
      next: (res) => this.result.set(res),
      error: (err: HttpErrorResponse) => {
        this.result.set(null);
        this.error.set(err.error?.message ?? `Request failed (${err.status})`);
      },
    });
  }

}
