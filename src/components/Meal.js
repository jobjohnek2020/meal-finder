import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import BurgerMenu from "./BurgerMenu";
import MealRecipeBasic from "./MealRecipeBasic";
import MealRecipeDirections from "./MealRecipeDirections";

export default function Meal() {
    const { id } = useParams();
    const [meal, setMeal] = useState([]);
    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id)
            .then(i => i.json())
            .then(i => {
                if (i.meals) {
                    setMeal(i.meals);
                }
            })
    }, [id]);
    return (
        <>
            <BurgerMenu />
            <Container className="border border-1 rounded-5 mb-5">
                {
                    meal.map((m) => (
                        <div key={m.idMeal}>
                            <Row className="recipe-basic mt-5 px-5">
                                <Col lg={6}>
                                    <div className="text-center">
                                        <Image src={m.strMealThumb} style={{ width: "100%", height: "50%" }} />
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <MealRecipeBasic meal={m} />
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12}>
                                    <MealRecipeDirections meal={m} />
                                </Col>
                            </Row>

                        </div>
                    ))
                }
            </Container>
        </>
    );
}