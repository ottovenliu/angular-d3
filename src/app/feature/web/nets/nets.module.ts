import { SharedModule } from '../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SankeyComponent } from './sankey/sankey.component';
import { NetsRoutingModule } from './nets-routing.module';
import { ForceDirectedComponent } from './force-directed/force-directed.component';

@NgModule({
  declarations: [SankeyComponent, ForceDirectedComponent],
  imports: [CommonModule, SharedModule, NetsRoutingModule],
})
export class NetsModule {}
