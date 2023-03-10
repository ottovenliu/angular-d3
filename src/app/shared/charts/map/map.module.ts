import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [MapComponent],
  imports: [
    CommonModule
  ],
  exports: [MapComponent]
})
export class MapModule { }
