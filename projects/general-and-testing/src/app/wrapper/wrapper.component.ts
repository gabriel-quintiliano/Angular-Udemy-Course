import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { RangeData } from '../range-data.model';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements OnInit {
    @ViewChild("rangeInput") rangeInputRef!: ElementRef<HTMLInputElement>;

    isValid!: boolean;
    timesRan!: number;
    lastRunTimestamp!: string;
    range!: number;

    constructor( private route: ActivatedRoute, private router: Router ) {}

    ngOnInit() {
        this.route.data.subscribe( (data: Data) => {
            const rangeData = data['rangeData'] as RangeData;
            this.isValid = rangeData.isValid;
            this.lastRunTimestamp = rangeData.lastRunTimestamp;
            this.range = Number(rangeData.range);
            this.timesRan = Number(rangeData.timesRan);
        })
    }

    checkNewRange() {
        const inputVal = this.rangeInputRef.nativeElement.value;

        if (!inputVal) return

        this.router.navigate(['/', inputVal])
    }
}
