import { NgModule } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select'
import { MatButtonModule } from "@angular/material/button";

@NgModule({
    exports:[
MatStepperModule,
MatIconModule,
MatInputModule,
MatSelectModule,
MatButtonModule,
    ]
})
export class MaterialModule{}