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
import { ForceDirectedModule } from './force-directed/force-directed.module';
import { TreeModule } from './tree/tree.module';

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
    ForceDirectedModule,
    TreeModule,
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
    ForceDirectedModule,
    TreeModule,
  ],
})
export class ChartsModule {}
