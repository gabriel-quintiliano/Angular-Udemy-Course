const contentAvailableToBeShown = {
	recipes: 'app-recipes',
	shoppingList: 'app-shopping-list'
} as const;

type ContentAvailableToBeShownType = typeof contentAvailableToBeShown[keyof typeof contentAvailableToBeShown];

export { contentAvailableToBeShown, ContentAvailableToBeShownType }