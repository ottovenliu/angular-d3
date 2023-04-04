import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForceDirectedComponent } from './force-directed.component';

@NgModule({
  declarations: [ForceDirectedComponent],
  imports: [CommonModule],
  exports: [ForceDirectedComponent],
})
export class ForceDirectedModule {}
