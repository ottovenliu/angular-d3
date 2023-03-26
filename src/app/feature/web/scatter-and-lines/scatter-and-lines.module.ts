import { SharedModule } from '../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScatterAndLinesRoutingModule } from './scatter-and-lines-routing.module';
import { ScatterComponent } from './scatters/scatter.component';
import { BoxPlotComponent } from './boxplot/boxplot.component';

@NgModule({
  declarations: [ScatterComponent, BoxPlotComponent],
  imports: [CommonModule, SharedModule, ScatterAndLinesRoutingModule],
})
export class ScatterAndLinesModule {}
