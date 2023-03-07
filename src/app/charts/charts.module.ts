import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScatterModule } from './scatter/scatter.module';
import { PieModule } from './pie/pie.module';
import { HeatMapModule } from './heat-map/heat-map.module';
import { BarModule } from './bar/bar.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    ScatterModule,
    PieModule,
    HeatMapModule,
    BarModule
  ],
  exports: [
    ScatterModule,
    PieModule,
    HeatMapModule,
    BarModule
  ]
})
export class ChartsModule { }
