import { Component } from '@angular/core';
import { Recipe } from '../../models/recipe.model';

@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
	recipes: Recipe[] = [
		new Recipe('Batatas Hasselback', 'Batatas frtas e recheadas deliciosas', 'https://www.cookipedia.co.uk/wiki/images/8/8f/Hasselback_potatoes_recipe.jpg')
	]
}
