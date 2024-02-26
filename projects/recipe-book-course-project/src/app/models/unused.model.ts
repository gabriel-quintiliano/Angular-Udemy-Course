console.log("MODEL: unused.model roudou: ", Date.now())

const Unused = {
	recipes: 'app-recipes',
	shoppingList: 'app-shopping-list'
} as const;

type UnusedType = typeof Unused[keyof typeof Unused];

export { Unused, UnusedType };

