import { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import {useDispatch,useSelector} from "react-redux";
export default function Area(){

    const [areaList, setAreaList] = useState([]);
    const filterState = useSelector(state => state.FilterReducer);
    const [area, setArea] = useState(filterState.filteredValue);
    const dispatch = useDispatch();
    const handleFilterValue = (e) => {
        setArea(e);
        let data = {listFilterValue : e, type : "setFilteredValue"};
        dispatch(data);
    };
    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
            .then(i => i.json())
            .then(i => setAreaList(i.meals));
    }, []);

    return (
        <Dropdown onSelect={(e)=> handleFilterValue(e)} className="mb-2 me-2">
            <Dropdown.Toggle variant="dark">
                {area}
            </Dropdown.Toggle>

            <Dropdown.Menu className="ingredient-dropdown">
            {
                    areaList.map((a,index)=>(
                        <Dropdown.Item eventKey={a.strArea} key={index} active={a.setArea === area}>{a.strArea}</Dropdown.Item>
                    ))
                }
            </Dropdown.Menu>
        </Dropdown>
    );
}