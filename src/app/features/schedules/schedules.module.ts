import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchedulesRoutingModule } from './schedules-routing.module';
import { SchedulesComponent } from './schedules.component';

@NgModule({
  imports: [
    CommonModule,
    SchedulesRoutingModule
  ],
  declarations: [SchedulesComponent]
})
export class SchedulesModule { }
