import {ADD_CATALOG_SUCCESS, ADD_CATALOG_REQUEST, ADD_CATALOG_ERROR, ADD_CATEGORIES_REQUEST, ADD_CATEGORIES_SUCCESS, ADD_HIT_SUCCESS, ADD_HIT_REQUEST, ADD_NEXT_ITEMS_SUCCESS, FETCH_CATEGORY_ITMES_SUCCSESS, FETCH_CATEGORY_ITMES_REQUEST} from '../actions/actionTypes';

const initialState = {
    categories: [],
    itemsHit: [],
    itemsAll: [],
    loaddingHit: null,
    nextItemsLength: null,
    offset: null,
    currentCategory: null,
    loaddingCatalog: null
}

export default function mainPageReducer (state = initialState, action) {
    switch(action.type) {
        case ADD_CATALOG_SUCCESS:
            const {items} = action.payload;
            return {...state, itemsAll: items, currentCategory: null, nextItemsLength: items.length, offset: items.length, loaddingCatalog: false}
        case ADD_CATALOG_REQUEST:
            return {...state, loaddingCatalog: true}
        case ADD_CATEGORIES_SUCCESS:
            const {categories} = action.payload;
            return {...state, categories: categories};
        case ADD_HIT_SUCCESS:
            const {itemsHit} = action.payload;
            return {...state, itemsHit: itemsHit, loadingHit: false};
        case ADD_HIT_REQUEST:
            return {...state, loadingHit: true};
        case ADD_NEXT_ITEMS_SUCCESS:
            const {nextItems} = action.payload;
            return {...state, itemsAll: [...state.itemsAll, ...nextItems], nextItemsLength: nextItems.length, offset: state.offset + 6};
        case FETCH_CATEGORY_ITMES_SUCCSESS: 
            const {categoryItems} = action.payload;
            return {...state, itemsAll: categoryItems, nextItemsLength: categoryItems.length, offset: categoryItems.length}
        case FETCH_CATEGORY_ITMES_REQUEST:
            const {id} = action.payload;
            return {...state, currentCategory: id}
        default:
            return state;
    }
}