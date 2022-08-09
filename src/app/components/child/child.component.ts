import {
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit, ChangeDetectorRef,
    Component,
    DoCheck, EventEmitter, Input,
    OnChanges,
    OnDestroy,
    OnInit, Output, SimpleChanges
} from '@angular/core';


@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

    @Output() onDestroyEvent: EventEmitter<string> = new EventEmitter<string>();
    @Input() someTrigger: boolean = false;

    composedText: string = '';
    simpleText: string = '';

    constructor(
        private _changeDetector: ChangeDetectorRef
    ) {
    }

    ngOnInit(): void {
        this.composedText += 'Call from ---ngOnInit--- \n ';
        console.log('Call from ---ngOnInit---');
    }

    ngAfterContentChecked(): void {
        this.composedText += 'Call from ---ngAfterContentChecked--- \n';
        console.log('Call from ---ngAfterContentChecked---');
    }

    ngAfterContentInit(): void {
        this.composedText += 'Call from ---ngAfterContentInit--- \n';
        console.log('Call from ---ngAfterContentInit---');
    }

    ngAfterViewChecked(): void {
        this.composedText += 'Call from ---ngAfterViewChecked--- \n';
        console.log('Call from ---ngAfterViewChecked---');
        this._changeDetector.detectChanges();
    }

    ngAfterViewInit(): void {
        this.composedText += 'Call from ---ngAfterViewInit--- \n';
        console.log('Call from ---ngAfterViewInit---');
    }

    ngDoCheck(): void {
        this.composedText += 'Call from ---ngDoCheck--- \n';
        console.log('Call from ---ngDoCheck---');
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.composedText += 'Call from ---ngOnChanges--- \n';
        console.log('Call from ---ngOnChanges---');
    }

    ngOnDestroy(): void {
        this.composedText += 'Call from ---ngOnDestroy--- \n';
        this.onDestroyEvent.emit('Call from ---ngOnDestroy---');
    }

    clearText() {
        this.composedText = '';
    }
}
