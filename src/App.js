import './App.css';
import {Provider} from "react-redux";
import MealStore from './store/store';
import MealsList from './components/MealsList';
import {HashRouter,Routes,Route} from "react-router-dom";
import Meal from './components/Meal';
function App() {
  return (
    <Provider store={MealStore}>
      <HashRouter>
        <Routes>
          <Route index element={<MealsList/>}/>
          <Route exact path="/meal/:id" element={<Meal/>}/>
        </Routes>
      </HashRouter>
    </Provider>
    
  );
}

export default App;
