import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScatterComponent } from './scatter.component';



@NgModule({
  declarations: [ScatterComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ScatterComponent],
  entryComponents: [],
})
export class ScatterModule { }



