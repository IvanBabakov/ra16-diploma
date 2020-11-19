import {createStore, combineReducers} from 'redux';
import catalogReducer from '../reducers/catalog';
import mainPageReducer from '../reducers/mainPage';


const reducer = combineReducers({
    mainPage: mainPageReducer,
    catalog: catalogReducer
});

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;