import {ADD_CATALOG_SUCCESS, ADD_CATALOG_REQUEST, ADD_CATALOG_ERROR, ADD_CATEGORIES_SUCCESS, ADD_CATEGORIES_REQUEST, ADD_HIT_SUCCESS, ADD_HIT_REQUEST, ADD_NEXT_ITEMS_SUCCESS, ADD_NEXT_ITEMS_REQUEST, FETCH_CATEGORY_ITMES_SUCCSESS, FETCH_CATEGORY_ITMES_REQUEST} from './actionTypes';

export function addCatalogSuccess(items) {
    return {type: ADD_CATALOG_SUCCESS, payload: {items}}
}

export function addCatalogRequst() {
    return {type: ADD_CATALOG_REQUEST}
}

export function addCatalogError() {
    return {type: ADD_CATALOG_ERROR}
}

export function addCategoriesSuccess(categories) {
    return {type: ADD_CATEGORIES_SUCCESS, payload: {categories}}
}

export function addCategoriesRequest() {
    return {type: ADD_CATEGORIES_REQUEST}
}

export function addHitSuccess(itemsHit) {
    return {type: ADD_HIT_SUCCESS, payload: {itemsHit}}
}

export function addHitRequest() {
    return {type: ADD_HIT_REQUEST}
}

export function addNextItemsSuccess(nextItems) {
    return {type: ADD_NEXT_ITEMS_SUCCESS, payload: {nextItems}}
}

export function addNextItemsRequest() {
    return {type: ADD_NEXT_ITEMS_REQUEST}
}

export function fetchCategoryItemsSuccess(categoryItems) {
    return {type: FETCH_CATEGORY_ITMES_SUCCSESS, payload: {categoryItems}}
}

export function fetchCategoryItemsRequest(id) {
    return {type: FETCH_CATEGORY_ITMES_REQUEST, payload: {id}}
}
