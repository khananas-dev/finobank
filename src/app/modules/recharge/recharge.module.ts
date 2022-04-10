import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RechargeComponent } from './recharge.component';
import { RechargeRoutingModule } from './recharge-routing.module';
import { MatSliderModule } from '@angular/material/slider';
import { MaterialModule } from 'src/app/shared/shared-modules/material.module';
import { FNStepperModule } from 'src/app/shared/components/fn-stepper/package.module';
import { DetailStepComponent } from './detail-step/detail-step.component';
import { FNButtonModule } from 'src/app/shared/components/fn-button/package.module';
import { ConfirmationStepComponent } from './confirmation-step/confirmation-step.component';
import { SummaryStepComponent } from './summary-step/summary-step.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RechargeComponent,
    DetailStepComponent,
    ConfirmationStepComponent,
    SummaryStepComponent,
  ],
  imports: [
    CommonModule,
    RechargeRoutingModule,
    MaterialModule,
    FNStepperModule,
    FNButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class RechargeModule {}
