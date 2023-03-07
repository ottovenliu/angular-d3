import { SharedModule } from '../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PieChartsRoutingModule } from './pie-charts-routing.module';
import { ReactiveFormsModule } from "@angular/forms";
import { PieComponent } from './pie/pie.component';

@NgModule({
  declarations: [
    PieComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    PieChartsRoutingModule,
  ]
})
export class PieChartsModule { }
