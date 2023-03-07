import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PieComponent } from './pie.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [PieComponent],
  imports: [
    CommonModule
  ],
  exports: [PieComponent]
})
export class PieModule { }
