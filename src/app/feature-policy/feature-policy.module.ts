import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturePolicyComponent } from './feature-policy/feature-policy.component';
import { FeatureManagementComponent } from './feature-management/feature-management.component';
import { FeatureExportComponent } from './feature-export/feature-export.component';
import {MatCardModule} from "@angular/material/card";
import { FeatureComponent } from './feature/feature.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from "@angular/material/form-field";
import { FeatureFilterComponent } from './feature-filter/feature-filter.component';
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    FeaturePolicyComponent,
    FeatureManagementComponent,
    FeatureExportComponent,
    FeatureComponent,
    FeatureFilterComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule
  ],
  exports: [
    FeaturePolicyComponent,
    FeatureManagementComponent,
    FeatureExportComponent,
    FeatureComponent,
    FeatureFilterComponent
  ]
})
export class FeaturePolicyModule { }
