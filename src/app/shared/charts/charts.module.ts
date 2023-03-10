import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScatterModule } from './scatter/scatter.module';
import { PieModule } from './pie/pie.module';
import { HeatMapModule } from './heat-map/heat-map.module';
import { BarModule } from './bar/bar.module';
import { MapModule } from './map/map.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ScatterModule,
    PieModule,
    HeatMapModule,
    BarModule,
    MapModule,
  ],
  exports: [
    ScatterModule,
    PieModule,
    HeatMapModule,
    BarModule,
    MapModule
  ]
})
export class ChartsModule { }
