
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { CalendarComponent } from './calendar/calendar.component';
import { HeatMapsRoutingModule } from './heat-maps-routing.module';
@NgModule({
  declarations: [
    CalendarComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HeatMapsRoutingModule,
  ]
})
export class HeatMapsModule { }
