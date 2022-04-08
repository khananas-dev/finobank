import { STEPPER_GLOBAL_OPTIONS } from "@angular/cdk/stepper";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "../../shared-modules/material.module";
import { FNButtonModule } from "../fn-button/package.module";
import { FNStepperComponent } from "./fn-stepper.component";

@NgModule({
    exports:[FNStepperComponent],
    declarations:[FNStepperComponent],
    imports:[CommonModule,
        FNButtonModule,
    MaterialModule],
    providers:[
        {
            provide:STEPPER_GLOBAL_OPTIONS,
            useValue:{
                displayDefaultIndicatorType:false,showError:true
            }
        }
    ]

})
export class FNStepperModule{}