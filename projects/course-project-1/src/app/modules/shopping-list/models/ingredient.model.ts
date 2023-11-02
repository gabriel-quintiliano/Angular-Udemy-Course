export class Ingredient {
	constructor(
		public name: string,
		public qty: number,
		public unitOfMeasure: UnitOfMeasureUnion
	) { }
}

export const unitsOfMeasure = {
	un: "unidade(s)",
	cc: 'colher(es) de chá',
	ccf: 'colher(es) de café',
	cs: 'colher de sopa',
	csb: 'colher(es) de sobremesa',
	xc: 'xácara(s) de chá',
	xcf: 'xícara(s) de café',
	g: 'grama(s)',
	kg: 'quilo(s)',
	ml: 'mililitro(s)',
	l: 'litro(s)'
} as const;

export type UnitOfMeasureUnion = keyof typeof unitsOfMeasure