import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarComponent } from './bar.component';



@NgModule({
  declarations: [BarComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [BarComponent],
  entryComponents: []
})
export class BarModule { }
