import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineComponent } from './line.component';

@NgModule({
  declarations: [LineComponent],
  imports: [CommonModule],
  exports: [LineComponent],
  entryComponents: [],
})
export class LineModule {}
