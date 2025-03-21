import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import {useSelector,useDispatch} from "react-redux";

export default function FilterDropdown() {
    const filters = ["Category", "Area", "Ingredient"];

    const filterState = useSelector(state => state.FilterReducer);

    const [filterValue, setFilterValue] = useState(filterState.filteredList);

    const dispatch = useDispatch();
    const handleFilter = (e) =>{
        setFilterValue(e);
        let data = {listFilter : e, type : "setFilter"};
        dispatch(data);
    };
    return (
        
            <Dropdown onSelect={(e) => handleFilter(e)} className="mb-2 me-2">
                <Dropdown.Toggle variant="dark">
                    {filterValue}
                </Dropdown.Toggle>
                <Dropdown.Menu className="ingredient-dropdown">
                    {
                        filters.map((f, index) => (
                            <Dropdown.Item eventKey={f} key={index}>{f}</Dropdown.Item>
                        ))
                    }
                </Dropdown.Menu>
            </Dropdown>
        
    );
}