import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-secondary',
  templateUrl: './secondary.component.html',
  styleUrls: ['./secondary.component.css']
})
export class SecondaryComponent implements OnInit {
    @ViewChild('idInput') idInputRef!: ElementRef<HTMLInputElement>;
    routeReference!: string;

    constructor( private route: ActivatedRoute, private router: Router ) {}

    ngOnInit(): void {
        this.routeReference = this.route.snapshot.data['reference']
    }

    goToEnteredId() {
        const idInput = this.idInputRef.nativeElement;
        this.router.navigate(['./', idInput.value], {relativeTo: this.route})
    }
}
