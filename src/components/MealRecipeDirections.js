export default function MealRecipeDirections({ meal }) {
    return (
        <div className="p-2">
            <h3 className="text-center mt-2">Directions</h3>
            <p className="lead px-3" style={{ whiteSpace: "pre-line" }}>
                {meal.strInstructions}
            </p>
        </div>
    );
}