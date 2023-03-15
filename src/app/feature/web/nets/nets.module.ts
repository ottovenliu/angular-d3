import { SharedModule } from '../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SankeyComponent } from './bar/sankey.component';
import { SankeyRoutingModule } from './nets-routing.module';

@NgModule({
  declarations: [
    SankeyComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    SankeyRoutingModule
  ]
})
export class NetsModule { }
