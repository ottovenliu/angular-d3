import { SharedModule } from '../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { MapsRoutingModule } from './maps-routing.module';
import { BubbleMapComponent } from './bubble-map/bubble-map.component';

@NgModule({
  declarations: [
    BubbleMapComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MapsRoutingModule,
  ]
})
export class MapsModule { }
