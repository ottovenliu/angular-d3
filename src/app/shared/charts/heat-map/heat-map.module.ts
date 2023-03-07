import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeatMapComponent } from './heat-map.component';



@NgModule({
  declarations: [HeatMapComponent],
  imports: [
    CommonModule
  ],
  exports: [HeatMapComponent],
  entryComponents: [],

})
export class HeatMapModule { }
