import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoxPlotComponent } from './boxplot/boxplot.component';
import { LineComponent } from './line/line.component';
import { ScatterComponent } from './scatters/scatter.component';

const routes: Routes = [
  {
    path: '',
    component: ScatterComponent,
  },
  {
    path: 'Scatter',
    component: ScatterComponent,
  },
  {
    path: 'BoxPlot',
    component: BoxPlotComponent,
  },
  {
    path: 'Line',
    component: LineComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScatterAndLinesRoutingModule { }
