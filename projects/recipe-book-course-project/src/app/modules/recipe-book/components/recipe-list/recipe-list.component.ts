import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../models/recipe.model';

@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
	@Output() recipeSelected = new EventEmitter<Recipe>();
	
	recipes: Recipe[] = [
		new Recipe('Batatas Hasselback', 'Batatas frtas e recheadas deliciosas', 'https://www.cookipedia.co.uk/wiki/images/8/8f/Hasselback_potatoes_recipe.jpg'),
		new Recipe('Receita avc', 'Batatas frtas e recheadas deliciosas', 'https://www.cookipedia.co.uk/wiki/images/8/8f/Hasselback_potatoes_recipe.jpg'),
		new Recipe('Abcate gratinado', 'Batatas frtas e recheadas deliciosas', 'https://www.cookipedia.co.uk/wiki/images/8/8f/Hasselback_potatoes_recipe.jpg'),
		new Recipe('Banana com xia', 'Batatas frtas e recheadas deliciosas', 'https://www.cookipedia.co.uk/wiki/images/8/8f/Hasselback_potatoes_recipe.jpg')
	]
}
