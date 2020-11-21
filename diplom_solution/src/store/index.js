import {createStore, combineReducers} from 'redux';
import catalogReducer from '../reducers/catalog';
import topSalesReducer from '../reducers/topSales';


const reducer = combineReducers({
    topSales: topSalesReducer,
    catalog: catalogReducer
});

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;