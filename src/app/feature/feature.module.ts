import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoFormComponent } from './demo-form/demo-form.component';
import { MatAutocompleteModule, MatFormFieldModule, MatOptionModule } from '@angular/material';
import { ObserversModule } from '@angular/cdk/observers';
import { OverlayModule } from '@angular/cdk/overlay';
import { PlatformModule } from '@angular/cdk/platform';
import { PortalModule } from '@angular/cdk/portal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DemoFormComponent],
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatOptionModule,
    FormsModule,
    ReactiveFormsModule,
    ObserversModule,
    OverlayModule,
    PlatformModule,
    PortalModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FeatureModule { }
