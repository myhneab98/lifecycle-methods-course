import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-wrapper',
    templateUrl: './wrapper.component.html',
    styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent {

    someValue: boolean = true;
    showChildComponent: boolean = false;
    messageFromChild: string = 'Child component is not initialized yet';

    constructor() {
    }

    modifyInput() {
        this.someValue = !this.someValue;
    }

    toggleChildComponent() {
        this.showChildComponent = !this.showChildComponent;
    }

    handleChildDestroy(message: string) {
        this.messageFromChild = message;
    }
}
