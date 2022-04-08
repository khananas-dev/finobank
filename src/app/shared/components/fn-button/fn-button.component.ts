import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
    selector:'fn-button',
    templateUrl:'./fn-button.component.html',
    styleUrls:['./fn-button.component.scss'],
})

export class FNButtonComponent implements OnInit{

    // Parameters

    @Input() buttonType: any; // reset, submit, button
    @Output() onClick: EventEmitter<any> = new EventEmitter();
    constructor(){

    }

    ngOnInit(){

    }

    clickBtn(button:any){
        button.preventDefault();
        this.onClick.emit(button)
    }
}