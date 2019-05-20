import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Airport } from '../entities/airport.entity';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSelectChange } from '@angular/material';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { AutocompleteService } from '../services/autocomplete.service';

@Component({
  selector: 'app-demo-form',
  templateUrl: './demo-form.component.html',
  styles: ['']
})
export class DemoFormComponent implements OnInit, OnDestroy {
  formGroup: FormGroup;
  airportCtrl: FormControl = new FormControl('', Validators.required);
  typeCtrl: FormControl = new FormControl();
  destroy$ = new Subject();

  airports: Airport[] = [];
  filteredAirports: Airport[] = [];
  types: string[] = [];
  selectedType: string;
  hint = 'Required';
  panelWidth = 320;

  constructor(private httpClient: HttpClient,
    private formBuilder: FormBuilder,
    private autocompleteService: AutocompleteService) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      airportCtrl: this.airportCtrl,
      typeCtrl: this.typeCtrl,
    });
    this.setValidators();
    this.loadData();
  }

  setValidators() {
    this.typeCtrl.setValidators(Validators.required);
  }

  loadData() {
    this.httpClient.get<Airport[]>(
      '/assets/airport.json'
      // 'https://pkgstore.datahub.io/core/airport-codes/airport-codes_json/data/89a3ac713e54bc646db9665220484d71/airport-codes_json.json'
    )
      .pipe(takeUntil(this.destroy$))
      .subscribe((airports: Airport[]) => {
        this.types = airports.map((x) => x.type)
          .filter((airport, index, array) => array.indexOf(airport) === index);
        this.handleChanges(airports);
      });
  }

  handleChanges(airports: Airport[]) {
    this.airports = airports;
    Object.assign(this.filteredAirports, this.airports);
    this.airportCtrl.valueChanges.subscribe((value) => {
      this.filteredAirports = this.autocompleteService.filter(value, this.airports);
    });
  }

  onSelectionChanged(event: MatSelectChange) {
    this.selectedType = event.value;
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
