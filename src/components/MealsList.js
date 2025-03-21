import { Container, Row, Col, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";
export default function MealsList() {

    const filterState = useSelector(state => state.FilterReducer);

    const [meals, setMeals] = useState([]);

    const getMeals = (mealsUrl) => {
        fetch(mealsUrl)
            .then(i => i.json())
            .then(i => {
                if (i.meals) {
                    setMeals(i.meals);
                } else {
                    setMeals([]);
                }
            });
    };

    useEffect(() => {
        getMeals(filterState.mealsUrl);
    }, [filterState]);

    const navigate = useNavigate();
    const mealClickHandler = (id) => {
        navigate(`/meal/${id}`, { replace: true });
    };
    return (
        <>
            <BurgerMenu />
            <Container className="mt-5">
                <Row>
                    {
                        meals.map((meal, index) => (
                            <Col lg={4} key={index}>
                                <Card className="mb-5">
                                    <Card.Img src={meal.strMealThumb} alt="card image"/>
                                    <Card.ImgOverlay>
                                        <Card.Title className="meal-title">
                                            <Link to={`/meal/${meal.idMeal}`} onClick={() => mealClickHandler(meal.idMeal)} className="text-decoration-none text-white">
                                                <h3>{meal.strMeal}</h3>
                                            </Link>
                                        </Card.Title>
                                    </Card.ImgOverlay>
                                </Card>
                            </Col>

                        ))
                    }
                </Row>
            </Container>
        </>
    );
}
