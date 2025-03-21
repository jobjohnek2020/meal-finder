import {combineReducers} from "redux";
import FilterReducer from "./FilterReducer";


const MainReducer = combineReducers({FilterReducer});

export default MainReducer;