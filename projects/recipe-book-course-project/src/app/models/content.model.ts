console.log("MODEL: content.model roudou: ", Date.now())

const contentAvailableToBeShown = {
	recipes: 'app-recipes',
	shoppingList: 'app-shopping-list'
} as const;

type ContentAvailableToBeShownType = typeof contentAvailableToBeShown[keyof typeof contentAvailableToBeShown];

export { ContentAvailableToBeShownType, contentAvailableToBeShown };
