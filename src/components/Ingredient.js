import { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import {useDispatch,useSelector} from "react-redux";
export default function Ingredient() {

    const [ingredientList, setIngredientList] = useState([]);
    const filterState = useSelector(state => state.FilterReducer);
    const [ingredient, setIngredient] = useState(filterState.filteredValue);
    const dispatch = useDispatch();
    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list")
            .then(i => i.json())
            .then(i => setIngredientList(i.meals));
    }, []);

    const handleFilterValue = (e) => {
        setIngredient(e);
        let data = {listFilterValue : e, type : "setFilteredValue"};
        dispatch(data);
    };
    return (
        <Dropdown onSelect={e => handleFilterValue(e)} className="mb-2 me-2">
            <Dropdown.Toggle variant="dark">
                {ingredient}
            </Dropdown.Toggle>

            <Dropdown.Menu className="ingredient-dropdown">
                {
                    ingredientList.map((i, index) => (
                        <Dropdown.Item eventKey={i.strIngredient} key={index} active={ingredient === i.setIngredient}>{i.strIngredient}</Dropdown.Item>
                    ))
                }
            </Dropdown.Menu>
        </Dropdown>
    );
}