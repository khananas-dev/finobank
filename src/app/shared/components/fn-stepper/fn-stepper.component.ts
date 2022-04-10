import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatHorizontalStepper, MatStepper } from '@angular/material/stepper';
import { IFNStepConfig, IFNStepperConfig } from './fn-stepper.model';

@Component({
  selector: 'fn-stepper',
  templateUrl: './fn-stepper.component.html',
  styleUrls: ['./fn-stepper.component.scss'],
})
export class FNStepperComponent implements OnInit, OnChanges {
  // Parameters
  @Input()
  config!: IFNStepperConfig;
  @Input()
  stepsConfig!: IFNStepConfig[];
  @Input() stepIndex: number;
  @Input()
  validateALLStep!: boolean;
  @Output() onClick: EventEmitter<any> = new EventEmitter();
  @Output() stepIndexChange: EventEmitter<number> = new EventEmitter();

  @ViewChild('stepper') stepper: MatHorizontalStepper | any;

  constructor() {
    // Initialize Default Properties
    this.stepIndex = 0;
  }

  ngOnInit() {}

  ngOnChanges() {
    if (this.validateALLStep) {
      setInterval(() => {
        this.stepper.steps.forEach((step: any, index: any) => {
          step.interacted = false;
          if (step.stepControl) {
            this.config.steps[index].isValidated = step.stepControl.valid;
            this.config.steps[index].hasError = step.stepControl.invalid;
          }
        });
      }, 10);
    }
  }

  public nextStep() {
    this.stepper.next();
    this.stepIndex = this.stepper.selectedIndex;
    this.stepIndexChange.emit(this.stepIndex);
  }
  public prevStep() {
    this.stepper.previous();
    this.stepIndex = this.stepper.selectedIndex;
    this.stepIndexChange.emit(this.stepIndex);
  }

  public changeStep(event: any) {
    this.stepper._steps.toArray()[event.previouslySelectedIndex].completed =
      false;
    if (
      this.stepper._steps.toArray()[event.previouslySelectedIndex].stepControl
    )
      this.config.steps[event.previouslySelectedIndex].isValidated =
        this.stepper._steps.toArray()[
          event.previouslySelectedIndex
        ].stepControl.valid;
    // this.stepper.steps.forEach((step,index) => {
    //   if(!this.isBigStepper)
    //     step.interacted = false;
    //   if(step.stepControl)
    //     this.config.steps[index].isValidated = step.stepControl.valid;
    // });
    if (
      this.stepper._steps.toArray()[event.previouslySelectedIndex]?.stepControl
        ?.invalid
    ) {
      this.stepper._steps.toArray()[event.previouslySelectedIndex].hasError =
        true;
    } else {
      this.stepper._steps.toArray()[event.previouslySelectedIndex].hasError =
        false;
    }
    // setTimeout(() => {
    // this.stepIndex = event.selectedIndex;
    this.stepIndexChange.emit(event.selectedIndex);
    // }, 200);
    // this.stepper._steps.toArray()[event.previouslySelectedIndex].interacted = false;
  }

  getClassForLine() {
    let className = '';
    this.config.steps.forEach((step: any, index: any) => {
      if (step.isValidated || index == this.stepIndex)
        className = 'step-valid-' + index;
    });
    return className;
  }
}
