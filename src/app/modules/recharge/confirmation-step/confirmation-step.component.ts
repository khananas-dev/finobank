import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'confirmation-step',
  templateUrl: './confirmation-step.component.html',
  styleUrls: ['./confirmation-step.component.scss'],
})
export class ConfirmationStepComponent implements OnInit {
  // Variable
  confirmationOtp: boolean = false;
  @Output() onBtnClick: EventEmitter<any> = new EventEmitter();
  @Input() rechargeData: any;
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges() {
    if (this.rechargeData) {
      console.log(this.rechargeData);
    }
  }

  btnAction(actionCase?: any) {
    this.onBtnClick.emit(actionCase);
  }

  toggleOtpValue() {
    this.confirmationOtp = !this.confirmationOtp;
  }
}
