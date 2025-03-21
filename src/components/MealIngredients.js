import { OverlayTrigger,Tooltip,Image } from "react-bootstrap"
export default function MealIngredients({meal}){
    const getIngredients = (meal) => {
        const keys = Object.keys(meal);
        const ingredientKey = keys.filter(i => i.includes("strIngredient"));
        const measureKey = keys.filter(i => i.includes("strMeasure"));
        const ingredientMap = new Map();
        let len = ingredientKey.length;
        let i = 0;
        while (i < len) {
            let measure = meal[measureKey[i]];
            let ingredient = meal[ingredientKey[i]];
            if ((measure !== "" || measure !== null) && (ingredient !== "" && ingredient !== null)) {
                ingredientMap.set(ingredient, measure);
            }
            i++;
        }
        return ingredientMap;
    };
    const getImageSource = (image) =>
        "https://www.themealdb.com/images/ingredients/" + (image.replaceAll(" ", "%20")) + "-Small.png";
    return(
        <>
            {
                [...getIngredients(meal).entries()].map(([key, value]) => (
                    <li key={key}>
                        <OverlayTrigger
                            delay={{ hide: 450, show: 300 }}
                            overlay={(props) => (
                                <Tooltip {...props}>
                                    {key}
                                </Tooltip>
                            )}
                            placement="right"
                        ><Image src={getImageSource(key)} />
                        </OverlayTrigger>
                        {value}
                    </li>
                ))
            }
        </>
    )
}