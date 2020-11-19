import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import PropTypes from 'prop-types'
import Search from './Search'
import { addCatalogRequst, addCatalogSuccess, addCategoriesRequest, addCategoriesSuccess, addNextItemsSuccess, fetchCategoryItemsRequest, fetchCategoryItemsSuccess } from '../actions/actionCreators';

function Catalog(props) {
    const {categories, itemsAll, nextItemsLength, offset, currentCategory, loaddingCatalog} = useSelector(state => state.catalog);
    const toggle = props.toggle;
    const dispatch = useDispatch();

    const fetchHadlerCatalogAll = async (dispatch) => {
        dispatch(addCatalogRequst());
        const response = await fetch('http://localhost:7070/api/items');
        const allItems = await response.json();
        dispatch(addCatalogSuccess(allItems))
    }

    useEffect(() => {
        dispatch(addCategoriesRequest())
        const fetchHadlerCategories = async () => {
            const response = await fetch('http://localhost:7070/api/categories');
            const categories = await response.json();
            dispatch(addCategoriesSuccess(categories))
        }
        fetchHadlerCategories();
    }, [dispatch])

    useEffect(() => {
        fetchHadlerCatalogAll(dispatch);
    }, [dispatch])

    const handleFetchNextItems = async () => {
        const response = currentCategory === null ? await fetch(`http://localhost:7070/api/items?offset=${offset}`) : await fetch(`http://localhost:7070/api/items?categoryId=${currentCategory}&offset=${offset}`);
        const nextItems = await response.json();
        dispatch(addNextItemsSuccess(nextItems))
    }

    const handleCategorie = async (id) => {
        dispatch(fetchCategoryItemsRequest(id))
        const response = await fetch(`http://localhost:7070/api/items?categoryId=${id}`);
        const categoriesItems = await response.json();
        dispatch(fetchCategoryItemsSuccess(categoriesItems))
    }
    return (
        <React.Fragment>
            <section className="catalog">
                <h2 className="text-center">Каталог</h2>
                {!toggle ? <Search /> : null}
                {categories.length > 0 ? 
                    <ul className="catalog-categories nav justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link active" href='#' onClick={() => fetchHadlerCatalogAll(dispatch)}>Все</a>
                        </li>
                        {categories.map(el => 
                            <li key={el.id} className="nav-item">
                                <a className="nav-link" href='#' onClick={() => handleCategorie(el.id)}>{el.title}</a>
                            </li>
                        )}
                    </ul>      
                : null}
                <div className="row">
                    {itemsAll.map(el => 
                        <div className="col-4">
                        <div className="card catalog-item-card">
                            <img src={el.images[0]}
                                className="card-img-top img-fluid" alt="Босоножки 'MYER'" />
                            <div className="card-body">
                                <p className="card-text">{el.title}</p>
                                <p className="card-text">{el.price}</p>
                                <a href="/products/1.html" className="btn btn-outline-primary">Заказать</a>
                            </div>
                        </div>
                        </div>    
                    )}
                </div>
                <div className="text-center">
                    {nextItemsLength < 6 ? <button className="btn btn-outline-primary" disabled>Загрузить ещё</button> : <button className="btn btn-outline-primary" onClick={handleFetchNextItems}>Загрузить ещё</button>}
                </div>
                {loaddingCatalog ? 
                    <div className="preloader">
                       <span></span>
                       <span></span>
                       <span></span>
                       <span></span>
                    </div> 
                : null}
            </section>
        </React.Fragment>
    )
}

Catalog.propTypes = {

}

export default Catalog

