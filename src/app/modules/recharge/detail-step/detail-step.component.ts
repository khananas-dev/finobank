import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MobileRechargeModel } from './Model/mobile-recharge.model';

@Component({
  selector: 'detail-step',
  templateUrl: './detail-step.component.html',
  styleUrls: ['./detail-step.component.scss'],
})
export class DetailStepComponent implements OnInit {
  // Dummy Json
  serviceProviderList: any[] = [
    { value: 'jio', viewValue: 'Jio' },
    { value: 'airtel', viewValue: 'Airtel' },
    { value: 'idea', viewValue: 'Idea' },
  ];

  circleList: any[] = [
    { value: 'mumbai', viewValue: 'Mumbai' },
    { value: 'maharashtra&goa', viewValue: 'Maharashtra & Goa' },
    { value: 'delhi', viewValue: 'Delhi' },
  ];

  browsePlanList = [
    {
      name: 'talkTime',
      label: 'Talk Time',
      data: [
        {
          amount: 'NA',
          validity: '1 month',
          description:
            'All ZEE5 Originals and Exclusives, Blockbuster Movies, All ALT Balaji Shows, Zindagi TV Shows, Kids, Live TV, TV shows before telecast. Watch on 5 devices at a time',
          price: '399',
        },
        {
          amount: 'NA',
          validity: '1 month',
          description:
            'All ZEE5 Originals and Exclusives, Blockbuster Movies, All ALT Balaji Shows, Zindagi TV Shows, Kids, Live TV, TV shows before telecast. Watch on 5 devices at a time',
          price: '499',
        },
        {
          amount: 'NA',
          validity: '1 month',
          description:
            'All ZEE5 Originals and Exclusives, Blockbuster Movies, All ALT Balaji Shows, Zindagi TV Shows, Kids, Live TV, TV shows before telecast. Watch on 5 devices at a time',
          price: '599',
        },
      ],
    },
    {
      name: 'topup',
      label: 'Topup',
      data: [
        {
          amount: 'NA',
          validity: '1 month',
          description:
            'All ZEE5 Originals and Exclusives, Blockbuster Movies, All ALT Balaji Shows, Zindagi TV Shows, Kids, Live TV, TV shows before telecast. Watch on 5 devices at a time',
          price: '399',
        },
        {
          amount: 'NA',
          validity: '1 month',
          description:
            'All ZEE5 Originals and Exclusives, Blockbuster Movies, All ALT Balaji Shows, Zindagi TV Shows, Kids, Live TV, TV shows before telecast. Watch on 5 devices at a time',
          price: '499',
        },
        {
          amount: 'NA',
          validity: '1 month',
          description:
            'All ZEE5 Originals and Exclusives, Blockbuster Movies, All ALT Balaji Shows, Zindagi TV Shows, Kids, Live TV, TV shows before telecast. Watch on 5 devices at a time',
          price: '599',
        },
      ],
    },
    {
      name: 'mobileData',
      label: '3G Mobile Data',
      data: [
        {
          amount: 'NA',
          description:
            'All ZEE5 Originals and Exclusives, Blockbuster Movies, All ALT Balaji Shows, Zindagi TV Shows, Kids, Live TV, TV shows before telecast. Watch on 5 devices at a time',
          price: '399',
        },
        {
          amount: 'NA',
          validity: '1 month',
          description:
            'All ZEE5 Originals and Exclusives, Blockbuster Movies, All ALT Balaji Shows, Zindagi TV Shows, Kids, Live TV, TV shows before telecast. Watch on 5 devices at a time',
          price: '499',
        },
        {
          amount: 'NA',
          validity: '1 month',
          description:
            'All ZEE5 Originals and Exclusives, Blockbuster Movies, All ALT Balaji Shows, Zindagi TV Shows, Kids, Live TV, TV shows before telecast. Watch on 5 devices at a time',
          price: '599',
        },
      ],
    },
  ];

  // Output Variable
  @Output() onBtnClick: EventEmitter<any> = new EventEmitter();

  // Variable
  browsePlan: boolean = false;
  confirmationOtp: boolean = false;
  reachargeMode: string | any;

  // Form Model
  mobileRechargeModel: MobileRechargeModel = new MobileRechargeModel();

  // Form
  mobileRechargeForm = new FormGroup({
    phoneNumber: new FormControl(''),
    serviceProvider: new FormControl(''),
    areaCircle: new FormControl(''),
    amount: new FormControl(''),
  });

  constructor() {
    this.reachargeMode   = "mobile";
  }

  ngOnInit(): void {}

  browsePlanToggle() {
    this.browsePlan = !this.browsePlan;
  }

  btnAction(actionCase?: any) {
    this.onBtnClick.emit(actionCase);
    // console.log(this.mobileRechargeModel);
  }
  planPrice(event: any) {
    console.log(event);
    this.mobileRechargeForm.patchValue({
      amount: event,
    });
  }

  rechargeFormSubmit() {
    console.log(this.mobileRechargeModel);
    const event = {
      event: 'firstStepSubmit',
      data: this.mobileRechargeModel,
    };
    this.onBtnClick.emit(event);
  }
}
