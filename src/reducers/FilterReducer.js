const initialState = {
    filteredList: "Category",
    filteredValue: "Vegetarian" ,
    mealsUrl: "https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian"
};


const FilterReducer = (state = initialState, action) => {
    const getMealsUrl = (listFilter,listFilterValue) => {
        let url = "https://www.themealdb.com/api/json/v1/1/filter.php?";
        let filterUrl = "c=";
        if(listFilter === "Area") {
            filterUrl = "a=";
        } else if(listFilter === "Ingredient"){
            filterUrl = "i=";
        }
        return url + filterUrl + (listFilterValue.replaceAll(" ","%20"));
    };
    switch (action.type) {
        case "setFilter":
            return {
                ...state,
                filteredList: action.listFilter,
                filteredValue : action.listFilter === "Category" ? "Vegetarian" : action.listFilter === "Area" ? "American" : "Chicken"
            }
        case "setFilteredValue":
            return {
                ...state,
                filteredValue: action.listFilterValue
            }
        case "setMealsUrl":
            return {
                ...state,
                mealsUrl : getMealsUrl(state.filteredList,state.filteredValue)
            }
        default: 
        return state;
    }

};

export default FilterReducer;