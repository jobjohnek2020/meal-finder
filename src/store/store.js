import {legacy_createStore as createStore} from "redux";
import MainReducer from "../reducers/Reducers";

const MealStore = createStore(MainReducer);

export default MealStore;