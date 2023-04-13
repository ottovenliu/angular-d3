import { SharedModule } from '../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapsRoutingModule } from './maps-routing.module';
import { BubbleMapComponent } from './bubble-map/bubble-map.component';
import { TreeMapComponent } from './tree-map/tree-map.component';

@NgModule({
  declarations: [BubbleMapComponent, TreeMapComponent],
  imports: [CommonModule, SharedModule, MapsRoutingModule],
})
export class MapsModule {}
