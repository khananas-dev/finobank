import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FNStepperComponent } from 'src/app/shared/components/fn-stepper/fn-stepper.component';
import { IFNStepperConfig } from 'src/app/shared/components/fn-stepper/fn-stepper.model';

@Component({
  selector: 'recharge',
  templateUrl: './recharge.component.html',
  styleUrls: ['./recharge.component.scss'],
})
export class RechargeComponent implements OnInit {
  // Config
  stepperConfig!: IFNStepperConfig;

  // Templates
  @ViewChild('stepper') stepper: FNStepperComponent | any;
  @ViewChild('detail') detail: TemplateRef<any> | any;
  @ViewChild('confirmation') confirmation: TemplateRef<any> | any;
  @ViewChild('summary') summary: TemplateRef<any> | any;

  // variables
  currentStepIndex: number | any;

  constructor() {
    // Initialize
    this.currentStepIndex = 0;
    this.stepperConfig = {
      steps: [
        {
          stepId: 1,
          stepLabel: 'Details',
          formGroup: null,
          stepTemplate: null,
          isValidated: false,
        },
        {
          stepId: 2,
          stepLabel: 'Confirmation',
          formGroup: null,
          stepTemplate: null,
          isValidated: false,
        },
        {
          stepId: 3,
          stepLabel: 'Summary',
          formGroup: null,
          stepTemplate: null,
          isValidated: false,
        },
      ],
    };
  }

  ngOnInit(): void {}

  ngAfterContentChecked() {
    this.stepperConfig.steps.forEach((step, index) => {
      switch (index) {
        case 0:
          step.stepTemplate = this.detail;
          break;
        case 1:
          step.stepTemplate = this.confirmation;
          break;
        case 2:
          step.stepTemplate = this.summary;
          break;
        default:
          break;
      }
    });
  }

  btnAction(event: any) {
    switch (event) {
      case 'next':
        this.stepper.nextStep();
        break;

      case 'prev':
        this.stepper.prevStep();
        break;

      default:
        break;
    }
  }
}
