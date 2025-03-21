import { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import {useDispatch,useSelector} from "react-redux";
export default function Category() {

    const [categoryList, setCategoryList] = useState([]);

    const filterState = useSelector(state => state.FilterReducer);
    const [category, setCategory] = useState(filterState.filteredValue);

    const dispatch = useDispatch();
    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
            .then(i => i.json())
            .then(i => setCategoryList(i.meals));
    }, []);

    const handleFilterValue = (e) => {
        setCategory(e);
        let data = {listFilterValue : e, type : "setFilteredValue"};
        dispatch(data);
    };
    return (
        <Dropdown onSelect={(e) => handleFilterValue(e)} className="mb-2 me-2">
            <Dropdown.Toggle variant="dark">
                {category}
            </Dropdown.Toggle>

            <Dropdown.Menu className="ingredient-dropdown">
                {
                    categoryList.map((c, index) => (
                        <Dropdown.Item eventKey={c.strCategory} key={index} active={c.strCategory === category}>{c.strCategory}</Dropdown.Item>
                    ))
                }
            </Dropdown.Menu>
        </Dropdown>
    );
}