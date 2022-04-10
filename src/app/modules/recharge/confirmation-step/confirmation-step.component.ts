import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'confirmation-step',
  templateUrl: './confirmation-step.component.html',
  styleUrls: ['./confirmation-step.component.scss'],
})
export class ConfirmationStepComponent implements OnInit {
  // Variable
  confirmationOtp: boolean = false;
  @Output() onBtnClick: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  btnAction(actionCase?: any) {
    this.onBtnClick.emit(actionCase);
  }

  toggleOtpValue() {
    this.confirmationOtp = !this.confirmationOtp;
  }
}
