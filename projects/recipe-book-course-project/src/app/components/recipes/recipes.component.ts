console.log("FILE: recipes.component.ts rodou: ", Date.now())
import { Component } from '@angular/core';
import { UnsuedService } from '../../services/unsued.service';
@Component({
	selector: 'app-recipes',
	templateUrl: './recipes.component.html',
	styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
    constructor(private unusedService: UnsuedService) {
        console.log("RecipesComponent (AppModule) foi construído: ", Date.now())
    }
    
    ngOnInit() {
        console.log("RecipesComponent (AppModule) rodou ngOnInit(): ", Date.now())
    }
 }
