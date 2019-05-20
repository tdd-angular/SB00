import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoFormComponent } from './demo-form/demo-form.component';
import { MatAutocompleteModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutocompleteService } from './services/autocomplete.service';
import { FeatureRoutingModule } from './feature.route';

@NgModule({
  declarations: [DemoFormComponent],
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    FeatureRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    AutocompleteService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FeatureModule { }
