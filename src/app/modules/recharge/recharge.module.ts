import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RechargeComponent } from './recharge.component';
import { RechargeRoutingModule } from './recharge-routing.module';
import { MatSliderModule } from '@angular/material/slider';
import { MaterialModule } from 'src/app/shared/shared-modules/material.module';
import { FNStepperModule } from 'src/app/shared/components/fn-stepper/package.module';



@NgModule({
  declarations: [
    RechargeComponent
  ],
  imports: [
    CommonModule,
    RechargeRoutingModule,
    MaterialModule,
    FNStepperModule
  ]
})
export class RechargeModule { }
