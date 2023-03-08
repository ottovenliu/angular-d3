import { SharedModule } from '../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScatterAndLinesRoutingModule } from './scatter-and-lines-routing.module';
import { ScatterComponent } from './scatter/scatter.component';

@NgModule({
  declarations: [
    ScatterComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ScatterAndLinesRoutingModule,
  ]
})
export class ScatterAndLinesModule { }
