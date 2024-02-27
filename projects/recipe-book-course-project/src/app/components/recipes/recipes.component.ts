console.log("FILE: recipes.component.ts rodou: ", Date.now())
import { Component } from '@angular/core';
@Component({
	selector: 'app-recipes',
	templateUrl: './recipes.component.html',
	styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
    constructor() {
        console.log("COMPONENT: RecipesComponent (AppModule) foi construído: ", Date.now())
    }
    
    ngOnInit() {
        console.log("ngOnInit: RecipesComponent (AppModule) rodou ngOnInit(): ", Date.now())
    }
 }
