import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScatterModule } from './scatter/scatter.module';
import { PieModule } from './pie/pie.module';
import { HeatMapModule } from './heat-map/heat-map.module';
import { BarModule } from './bar/bar.module';
import { MapModule } from './map/map.module';
import { SankeyModule } from './sankey/sankey.module';
import { BoxPlotModule } from './boxplot/boxplot.module';
import { LineModule } from './line/line.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ScatterModule,
    PieModule,
    HeatMapModule,
    BarModule,
    MapModule,
    SankeyModule,
    BoxPlotModule,
    LineModule,
  ],
  exports: [
    ScatterModule,
    PieModule,
    HeatMapModule,
    BarModule,
    MapModule,
    SankeyModule,
    BoxPlotModule,
    LineModule,
  ],
})
export class ChartsModule {}
