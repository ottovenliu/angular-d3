import { SharedModule } from '../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { MapsRoutingModule } from './maps-routing.module';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    MapComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MapsRoutingModule,
  ]
})
export class MapsModule { }
