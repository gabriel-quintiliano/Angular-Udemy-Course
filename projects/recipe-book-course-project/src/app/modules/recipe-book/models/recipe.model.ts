import { Ingredient } from "../../shopping-list/models/ingredient.model";

export class Recipe {
    private static nextRecipeId = 0;
    id!: number;

	constructor(
		public name: string,
		public description: string,
		public imagePath: string,
		public ingredients: Ingredient[],
	) { 
        this.id = Recipe.nextRecipeId;
        Recipe.nextRecipeId++;
    }
}
