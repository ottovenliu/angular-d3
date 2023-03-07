import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeatMapComponent } from './heat-map.component';



@NgModule({
  declarations: [HeatMapComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [HeatMapComponent],
  entryComponents: [],

})
export class HeatMapModule { }
