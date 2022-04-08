import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "../../shared-modules/material.module";
import { FNButtonComponent } from "./fn-button.component";

@NgModule({
    exports:[FNButtonComponent],
    declarations:[FNButtonComponent],
    imports:[
        CommonModule,
        MaterialModule
    ]
})

export class  FNButtonModule{}