import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from "@angular/core";
import { MatHorizontalStepper, MatStepper } from "@angular/material/stepper";


@Component({
    selector:'fn-stepper',
    templateUrl:'./fn-stepper.component.html',
    styleUrls:['./fn-stepper.component.scss']
})

export class FNStepperComponent implements OnInit, OnChanges{
    servicePropvider:any[]=[
    {value:'jio', viewValue:"Jio"},
    {value:'airtel', viewValue:"Airtel"},
    {value:'idea', viewValue:"Idea"},
    ]

    circleList:any[]=[
        {value:'mumbai',viewValue:"Mumbai"},
        {value:'maharashtra&goa',viewValue:"Maharashtra & Goa"},
        {value:'delhi',viewValue:"Delhi"},
    ]

    browsePlan:boolean = false;
    confirmationOtp:boolean = false;

    // view
    @ViewChild('stepper') stepper: MatHorizontalStepper|any;
    constructor(){
       
        
    }
    ngOnInit(): void {
        
    }

    ngOnChanges(): void {
        
    }

    action(event:any){
        console.log("on btn click is working");
        
    }

    browsePlanToggle(){
        this.browsePlan = !this.browsePlan;
    }

    nextStep(){
        this.stepper.next();
    }

    prevStep(){
        this.stepper.previous();
    }
    toggleOtpValue(){
        this.confirmationOtp = !this.confirmationOtp
    }

}