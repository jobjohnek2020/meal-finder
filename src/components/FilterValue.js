import { useSelector } from "react-redux";
import Category from "./Category";
import Area from "./Area";
import Ingredient from "./Ingredient";

export default function FilterValue(){
    const filterState = useSelector(state => state.FilterReducer);
    const filteredList = filterState.filteredList;
    return(
        filteredList === "Category" ? <Category/> :
        filteredList === "Area" ? <Area/> : <Ingredient/>
    );
}