import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxPlotComponent } from './boxplot.component';

@NgModule({
  declarations: [BoxPlotComponent],
  imports: [CommonModule],
  exports: [BoxPlotComponent],
  entryComponents: [],
})
export class BoxPlotModule {}
