import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoFormComponent } from './demo-form/demo-form.component';
import { MatAutocompleteModule, MatFormFieldModule, MatOptionModule, MatSelectModule } from '@angular/material';
import { ObserversModule } from '@angular/cdk/observers';
import { OverlayModule } from '@angular/cdk/overlay';
import { PlatformModule } from '@angular/cdk/platform';
import { PortalModule } from '@angular/cdk/portal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutocompleteService } from './services/autocomplete.service';

@NgModule({
  declarations: [DemoFormComponent],
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    ObserversModule,
    OverlayModule,
    PlatformModule,
    PortalModule,
  ],
  providers: [
    AutocompleteService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FeatureModule { }
