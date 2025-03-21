import MealIngredients from "./MealIngredients";
export default function MealRecipeBasic({ meal }) {

    return (
        <div className="px-2">
            <h1 className="my-2 display-1 text-center">{meal.strMeal}</h1>
            <h6 className="lead display-7 text-center">Ingredients</h6>
            <ul className="list-unstyled ingredient-scroll">
                <MealIngredients meal={meal} />
            </ul>
        </div>
    );
}