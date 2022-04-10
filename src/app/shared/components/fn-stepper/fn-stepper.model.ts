import { StepState } from '@angular/cdk/stepper';
import { TemplateRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

export interface IFNStepperConfig {
  steps: IFNStepConfig[];
}

export interface IFNStepConfig {
  stepLabel: any;
  stepId?: any;
  stepTemplate: TemplateRef<any> | any;
  isOptional?: boolean;
  formGroup?: FormGroup | any;
  isValidated?: boolean;
  hasError?: boolean;
  errorMsg?: boolean;
}
