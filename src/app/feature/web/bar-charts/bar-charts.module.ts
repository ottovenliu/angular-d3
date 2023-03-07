import { SharedModule } from '../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BarChartsRoutingModule } from './bar-charts-routing.module';
import { ReactiveFormsModule } from "@angular/forms";
import { BarComponent } from './bar/bar.component';

@NgModule({
  declarations: [
    BarComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    BarChartsRoutingModule,
  ]
})
export class BarChartsModule { }
