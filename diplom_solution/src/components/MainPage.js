import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {nanoid} from 'nanoid'
import PropTypes from 'prop-types'
import Banner from './Banner'
import { addCatalogSuccess, addCategoriesSuccess, addHitSuccess, fetchCategoryItemsSuccess, addNextItemsSuccess, fetchCategoryItemsRequest, addCatalogRequst, addHitRequest, addCategoriesRequest } from '../actions/actionCreators'

function MainPage(props) {
    const {categories, itemsHit, itemsAll, loaddingHit, nextItemsLength, offset, currentCategory, loaddingCatalog} = useSelector(state => state.mainPage);

    const dispatch = useDispatch();

    const fetchHadlerCatalogAll = async (dispatch) => {
        dispatch(addCatalogRequst());
        const response = await fetch('http://localhost:7070/api/items');
        const allItems = await response.json();
        dispatch(addCatalogSuccess(allItems))
    }

    useEffect(() => {
        dispatch(addHitRequest())
        const fetchHadlerHit = async () => {
            const response = await fetch('http://localhost:7070/api/top-sales');
            const hit = await response.json();
            dispatch(addHitSuccess(hit))
        }
        fetchHadlerHit();
    }, [dispatch])

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
        <div className="container">
            <div className="row">
                <div className="col">
                    <Banner />

                    <section className="top-sales">
                        <h2 className="text-center">Хиты продаж!</h2>
                        
                        <div className="row">
                        {itemsHit.sort((a, b) => {return a.price - b.price}).map(el =>                         
                            <div key={nanoid()} className="col-4">
                                <div className="card">
                                    <img src={el.images[0]}
                                        className="card-img-top img-fluid" alt="Босоножки 'MYER'" />
                                    <div className="card-body">
                                        <p className="card-text">{el.title}</p>
                                        <p className="card-text">{el.price} руб.</p>
                                        <a href="/products/1.html" className="btn btn-outline-primary">Заказать</a>
                                    </div>
                                </div>
                            </div>    
                        )}
                        </div>

                        {loaddingHit ? 
                            <div className="preloader">
                               <span></span>
                               <span></span>
                               <span></span>
                               <span></span>
                            </div> : null}
                    </section>

                    <section className="catalog">
                        <h2 className="text-center">Каталог</h2>

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
                            </div> : null}
                    </section>

                </div>
            </div>
        </div>
    )
}

MainPage.propTypes = {

}

export default MainPage

