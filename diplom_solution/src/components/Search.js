import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import PropTypes from 'prop-types'
import { addCatalogSuccess } from '../actions/actionCreators';

function Search(props) {

    const {currentCategory} = useSelector(state => state.catalog);
    const dispatch = useDispatch();

    const [state, setstate] = useState({text: null});
    
    const handlerFetchSearch = async (event) => {
        event.preventDefault();
        const response = currentCategory !== null ? await fetch(`http://localhost:7070/api/items?categoryId=${currentCategory}&q=${state.text}`) : await fetch(`http://localhost:7070/api/items?q=${state.text}`)
        const itemsSearch = await response.json();
        dispatch(addCatalogSuccess(itemsSearch))
        console.log(itemsSearch)
    }
    const handlerSearchText = (event) => {
        console.log(event.target.value);
        setstate({text: event.target.value})
    }
    return (
        <form className="catalog-search-form form-inline" onSubmit={handlerFetchSearch}>
            <input className="form-control" placeholder="Поиск" onChange={handlerSearchText}/>
        </form>
    )
}

Search.propTypes = {

}

export default Search

