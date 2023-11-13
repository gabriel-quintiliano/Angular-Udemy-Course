export class Ingredient {
	constructor(
		public name: string,
		public amount: number,
		public unitOfMeasure: UnitOfMeasureUnion
	) { }
}

export const unitsOfMeasure = {
	tbsp: 'tablespon(s)',
	tsp: 'teaspoon(s)',
	c: 'cup(s)',
	tc: 'teacup(s)',
	g: 'gram(s)',
	kg: 'kilo(s)',
	ml: 'mililiter(s)',
	l: 'liter(s)',
	un: 'unity(ies)',
	dz: 'dozen(s)'
} as const;

export type UnitOfMeasureUnion = keyof typeof unitsOfMeasure